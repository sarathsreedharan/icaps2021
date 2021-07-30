
var app = new Vue({
  el:'#app',
  data:{
      goal_url:'',
      select:{
        sponsor:['http://0.0.0.0/link/sponsors/','.html'],
        posters:['http://0.0.0.0/link/posters/index.html?id=','']
    }
  },
  mounted(){
      let query = location.search;
      let searchParams = new URLSearchParams(query);
      var type = searchParams.get('type');
      var id = searchParams.get('id');
      if(id == 'huawei'){
        this.goal_url = 'https://www.noahlab.com.hk/#/about'
      }else{
        console.log(this.select[type])
        this.goal_url =  this.select[type][0]+id+this.select[type][1]
      }
      
      // console.log(this.goal_url)
      // var open = window.open();
      // open.location.href = this.goal_url
      // window.history.go(-1);
  }
})

