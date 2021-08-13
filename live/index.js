import { store, Vue } from '/assets/component/myheader.js';
import axios from '/assets/js/axios.js';
import { backendBaseUrl, rocketchatUrl } from '/assets/js/backendBaseUrl.js';
var app = new Vue({
    el: '#app2',
    store: store,
    data: {
        channel: "live5",
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

        this.slideId = 38965456;
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