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
        //this.curPaper = this.paperData.find(Element => Element.id == localStorage.getItem('channel'))
        let url = window.location.href;
        this.curPaper = this.paperData.find(Element => Element.id == url.split('?channel=')[1])
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
    mounted() {
        //this.channel=localStorage.getItem("channel");
        let url = window.location.href;
        this.channel = url.split('?channel=')[1];
    },
    beforeDestroy() {
        clearInterval(this.timer);
    }
})