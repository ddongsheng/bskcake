<template>
  <div class="hello">
      <h1>我是信息页</h1>
      <button @click="login">login</button>
      <!-- <span ></span> -->
      <i class="fa fa-share-alt fa-5x"></i> fa-lg
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:""
    }
  },
  mounted(){
    // Indicator.open();
    // Indicator.close();
    // console.log(this.$store.state.name)
  },
  methods:{

    login(){
            var data={
              uname:"Msea",
              upwd:"1223456"
            }
      this.$apis.mokeLogin(data).then((res)=>{
          console.log(res);
      })
    }
  },
  components:{
    "lay_test":{
      template:"<div>我是测试组件<slot></slot></div>"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.box{
  width:100%;
  height:r(48*2);
  background:red;
}

</style>


