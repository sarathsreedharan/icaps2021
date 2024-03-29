import {backendBaseUrl} from '../assets/js/backendBaseUrl.js';
import {country,eduMail} from '../assets/js/data.js';
import { Vue , header} from '/assets/component/myheader.js';
import { paypal_url } from '../assets/config/paypal.js';

// inject js file and export a handle after load it complete
function injectJS(src, onload) {
    var loaded = Array.from(document.scripts).some(it => it.getAttribute('src') === src); // Warn：script.src !== script.getAttribute('src')
    if (loaded) {
        typeof onload === 'function' && onload();
        return ;
    }
    var script = document.createElement('script');
    script.src = src;
    document.head.insertBefore(script, document.head.firstElementChild);
    script.addEventListener('load', (ev) => {
        typeof onload === 'function' && onload();
    });
}
injectJS(paypal_url,()=>{
    console.log("paypal load complete, rendering button");
    paypal.Buttons({
        createOrder: () => {
            let token = localStorage.getItem("token");
            if (token == null || token == "") {
                app.modalmsg = "login or create a new profile first!";
                app.tipsModal.show();
                setTimeout(()=>{app.tipsModal.hide();}, 1500)
                return Promise.reject();
            }
            console.log("now is in create order");
            return fetch(backendBaseUrl + '/api/registrations/createorder', {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': localStorage.getItem("token")
                },
                body: JSON.stringify(app.reg_info)
            }).then(function (res) {
                return res.json();
            }).then(function (data) {
                if (data.message == "user already paid and registered!") {
                    app.modalmsg = data.message;
                    app.tipsModal.show();
                    setTimeout(()=>{app.tipsModal.hide();}, 2000)

                    return Promise.reject();
                }
                console.log("data is", data);
                return data.orderID; // Use the key sent by your server's response, ex. 'id' or 'token'
            }).catch(err => {
                console.log('err', err)
            });
        },
        onError: function (err) {
            // For example, redirect to a specific error page
            let message = "Unknow server error";
            if (!app.reg_info.registration && !app.reg_info.publication) {
                message = "you have not selected any sessions!";
            }
            console.log("now in error");
            app.modalmsg = message;
            app.tipsModal.show();
            setTimeout(()=>{app.tipsModal.hide()}, 2000);
        },
        onApprove: (data) => {
            console.log("now is in onApprove");
            app.reg_info.orderID = data.orderID;
            return fetch(backendBaseUrl + '/api/registrations/captureorder', {
                    method: 'post',
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': localStorage.getItem("token")
                    },
                    body: JSON.stringify(app.reg_info)
                }).then(function (res) {
                    return res.json();
                })
                .then(function (details) {
                    console.log('Transaction approved by ' + details.payer.name.given_name);
                    app.modalmsg = 'payment Successful!'
                    app.tipsModal.show();
                    setTimeout(window.location.href = './index.html', 5000)
                    return Promise.resolve();
                })

        }
    }).render('#paypal-button-container');
})
// var s = document.createElement('script');
// s.src=paypal_url;
// document.head.appendChild(s);
var app = new Vue({
    el: '#app',
    data: {
        token: "",
        message: "Hello ",
        first_name: "",
        last_name: "",
        user_info: {},
        user: {},
        reg_info: {
            publication: false,
            is_student: false,
            papers: [],
        },
        reg_fee: {
            student: 20,
            publication: 150,
            non_student: 50
        },
        modalmsg: '',
        isErrorPaper: false,
        check_form:false,
        collapse: [],
        emailErrorMsg: '',
        errorPaperMessage: '',
        isErrorCode: false,
        country: country,
        codeModal: {},
        errorModal: {},
        publicationModal: {},
        subSuccessfulModal: {},
        paySuccessfulModal: {},
        checkPaperModal: {},
        tipsModal: {},
        eduMail: eduMail,
        flag:false,
        uploadFile: {
            cvFile: {},
            success: false,
            fail: false,
            share_inform: false,
            add_mail_list: false,
            errmsg:'',
        }

    },
    methods: {
        Create() {
            axios.post(backendBaseUrl + '/api/users/createprofile', this.user_info, {
                headers: {
                    "access-control-allow-headers": "Content-Type"
                }
            }).then(res => {
                this.codeModal.hide();
                localStorage.setItem("token", res.data.token);
                axios.post(backendBaseUrl + '/api/users/login', this.user_info).then(res => {
                    window.location.href = './index.html'
                }).catch(err => {

                })
            }).catch(err => {
                this.isErrorCode = true
            })
        },
        checkEmail() {
            this.check_form = true;
            if(!this.checkflag) return;
            axios.post(backendBaseUrl + '/api/users/emailverify', {
                email: this.user_info.email
            }).then(res => {
                this.codeModal.show();
            }).catch(err => {
                console.dir(err)
                this.emailErrorMsg = err.response.data.message;
                this.errorModal.show();
            })
        },
        getfile(e) {
            if (e.target.files[0].size < 1024 * 1024 * 20) {
                this.uploadFile.cvFile = e.target.files[0];
                console.dir(e.target.files)
            } else {
                
                this.modalmsg = 'File limit 20M';
                this.tipsModal.show();
                setTimeout(() => {
                    this.tipsModal.hide()
                }, 1500);
                document.getElementById('formFile').value = "";
                return;
            }

        },
        submit() {
            var formData = new window.FormData();
            formData.append('personal_cv', this.uploadFile.cvFile);
            formData.append('share_inform', this.uploadFile.share_inform ? "true" : "false");
            formData.append('add_mail_list', this.uploadFile.add_mail_list ? "true" : "false");
            var options = {
                url: backendBaseUrl + '/api/registrations/uploadcv',
                data: formData,
                method: 'post',
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            }
            axios(options).then(res => {
                this.modalmsg = 'Submission Successful!';
                this.tipsModal.show();
                setTimeout(() => {
                    window.location.href = "../userInfo"
                }, 1500);
            }).catch(err => {
                this.uploadFile.fail = true;
                this.uploadFile.errmsg = err.response.data.message;
            })
        },
        updateProfile: function () {
            this.Edit = !this.Edit;
            var url = backendBaseUrl + '/api/users/profile';
            var options = {
                body: JSON.stringify(app.user_info),
                method: 'PATCH',
                headers: {
                    "Authorization": localStorage.getItem('token'),
                    "Content-Type": "application/json;charset=utf-8"
                }
            }
            fetch(url, options).then(res => {
                return res.json()
            }).then(res => {
                console.log(res)
                this.collapse[1].hide();
                this.collapse[2].show();
                this.modalmsg = 'Update Successful!'
                this.tipsModal.show();
                setTimeout(() => {
                    this.tipsModal.hide();
                }, 1500);
            }).catch(err => {
                console.log(err)
            })
        },
        addPaper() {
            this.publicationModal.show()
        },
        removePaper(index) {
            this.reg_info.papers.splice(index, 1);
        },
        checkPaper() {
            var url = backendBaseUrl + '/api/test/checkpaper';
            for (var i = 0; i < this.reg_info.papers.length; i++) {
                if (this.reg_info.papers.length > 0 && this.reg_info.id == this.reg_info.papers[i].id) {
                   this.modalmsg = 'Duplicate ID';
                   this.tipsModal.show();
                    this.publicationModal.hide();
                    setTimeout(() => {
                        this.tipsModal.hide();
                    }, 1000);
                    return;
                }
            }
            if (this.reg_info.id && this.reg_info.title) {
                axios.post(url, this.reg_info).then(res => {
                    this.reg_info.papers.push({
                        id: this.reg_info.id,
                        title: this.reg_info.title
                    })
                    this.publicationModal.hide()
                }).catch(err => {
                    this.isErrorPaper = true;
                    this.errorPaperMessage = err.response.data.message;
                    console.log(err.response.data.message);
                })
            }
        },
        nextWindow() {
            this.collapse[3].hide();
            this.collapse[4].show();
        }
    },
    mounted: function () {
        this.codeModal = new bootstrap.Modal(document.getElementById('verifyCode'));
        this.errorModal = new bootstrap.Modal(document.getElementById('Registered'));
        this.publicationModal = new bootstrap.Modal(document.getElementById('publication'));
        this.tipsModal = new bootstrap.Modal(document.getElementById('tips'));
        

        var myModalEl = document.getElementById('publication')
        myModalEl.addEventListener('hidden.bs.modal', function (event) {
            if (app.reg_info.papers.length == 0) {
                app.reg_info.publication = false;
            }
        });


        var collapse_doc = [];
        for(var i=1;i < 5;i++){
            let name=["","One","Two","Three","Four"];
            collapse_doc[i]=document.getElementById('collapse'+name[i]);
            this.collapse[i] = new bootstrap.Collapse(collapse_doc[i],{
                toggle: false
            })
        }
        let that = this;
        for(var i = 1; i < 5; i++){
            collapse_doc[i].addEventListener('show.bs.collapse',function(){
                for(var j=1;j < 5;j++){
                    if(i != j){
                        that.collapse[j].hide()
                    }
                }
            })
        }


        if (localStorage.getItem('token')) {
            axios.get(backendBaseUrl + '/api/users/profile', {
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            }).then(res => {
                if (this.isRegistration) {
                    this.collapse[3].show();
                } else {
                    this.collapse[2].show();
                }
                this.user = res.data;
                this.user_info = this.user.profile;
                this.user_info.email = this.user.email;
                if (this.isRegistration) {
                    this.reg_info.registration = false;
                }
                if (this.user.cv_info) {
                    this.uploadFile.share_inform = Boolean(this.user.cv_info.share_inform)
                    this.uploadFile.add_mail_list = Boolean(this.user.cv_info.add_mail_list)
                } else {
                    this.reg_info.registration = true;
                }
            }).catch(err => {
                this.collapse[1].show()
            });
        } else {
            this.collapse[1].show()
        }
    },
    watch: {
        token: async function () {
            console.log(`token now is ${this.token}`);
            if (this.token == "") {
                return Promise.resolve();
            } else {
                axios.get(backendBaseUrl + '/api/users/profile', {
                    headers: {
                        "Authorization": this.token
                    }
                }).then(res => {
                    this.isLogin = true;
                    this.user = res.data;
                }).catch(err => {
                    this.token = "";
                    this.user = {};
                    this.isLogin = false;
                });
            }
        },
        'reg_info.publication': {
            handler: function () {
                if (this.reg_info.publication)
                    this.publicationModal.show()
            }
        },
        
    },
    computed: {
        isEmail:function(){
            const regEmail = /^([a-zA-Z]|[0-9])(\w|\.|\-)+@[a-zA-Z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
            return !regEmail.test(this.user_info.email) && this.check_form;
        },
        isFirst_name:function(){
            return !this.user_info.first_name && this.check_form;
        },
        isLast_name:function(){
            return !this.user_info.last_name && this.check_form;
        },
        isPassword:function(){
            return !this.user_info.password && this.check_form;
        },
        isLessSix:function(){
            return (this.user_info.password && this.user_info.password.length < 6) && this.check_form;
        },
        isPassword2:function(){
            return !this.user_info.password2 && this.check_form;
        },
        passwdMisMatch:function(){
            return (this.user_info.password != this.user_info.password2) && this.check_form;
        },
        isPronoun:function(){
            return !this.user_info.pronoun && this.check_form;
        },

        isInstitution:function(){
            return !this.user_info.institution && this.check_form;
        },
        isCountry:function(){
            return !this.user_info.country && this.check_form;
        },
        checkflag:function(){
            return !(this.isEmail || this.isFirst_name || this.isLast_name || this.isPronoun || this.isLessSix || this.isPassword || this.isPassword2 || this.isCountry || this.passwdMisMatch) && this.check_form
        },
        isLogin:function(){
            return header.$refs.header.status.isLogin
        },
        isRegistration:function(){
            return header.$refs.header.status.isRegistration
        }
    }
});
