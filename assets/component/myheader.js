import {backendBaseUrl} from '../js/backendBaseUrl.js';
import { resetItem } from '../js/data.js';
import Vue from '../js/vue.esm.browser.js';
import Vuex from '../js/vuex.esm.browser.js';
import axios from '../js/axios.js';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        isLogin: false,
        isRegistration: false,
        user: {},
        flag: '',
        
    },
    mutations: {
        setLogin(state, payload) {
            state.isLogin = payload;
        },
        setRegistration(state, payload) {
            state.isRegistration = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
    }
})
async function getTemplate(){
    // let storage=window.localStorage;
    // if (storage.getItem("header")==null||storage.getItem("header")==""||Number(storage.getItem("header_cnt"))>2) {
    //     storage.setItem("header",(await axios.get("/assets/component/myheader.html")).data);
    //     storage.setItem("header_cnt",0);
    // }
    // let cnt = Number(storage.getItem("header_cnt"));
    // storage.setItem("header_cnt",cnt+1);
    // return storage.getItem("header");
    return (await axios.get("/assets/component/myheader.html")).data;
}


Vue.component('myheader',async function(resolve,reject){
    return resolve({
        props: ['curpage', 'curitem'],
        store: store,
        data: function () {
            return {
                token: "",
                begin: '',
                isOrderT: false,
                // isFillPhone: false,
                tipsModal: {},
                phoneModal:{},
                modalmsg:'',
                survey:{
                    Tshirt_style:'',
                    Tshirt_size:'',
                    country:'',
                    full_name:'',
                    address1:'',
                    address2:'',
                    address_state: '',
                    phone:'',
                    postal_code:'',
                    attend_event:false,
                    attend_workshops:{
                        HPlan:false,
                        HSDIP:false,
                        IntEx:false,
                        KEPS:false,
                        PRL:false,
                        WIPC:false,
                        XAIP:false,
                        FinPlan:false,
                        SPARK:false,
                        PlanRob:false,
                    },
                },
                fail: false,
            }
        },
        template: await getTemplate(),
        created: function () {
            axios.defaults.withCredentials = true;
            if (window.localStorage.getItem('token')) {
                axios.get(backendBaseUrl + '/api/users/profile', {
                    headers: {
                        "Authorization": localStorage.getItem('token')
                    }
                }).then(res => {
                    console.debug("setting login true and user");
                    this.$store.commit("setLogin", true);
                    this.$store.commit("setUser", res.data);
                    if (this.$store.state.user.reg && this.$store.state.user.reg.registration) {
                        this.$store.commit("setRegistration", true);
                    }
                }).catch(err => {
                    console.log(err)
                });
                localStorage.setItem('flag', 0);
                localStorage.setItem('tokenTime', Date.parse(new Date()))
                this.begin = setInterval(() => {
                    if (Date.parse(new Date) - localStorage.getItem('tokenTime') > 59000) {
                        resetItem('flag', 0)
                    }
                }, 60000)
            } else {
                axios.post(backendBaseUrl + '/api/users/logout').then(res => { })
            }
        },
        mounted() {
            window.a = this
            this.tipsModal = new bootstrap.Modal(document.getElementById('tips'));
            this.phoneModal = new bootstrap.Modal(document.getElementById('phone'))
            axios.get(backendBaseUrl + '/api/registrations/survey',{
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            }).then(res => {
                this.survey = res.data;
                if (!this.isNSTshirt && (this.survey.phone == '' || this.survey.phone==null)) {
                    this.phoneModal.show()
                }
            }).catch(err => {
                console.log(err)
            })
            axios.defaults.withCredentials = true;
            window.addEventListener("setItemEvent", (e) => {
                if (e.newValue == 0 && this.isLogin) {
                    axios.get(backendBaseUrl + '/api/test/heartbeat', {
                        headers: {
                            "Authorization": localStorage.getItem('token')
                        }
                    }).then(res => {
                        if (res.data.message == "refresh") {
                            console.log(res.data)
                            let token = res.data.token;
                            localStorage.setItem('token', token)
                        }
                        console.log(Date.parse(new Date) - localStorage.getItem('tokenTime'))
                        resetItem('flag', 1)
                        localStorage.setItem('tokenTime', Date.parse(new Date()))
                    }).catch(err => {
                        if (err.response.status == 401) {
                            clearInterval(this.begin);
                            axios.post(backendBaseUrl + '/api/users/logout').then(res => {})
                        }
                    })
                }
            })
        },
        computed: {
            isLogin: function () {
                return this.$store.state.isLogin;
            },
            isRegistration: function () {
                return this.$store.state.isRegistration;
            },
            user: function () {
                return this.$store.state.user;
            },
            isNSTshirt:function(){
                let flag = this.survey.Tshirt_style + this.survey.Tshirt_size + this.survey.country + this.survey.full_name + this.survey.address1 + this.survey.address2 + this.survey.address_state + this.survey.postal_code;
                return flag==''?true:false;
            },
        },
        methods: {
            submitSurvey() {
                if (!this.survey.phone || this.survey.phone == '') {
                    this.fail = true
                    return;
                }
                axios.post(backendBaseUrl + '/api/registrations/survey', this.survey,{
                    headers: {
                        "Authorization": localStorage.getItem('token')
                    }
                }).then(res => {
                    this.phoneModal.hide()
                    this.fail = false
                    this.modalmsg = 'Submission Successful!'
                    this.tipsModal.show()
                    setTimeout(() => {
                        this.tipsModal.hide()
                    }, 2000);
                }).catch(err => {
                    this.fail = true;
                })
            },
            async logout() {
                clearInterval(this.begin);
                localStorage.setItem('token', '');
                await axios.post(backendBaseUrl+'/api/users/logout'
                ).then(res=>{
                }).catch(err=>{
                    console.log(err)
                })
                window.location.reload();
            },
            login() {
                window.location.href = '/login';
            },
            attending() {
                window.location.href = '/attending';
            },
            userInfo() {
                window.location.href = '/userInfo';
            }
        },
    })
});
var header = new Vue({
    el: '#icaps-header',
    data: {
    },
    store:store
});
window.x = header;
export {Vue,header,store};

