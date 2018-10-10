<template>
    <div class="device">
        <div @click="getAcceleration" class="clickButton" >获取当前加速度</div>
        <div @click="watchAcceleration" class="clickButton" >监听加速度的变化</div>
        <div @click="stopWatchAcceleration" class="clickButton" >停止监听</div>
        <div>
            <P>X轴:{{x}}</P>
            <P>Y轴:{{y}}</P>
            <P>Z轴:{{z}}</P>
            <P>时间戳:{{timestamp}}</P>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            x:'',
            y:'',
            z:'',
            timestamp:'',
            closeWatchAcceleration: false
        }
    },
    methods:{
        getAcceleration(){
            let _this=this;
            navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);

            function accelerometerSuccess(acceleration) {
                // alert('Acceleration X: ' + acceleration.x + '\n' +
                //     'Acceleration Y: ' + acceleration.y + '\n' +
                //     'Acceleration Z: ' + acceleration.z + '\n' +
                //     'Timestamp: '      + acceleration.timestamp + '\n');
                    _this.x = acceleration.x;
                    _this.y = acceleration.y;
                    _this.z = acceleration.z;
                    _this.timestamp = acceleration.timestamp;
            };

            function accelerometerError() {
                alert('onError!');
            };
                
        },
        stopWatchAcceleration(){
            this.stopWatchAcceleration = true;
        },
        watchAcceleration(){
            // accelerometerOptions：设置监听数据每个几秒反馈一次
            var accelerometerOptions = {
                frequency: 800
            }
            let _this = this;
            var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess, accelerometerError, accelerometerOptions);
            function accelerometerSuccess(acceleration) {
                _this.x = acceleration.x;
                _this.y = acceleration.y;
                _this.z = acceleration.z;
                _this.timestamp = acceleration.timestamp;
                if(_this.stopWatchAcceleration === true){
                    navigator.accelerometer.clearWatch(watchID);
                    _this.stopWatchAcceleration = false;
                }
                // setTimeout(function() {
                //     navigator.accelerometer.clearWatch(watchID);
                // }, 5000);//5秒后去除监听
            };
            function accelerometerError() {
                alert('onError!');
            };
        }
      
    },
    mounted(){
        // this.getDevice();
    }
}
</script>
<style lang="less">
</style>
