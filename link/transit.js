var url=window.location.host
var app = new Vue({
  el:'#app',
  data:{
      goal_url:'',
      type:'',
      id:'',
      select:{
        sponsor:['http://'+url+'/link/sponsors/','.html'],
        posters:['http://'+url+'/link/posters/index.html?id=',''],
        slideslive:['http://'+url+'/exhibition?channel=','']
    },
      sponsor:{
        ibm:'https://www.ibm.com',
        artificial_intelligence:'https://www.journals.elsevier.com/artificial-intelligence',
        huawei:'https://www.noahlab.com.hk/#/about',
      },
      workshops:{
        'tutroial-dcss-AI-wrapper':'https://us02web.zoom.us/j/89922262543?pwd=N20wVDI2aWd2TllIVUF6dlljVWJXZz09',
        'tutroial-Trustworthy-AI':'https://us02web.zoom.us/j/86228072958?pwd=dXZyVWNLdG12bTVLWUFvZWk4UmxjQT09',
        'HSDIP':'https://us02web.zoom.us/j/83730978067?pwd=blcwUEJDRXJpRWxjaXg4YVlmN3RyUT09',
        'HPlan':'https://us02web.zoom.us/j/89495082360?pwd=SXk2TlJvT0tNZFViUE5GWE5sRGZnZz09',
        'WIPC':'https://us02web.zoom.us/j/86477847323?pwd=enhEUVBDVXcwcXF4ZGVPZzFuQjBSUT09',
        'SPARK':'https://us02web.zoom.us/j/88170357015?pwd=dk9xNWtidFY5cTdoRTBYT0JzQjFpQT09',
        'PlanRob-1':'https://us02web.zoom.us/j/83539379071?pwd=UXE4UUtrdmUrWVRobVp1MFREa0FDQT09',
        'PlanRob-2':'https://us02web.zoom.us/j/88689666146?pwd=VW9jOWNYc3lGQ24zZ3RyU1dzWGpLZz09',
        'DC':'https://us02web.zoom.us/j/85897877064?pwd=ckFYY1pKVW8xV1F6L3dvQVRVVUhlQT09',
        'IntEx':'https://us02web.zoom.us/j/82007557737?pwd=SXhlcUxWeG9pNUtJT2liTjFLaktDZz09',
        'KEPS-1':'https://us02web.zoom.us/j/89848442521?pwd=K3ZpRE5zUjg3WUVwZ1dDOUZUeXpIUT09',
        'KEPS-2':'https://us02web.zoom.us/j/84656615869?pwd=TlR3emRpTEZxR2JVL2ZBbm9hanZoZz09',
        'PRL-1':'https://us02web.zoom.us/j/88072812056?pwd=V2JlNG5CMHQxckpjaWROdlFsZXJadz09',
        'PRL-2':'https://us02web.zoom.us/j/87289877571?pwd=VVZDNjBIYkNVVG5OcllKWU00MzVmdz09',
      },
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
        console.log(this.goal_url)
      }else if(id == 'huawei' || id == 'ibm' || id=='artificial_intelligence'){
        this.goal_url = this.sponsor[id]
        console.log(this.goal_url)
      }else{
        this.goal_url =  this.select[type][0]+id+this.select[type][1]
        console.log(this.goal_url)
      }

      if(id == 'sysu') this.id='Sun Yat-Sen University'
      if(id == 'artificial_intelligence') this.id='artificial-intelligenc'
      if(id == 'huawei' || id=='huaweiVideo') this.id='Huawei'
      
      document.getElementById('open_link').click()

  },
  methods:{
    open(){
      console.log(this.goal_url)
      window.open(this.goal_url)
    }
  }
})
