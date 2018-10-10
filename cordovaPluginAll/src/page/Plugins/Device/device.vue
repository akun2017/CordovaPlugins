<template>
    <div class="device">
        <div @click="getDevice" class="clickButton" >获取设备信息</div>
        <!-- <div class="openCarmen" >获取系统信息</div> -->
        <div class="clickButton" >蜂鸣</div>
        <div @click="vibrate" class="clickButton" >保持震动</div>
        <div @click="vibrationPattern" class="clickButton" >间断震动</div>
        <div v-if="deviceMsg">
            <p>cordova的版本号：{{cordova}}</p>
            <p>设备的模型或产品的名称：{{model}}</p>
            <p>设备的操作系统名称：{{platform}}</p>
            <p>设备的全局惟一标识符：{{uuid}}</p>
            <p>操作系统版本号：{{version}}</p>
            <p>设备的制造商：{{manufacturer}}</p>
            <p>是否运行在模拟器：{{isVirtual}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            deviceMsg: false,
            cordova:'',
            model: '',
            platform: '',
            uuid: '',
            version: '',
            manufacturer: '',
            isVirtual: ''
        }
    },
    methods:{
        getDevice(){
            this.deviceMsg = true;
            alert(JSON.stringify(device));
            this.cordova = device.cordova;
            this.model = device.model;
            this.platform = device.platform;
            this.uuid = device.uuid;
            this.version = device.version;
            this.manufacturer = device.manufacturer;
            this.isVirtual = device.isVirtual;
        },
        vibrate(){
            this.deviceMsg = false;
            var time = 3000;
            navigator.vibrate(time);
        },
        vibrationPattern(){
            this.deviceMsg = false;
            var pattern = [1000, 1000, 1000, 1000];
            navigator.vibrate(pattern);
        }
    },
    mounted(){
        // this.getDevice();
    }
}
</script>
<style lang="less">
</style>
