var url=window.location.host
var app = new Vue({
  el:'#app',
  data:{
      goal_url:'',
      type:'',
      id:'',
      isMain:false,
      select:{
        sponsor:['http://'+url+'/link/sponsors/','.html'],
        posters:['http://'+url+'/link/posters/index.html?id=',''],
        slideslive:['http://'+url+'/exhibition?channel=',''],
        'PRL-posters':['http://'+url+'/link/posters/prl-posters.html?id=',''],
        'PlanRob-posters':['http://'+url+'/link/posters/planRob-posters.html?id=',''],
        'IntEx-posters':['http://'+url+'/link/posters/intex-posters.html?id=',''],
        'HPlan-posters': ['http://' + url + '/link/posters/hplan-posters.html?id=', ''],
        'Demo-posters':['http://' + url + '/link/posters/demo-posters.html?id=', ''],
        Demo:['http://'+url+'/link/demo/index.html?id=','']
    },
      sponsor:{
        ibm:'https://ibm.biz/icaps2021',
        artificial_intelligence:'https://www.journals.elsevier.com/artificial-intelligence',
        huawei:'https://www.noahlab.com.hk/#/about',
        portrait:'http://psresearch.xyz/',
      },
      workshops:{
        'tutroial-dcss-AI-wrapper':'https://us02web.zoom.us/j/89922262543?pwd=N20wVDI2aWd2TllIVUF6dlljVWJXZz09',
        'tutroial-Trustworthy-AI':'https://us02web.zoom.us/j/86228072958?pwd=dXZyVWNLdG12bTVLWUFvZWk4UmxjQT09',
        'HSDIP':'https://us02web.zoom.us/j/83401704292',
        'HPlan':'https://anu.zoom.us/j/88399882726?pwd=WFFxeVNSUEtWTSttS3dQS1N6bm9IZz09',
        'WIPC':'https://us02web.zoom.us/j/86477847323?pwd=enhEUVBDVXcwcXF4ZGVPZzFuQjBSUT09',
        'SPARK':'https://us02web.zoom.us/j/88170357015?pwd=dk9xNWtidFY5cTdoRTBYT0JzQjFpQT09',
        'PlanRob-1':'https://us02web.zoom.us/j/83539379071?pwd=UXE4UUtrdmUrWVRobVp1MFREa0FDQT09',
        'PlanRob-2':'https://us02web.zoom.us/j/83539379071?pwd=UXE4UUtrdmUrWVRobVp1MFREa0FDQT09',
        'DC':'https://us02web.zoom.us/j/85897877064?pwd=ckFYY1pKVW8xV1F6L3dvQVRVVUhlQT09',
        'IntEx':'https://us02web.zoom.us/j/84563671218?pwd=NktlOGhud1c3U1ZidXlRaG40RTNFdz09',
        'KEPS-1':'https://us02web.zoom.us/j/89848442521?pwd=K3ZpRE5zUjg3WUVwZ1dDOUZUeXpIUT09',
        'KEPS-2':'https://us02web.zoom.us/j/89848442521?pwd=K3ZpRE5zUjg3WUVwZ1dDOUZUeXpIUT09',
        'PRL-1':'https://us02web.zoom.us/j/83805632807?pwd=Y0VXN1dGZWVZeGpETVBTc2ZBN0pMUT09',
        'PRL-2':'https://us02web.zoom.us/j/83805632807?pwd=Y0VXN1dGZWVZeGpETVBTc2ZBN0pMUT09',
        'FinPlan':'https://us02web.zoom.us/j/89832598315',
        'XAIP':'https://us02web.zoom.us/j/88519098495?pwd=Wnd0TXlGQTNZd1g5RmtmQTJ5aThiZz09',
      },
      Diversity_Event:{
          '01':'https://us02web.zoom.us/j/81744386811?pwd=eGZqMGdIRjJiS1ozMmhuUzNlMG1yZz09#success'
      },
      Main:{
        Live:'https://icaps21.icaps-conference.org/live/',
        Zoom:'https://us02web.zoom.us/j/86198823618?pwd=ZHNFSi9ERGY5UGtOOE1xbnhwVzYrUT09'
      },
      Demo_Website:{
        '378':'https://bab.bournemouth.ac.uk/icapswebgl/'
      }
  },
  mounted(){
      let query = location.search;
      let searchParams = new URLSearchParams(query);
      var type = searchParams.get('type');
      var id = searchParams.get('id');
      this.type = type;
      this.id = id;
      if(type=='workshops'){
        this.goal_url = this.workshops[id]
      }else if(id == 'huawei' || id == 'ibm' || id=='artificial_intelligence' || id=='portrait'){
        this.goal_url = this.sponsor[id]
      }else if(type=='Diversity_Event'){
        this.goal_url = this.Diversity_Event[id]
      }else if(type=='Main'){
        this.isMain=true;
        this.goal_url = this.Main.Zoom
      }else if(type=='Demo_Website'){
        this.goal_url = this.Demo_Website[id]
      }else if(type == 'Demo-posters' && id==375){
        this.goal_url = 'https://starling.utdallas.edu/papers/collaborative-ps/'
      }
      else{
        this.goal_url =  this.select[type][0]+id+this.select[type][1]
      }

      if(id == 'sysu') this.id='Sun Yat-Sen University'
      if(id == 'artificial_intelligence') this.id='artificial-intelligenc'
      if(id == 'huawei' || id=='huaweiVideo') this.id='Huawei'
      if(this.type=='Demo') this.id='CLICK HERE'
      if(this.type=='Demo-posters') this.id='CLICK HERE TO VIEW THE POSTER'
      document.getElementById('open_link').click()
      

  },
  methods:{
    open(){
      console.log(this.goal_url)
      window.open(this.goal_url)
    }
  }
})

