import {Vue, store, header} from '/assets/component/myheader.js';
let paper = await fetch('/assets/data/paper.json').then(res => res.json());
let pdf = await fetch('/assets/data/pdf.json').then(res => res.json());
import {paperData} from '../Schedule/paperData.js';
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
var app = new Vue({
    el: '#app3',
    store: store,
    data: {
        sessionNum: '',
        paper: paperData,
        date2: '',
        time: '',
        end: '',
        channel: '',
        session: [
            "",
            "Search",
            "Scheduling",
            "Hierarchical Task Networks",
            "Classical Planning | Path Planning | Search",
            "Probabilistic Planning",
            "Search",
            "Non-Deterministic Planning | Oversubscription Planning",
            "Explainability | Richer Formalisms",
            "Classical Planning | Search",
            "Probabilistic Planning | Scheduling | Robotics",
            "Hybrid Planning| Conformant Planning",
            "Path Planning | Search",
            "Temporal Planning | Numeric Planning | Reinforcement Learning",
            "Reinforcement Learning",
            "Classical Planning",
            "Classical Planning | Search",
            "Classical Planning",
            "Scheduling",
            "Execution | Control",
            "Temporal Planning | Numeric Planning | Reinforcement Learning",
            "Representation | Generalized Planning",
            "Representation | Partial Order Planning | Multi-Agent Planning",
            "Reinforcement Learning",
        ],
        zone: new Date().getTimezoneOffset() / -60,
        date: [' ', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th'],
    },
    methods: {
        showModalDay: function () {
            if (this.timeMin == 0) this.timeMin = '00';
            if (this.endMin == 0) this.endMin = '00';
            if (this.zone + this.time + 4 < 0)
              return (
                "Aug " +
                this.date[this.date2 - 1] +
                " " +
                (this.zone + this.time + 28) +
                ":" + 
                this.timeMin +
                " - " +
                (this.zone + this.modal_end + 28) +
                ":" +
                this.endMin
              );
            else if (this.zone + this.time + 4 > 23)
              return (
                "Aug " +
                this.date[this.date2 + 1] +
                " " +
                (this.zone + this.time - 20) +
                ":" + 
                this.timeMin +
                " - " +
                (this.zone + this.modal_end - 20) +
                ":" +
                this.endMin
              );
            else
              return (
                "Aug " +
                this.date[this.date2] +
                " " +
                (this.zone + this.time + 4) +
                ":" + 
                this.timeMin +
                " - " +
                (this.zone + this.modal_end + 4) +
                ":" +
                this.endMin
              );
        },
        sessionSelect: function (id) {
            if (id == this.channel) {
                return "font-weight: 700;"
            }
        }
    },
    mounted() {
        let url = window.location.href;
        this.channel = parseInt(url.split('?channel=')[1]);
        for (let itemi in this.paper){
            for (let itemj in this.paper[itemi]){
                if (this.paper[itemi][itemj].id == this.channel){
                    this.sessionNum = itemi;
                }
            }
        }
    }
})