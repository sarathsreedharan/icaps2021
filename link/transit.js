var url=window.location.host
var app = new Vue({
  el:'#app',
  data:{
      goal_url:'',
      select:{
        sponsor:['http://'+url+'/link/sponsors/','.html'],
        posters:['http://'+url+'/link/posters/index.html?id=',''],
        // workshops:['http://'+url+'/link/workshops/',''],
        slideslive:['http://'+url+'/exhibition?channel=','']
    },
      sponsor:{
        ibm:'https://www.ibm.com',
        artificial_intelligence:'https://www.journals.elsevier.com/artificial-intelligence',
        huawei:'https://www.noahlab.com.hk/#/about',
      },
      workshops:{
        tutroial_d:'https://us02web.zoom.us/j/89922262543?pwd=N20wVDI2aWd2TllIVUF6dlljVWJXZz09',
        tutroial_t:'https://us02web.zoom.us/j/86228072958?pwd=dXZyVWNLdG12bTVLWUFvZWk4UmxjQT09',
        HSDIP:'https://us02web.zoom.us/j/83730978067?pwd=blcwUEJDRXJpRWxjaXg4YVlmN3RyUT09',
        HPlan:'',
        WIPC:'https://us02web.zoom.us/j/86477847323?pwd=enhEUVBDVXcwcXF4ZGVPZzFuQjBSUT09',
        SPARK:'https://us02web.zoom.us/j/88170357015?pwd=dk9xNWtidFY5cTdoRTBYT0JzQjFpQT09',
        PlanRob_1:'https://us02web.zoom.us/j/83539379071?pwd=UXE4UUtrdmUrWVRobVp1MFREa0FDQT09',
        DC:'https://us02web.zoom.us/j/85897877064?pwd=ckFYY1pKVW8xV1F6L3dvQVRVVUhlQT09'
      }
  },
  mounted(){
      let query = location.search;
      let searchParams = new URLSearchParams(query);
      var type = searchParams.get('type');
      var id = searchParams.get('id');
      if(type=='workshops'){
        if(id=='tutroial-dcss-AI-wrapper'){
          id = 'tutroial_d'
        }
        if(id=='tutroial-Trustworthy-AI'){
          id = 'tutroial_t'
        }
        if(id=='PlanRob-1'){
          id = 'PlanRob_1'
          console.log(id)
        }
        if(id=='PlanRob-2'){
          id = 'PlanRob_2'
        }
        this.goal_url = this.workshops[id]
        console.log(this.goal_url)
      }else if(id == 'huawei' || id == 'ibm' || id=='artificial_intelligence'){
        this.goal_url = this.sponsor[id]
      }else{
        this.goal_url =  this.select[type][0]+id+this.select[type][1]
      }
      
      // console.log(this.goal_url)
      // var open = window.open();
      // open.location.href = this.goal_url
      // window.history.go(-1);
  }
})

