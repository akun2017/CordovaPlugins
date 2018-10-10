<template>
    <div class="battery">
        <div @click="onBatteryStatus" class="clickButton">获取电池信息</div>
        <p>所剩电量：{{level}}</p>
        <p>是否正在充电：{{isPlugged}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            level:'',
            isPlugged:''
        }
    },
    methods:{
        onBatteryStatus(status) {
            // console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
            // window.addEventListener("batterystatus", function(){
                this.level = status.level;
                this.isPlugged = status.isPlugged;
            // }, false);
        },
        batterylow(low){
            alert(low);
        },
        batterycritical(critical){
            alert(critical);
        }
    },
    mounted(){
        window.addEventListener("batterystatus", this.onBatteryStatus, false);//电池的电量有变化，是否正在充电触发
        window.addEventListener("batterylow", this.batterylow, false);//当电池电量百分比达到了较低的值时，则触发此事件。此值在不同的设备可能有所不同。
        window.addEventListener("batterycritical", this.batterycritical, false);//当电池电量百分比达到临界值时，则触发此事件。此值在不同的设备可能有所不同。
    }
}
</script>
<style lang="less">
.battery{
    p{
        margin-left: 10vw;
    }
}
</style>