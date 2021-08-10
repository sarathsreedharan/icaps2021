import { Vue, store, header } from '/assets/component/myheader.js';
import { rocketchatUrl } from '/assets/js/backendBaseUrl.js';
import { backendBaseUrl } from '/assets/js/backendBaseUrl.js';
import axios from '/assets/js/axios.js';
var app = new Vue({
    el: '#app2',
    store: store,
    data: {
        channel: "",
        timer: "",
        slideId: "",
        tipsModal: {},
        modalmsg: '',
        rocketchatUrl: rocketchatUrl
    },
    methods: {
        forceQuit: function (msg) {
            this.modalmsg = msg;
            this.tipsModal.show();
            setTimeout(() => {
                window.location.href = "/login"
            }, 1500);
        }
    },
    async mounted() {
        axios.defaults.withCredentials = true;
        this.tipsModal = new bootstrap.Modal(document.getElementById('tips'));
        let token = window.localStorage.getItem("token");
        if (token == null || token == "") {
            console.log("No token detected");
            return this.forceQuit("Please login to visit this page!");
        } else {
            axios.get(backendBaseUrl + '/api/users/profile', {
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            }).then(res => {
                if (!res.data.reg || !res.data.reg.registration) {
                    console.log("have not registration");
                    return this.forceQuit("Please visit this page after payment of registration!");
                }
            }).catch(err => {
                console.log(err);
                return this.forceQuit("Please login to visit this page!");
            })
        }
        let url = window.location.href;
        let date = url.split('?date=')[1]
        this.channel = "live" + date;
        this.slideId = 38965451 + Number(date);
        let embed = new SlidesLiveEmbed('presentation-embed', {
            presentationId: this.slideId,
            autoPlay: false, // change to true to autoplay the embedded presentation
            verticalEnabled: true
        });
    },
    beforeDestroy() {
        clearInterval(this.timer);
    }
})