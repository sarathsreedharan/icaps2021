import {Vue, store, header} from '/assets/component/myheader.js';
let paper = await fetch('/assets/data/paper.json').then(res => res.json());
let pdf = await fetch('/assets/data/pdf.json').then(res => res.json());
var app = new Vue({
    el: '#app',
    store: store,
    data: {
        curPaper: {},
        paperData: paper,
        curPdf:'',
        pdfLink:pdf,
    },
    mounted() {
        this.curPaper = this.paperData.find(Element => Element.id == localStorage.getItem('channel'))
        this.curPdf = this.pdfLink.find(Element => Element.title.toLowerCase() == this.curPaper.title.toLowerCase()) 
        window.a = this
        console.log(this.curPdf)
    },
    computed:{
        isPdf:function(){
            return this.curPdf?true:false;
        }
    }
})
var app = new Vue({
    el: '#app2',
    store: store,
    data: {
        channel:"",
        timer:""
    },
    methods:{
        logout:function(){
            console.log("logout",document.getElementById('iframe').title);
            document.getElementById('iframe').contentWindow.postMessage({
                externalCommand: 'logout'
              }, '*')
        }
    },
    mounted() {
        if(localStorage.getItem("channel")){
            this.channel=localStorage.getItem("channel");
        }
        //this.logout();
    },
    beforeDestroy() {
        clearInterval(this.timer);
    }
})