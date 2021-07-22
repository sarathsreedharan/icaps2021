import {backendBaseUrl} from '../js/backendBaseUrl.js';
import Vue from '../js/vue.esm.browser.js';
import Vuex from '../js/vuex.esm.browser.js';
import axios from '../js/axios.js';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        isLogin: false,
        isRegistration: false,
        user: {}
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
    let storage=window.localStorage;
    if (storage.getItem("header")==null||storage.getItem("header")==""||Number(storage.getItem("header_cnt"))>3) {
        storage.setItem("header",(await axios.get("/assets/component/myheader.html")).data);
        storage.setItem("header_cnt",0);
    }
    let cnt = Number(storage.getItem("header_cnt"));
    storage.setItem("header_cnt",cnt+1);
    return storage.getItem("header");
    // return (await axios.get("/assets/component/myheader.html")).data;
}


Vue.component('myheader',async function(resolve,reject){
    return resolve({
        props: ['curpage', 'curitem'],
        store:store,
        data: function () {
            return {
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
            }
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
            }
        },
        methods: {
            async logout() {
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

