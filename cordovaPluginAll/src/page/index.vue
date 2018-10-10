<template>
    <div class="index">
        <router-view></router-view>
        <tabbar>
            <tabbar-item :selected="$route.path === '/'" link='/'>
                <i slot="icon" class="iconfont icon-home"></i>
                <p slot="label">插件</p>
            </tabbar-item>
            <tabbar-item :selected="$route.path === '/GetP5OEE'" link='/GetP5OEE'>
                <i slot="icon" class="iconfont icon-leidatu"></i>
                <p slot="label">图像</p>
            </tabbar-item>
        </tabbar>
    </div>
</template>
<script>
var fle = 0;
export default {
    methods:{
        login(){
            let reqdata = {
                "ApiType": "AuthenticationController",
                "Parameters": [
                    {
                    "Value": "admin"
                    },
                    {
                    "Value": ""
                    }
                ],
                "Method": "Login",
                "Context": {}
            };
            this.axios.post('/api/invoke',reqdata).then(res=>{
                // console.log(res.data);
                localStorage.setItem('ticket',res.data.Context.Ticket)
                // console.log('登录成功了');

            }).catch(err=>{
                consolog(err);
            })
        },
    },
    mounted(){
        // this.login();
        // document.addEventListener("backbutton", this.exitApp, false);
    },
    // watch: {
    //     '$route'(to, from){
    //         let routersArr=sessionStorage.getItem('routers')&&sessionStorage.getItem('routers').split(',')||[];
    //         //如果routersArr为空，向里面推送数据
    //         if(routersArr.length==0){
    //             routersArr.push(from.path);
    //             routersArr.push(to.path);
    //         }else{
    //             //如果routersArr不为空，则执行下面方法
    //             // console.log(to.path)
    //             //如果路由发生变化，to.path在sessionStorage中存在过的话，那么就是返回事件
    //             if(routersArr.indexOf(to.path)!=-1){
    //                 this.transitionName='back';
    //                 routersArr.splice(routersArr.indexOf(to.path)+1,100);
    //                 fle = 0;
    //                 //移除sessionStorage中routersArr的第一个对象开始，删除的个数为100
    //             }else{
    //                 //如果to.path在sessionStorage中不存在的话，那就是前进事件
    //                 this.transitionName='go';
    //                 if(this.transitionName==='go'){
    //                     document.addEventListener("backbutton", this.exitApp, false);
    //                     history.go(1);
    //                     // setInterval(function(){fle = 0;},2000);
    //                     // navigator.app.exitApp();
    //                 }
    //                 routersArr.push(to.path)
    //             }
    //             console.log(this.transitionName);
    //         }
    //         sessionStorage.setItem('routers',routersArr.join(','))
    //     }
    // }
}
</script>
<style lang="less">
.index{
    margin: 0px;
}
p{
    margin: 0px;
}
label{
    color: black;
    font-size: 20px;
    font-family: "微软雅黑";
    span{
        color: rgb(181, 184, 183);
    }
}
.weui-tabbar__item{
    .weui-tabbar__label{
        p{
            font-size: 14px;
        }
    }
}
.weui-tabbar{
    position: fixed !important;
    bottom: 0px;
}
</style>
