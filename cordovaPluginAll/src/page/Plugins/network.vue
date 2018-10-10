<template>
    <div class="network">
        <div @click="getNetwork" class="clickButton" >获取网络信息</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           
        }
    },
    methods:{
        getNetwork(){
            var networkState = navigator.connection.type;

            var states = {};
            states[Connection.UNKNOWN]  = '未知网络';
            states[Connection.ETHERNET] = '以太网';
            states[Connection.WIFI]     = 'WiFi 网络';
            states[Connection.CELL_2G]  = ' 2G 网络';
            states[Connection.CELL_3G]  = ' 3G 网络';
            states[Connection.CELL_4G]  = ' 4G 网络';
            states[Connection.CELL]     = ' generic connection';
            states[Connection.NONE]     = '未连接网络';

            alert('您目前连接的是: ' + states[networkState]);
        },
        onOffline(){
            alert('您的网络已经断开，请检测网络');
        },
        // onOnline(){
        //     this.getNetwork();
        // }
    },
    mounted(){
        document.addEventListener("offline", this.onOffline, false);//监听网络断开，并执行提示
        // document.addEventListener("online", this.onOnline, false);//监听网络连接的方式
    }
}
</script>
<style lang="less">
</style>
