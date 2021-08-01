import {backendBaseUrl} from "../assets/js/backendBaseUrl.js"
var app = new Vue({
    el: '#app',
    data: {
        user: {
            email: "",
            password: "",
        },
        errorTip:{
            isError:false,
            message:'',
        }
    },
    methods:{
        login(){
            axios.post(backendBaseUrl+'/api/users/login',this.user
            ).then(res=>{
                localStorage.setItem("token",res.data.token);
                window.location.href = "/userInfo";
            }).catch(err=>{
                this.user.password = '';
                this.errorTip.isError = true;
                if(err.response.status==400){
                    this.errorTip.message = 'wrong password or email!';
                } else {
                    this.errortip.message = 'Unknown error!';
                }
                
            })
        },
        handlerClick(){
            this.errorTip.isError = false;
        }
    },
    mounted(){
        axios.defaults.withCredentials = true;
    }
})
