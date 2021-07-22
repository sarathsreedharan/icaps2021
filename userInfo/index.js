import {backendBaseUrl} from '../assets/js/backendBaseUrl.js';
import {country} from '../assets/js/data.js';
import {Vue, store} from '/assets/component/myheader.js'
var app = new Vue({
    el: '#app',
    store: store,
    data: {
        isLogin: false,
        user: {
        },
        columns: {
            first_name: "First name",
            last_name: "Last name",
            pronoun: "Pronoun",
            institution: "Institution",
            country: "Country"
        },
        Edit:true,
        country:country,
        tipsModal:{},
        modalmsg:'',
    },
    methods: {
        updateProfile: function () {
            this.Edit = !this.Edit;
            axios.patch(backendBaseUrl+'/api/users/profile',this.user.profile,{ headers: { Authorization: window.localStorage.getItem("token") }})
            .then(res=>{
                console.log(res);
            })
        },
        toRegistration(){
            window.location.href = '../registration'
        },
        logout: function () {
            window.localStorage.setItem("token", "");
            window.location.href = "../login";
        },
        forceQuit: function () {
            this.modalmsg = "Please log in first!";
            this.tipsModal.show();
            setTimeout(() => {
                window.location.href = "/login"
            }, 1500);
            
        }
    },
    mounted: function () {
        axios.defaults.withCredentials = true;
        this.tipsModal = new bootstrap.Modal(document.getElementById('tips'));
        let token = window.localStorage.getItem("token");
        if (token == null || token == "") {
            console.log("No token detected");
            this.forceQuit();
            return;
        }
        // this.isLogin = isLogin(token);
        axios.get(backendBaseUrl+'/api/users/profile', { headers: { Authorization: window.localStorage.getItem("token") } }
        ).then(res => {
            console.log(res);
            this.user = res.data;
            if(this.user.reg){
                this.user.reg.registration_datetime=moment(this.user.reg.registration_datetime).format("YYYY-MM-DD hh:mm:ss");
            }
        }).catch(err => {
            console.log(err);
            this.forceQuit();
        })
        
    },
})
