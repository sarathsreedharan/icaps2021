import {backendBaseUrl} from '../assets/js/backendBaseUrl.js';
import { resetItem } from '../assets/js/data.js';
import Vue from '../assets/js/vue.esm.browser.js';
import Vuex from '../assets/js/vuex.esm.browser.js';
import axios from '../assets/js/axios.js';

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

var demo_app = new Vue({
    el: '#demo_app',
    data: {
    },
    store:store,
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
        },
        methods: {
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
});
