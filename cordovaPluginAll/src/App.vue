<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="再按一次退出" position="middle"></toast> -->
    <router-view/>
  </div>
</template>

<script>
var backClick=0;// 退出点击次数，默认为0
export default {
  name: 'App',
  data(){
    return{
      showPositionValue: false,
    }
  },
  methods:{
    backbutton () {
      var time=new Date(); // 2s内再次点击就退出
      let _this = this;
      // 监听返回按钮
      document.addEventListener('backbutton', function(evt) {
        if(_this.$route.fullPath === '/'){  // 处于app首页,满足退出app操作
          if(backClick){  // 不为0时
              navigator.app.exitApp();  // app退出
          }else{
            // alert('再按一次退出');  // 提示信息
            _this.$vux.toast.text('再按一次退出','middle');
            setTimeout(function(){
              _this.$vux.toast.hide();
            },500)
            if(new Date()-time<2000){// 小于2s,退出程序
              backClick++;
            }else{   // 大于2s，重置时间戳
              time = new Date();
            }
          }
          return;
        }
        history.back();  // 不满足退出操作，返回上一页
        return;
      }, false);
    },        
  },
  mounted(){
    this.backbutton();
  }
}
</script>

<style>
@import './assets/style/reset.css';
.clickButton{
  margin: 8px auto;
  border: 1px solid rgb(219, 223, 15);
  width: 80vw;
  height: 25px;
  text-align: center;
  line-height: 25px;
  border-radius: 8px;
}
</style>
