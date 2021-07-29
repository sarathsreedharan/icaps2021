import {backendBaseUrl} from '../assets/js/backendBaseUrl.js';
// import { Vue, store } from '/assets/component/myheader.js';
var app = new Vue({
    el: '#app',
    data: {
        Date:'',
        address:"",
        InfoModal:{},
        name:'',
        reg_data:{}
    },
    mounted(){
        this.InfoModal = new bootstrap.Modal(document.getElementById('Information'));
        this.InfoModal.show();
        this.Date = new Date().toLocaleDateString()
        axios.get(backendBaseUrl+'/api/users/profile', { headers: { Authorization: window.localStorage.getItem("token") } }
        ).then(res => {
            console.log(res)
           this.name = res.data.profile.first_name + ' ' + res.data.profile.last_name
        }).catch(err => {
            window.location.href = './index.html'
        })
        axios.get(backendBaseUrl+'/api/registrations/payvalue',{ headers: { Authorization: window.localStorage.getItem("token") } }).then(res=>{
            this.reg_data = res.data
        })
        console.log(this.user)
    },
    computed:{
        total(){
            var total = 0;
            for(var i = 0; i < this.reg_data.length; i++){
                total +=  parseFloat(this.reg_data[i].value)
            }
            return total

        }
    },
    methods:{
        print(){
            var bdhtml=window.document.body.innerHTML; 
            var jubuData = document.getElementById("print").innerHTML;
            //把获取的 局部div内容赋给body标签, 相当于重置了 body里的内容
            window.document.body.innerHTML= jubuData; 
            //调用打印功能
            
            window.print();
            window.document.body.innerHTML=bdhtml;//重新给页面内容赋值；
            return false;
        }
    }

})