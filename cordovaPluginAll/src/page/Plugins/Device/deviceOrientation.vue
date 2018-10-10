<template>
    <div class="device">
        <div @click="getOrientation" class="clickButton" >获取设备方向</div>
        <div @click="watchOrientation" class="clickButton" >监听设备方向的变化</div>
        <div @click="stopWatch" class="clickButton" >停止监听</div>
        <div>
            <P>朝向值:{{magneticHeading}}</P>
            <P>相对北极的朝向值:{{trueHeading}}</P>
            <P>误差值:{{headingAccuracy}}</P>
            <P>时间戳:{{timestamp}}</P>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            magneticHeading:'',
            trueHeading:'',
            headingAccuracy:'',
            timestamp:'',
            closeWatch: false
        }
    },
    methods:{
        getOrientation(){
            let _this = this;
            navigator.compass.getCurrentHeading(compassSuccess, compassError);
            function compassSuccess(heading) {
                _this.magneticHeading = heading.magneticHeading;//以从0到359的度数表示heading的朝向值
                _this.trueHeading = heading.trueHeading;//相对于北极的朝向值，范围从0到259度。负值表示真实的朝向值不能确定
                _this.headingAccuracy = heading.headingAccuracy;//用度数表示磁极朝向和真实朝向值的不同
                _this.timestamp = heading.timestamp;//朝向值测量的日期和时间(从1970年1月1日午夜开始的毫秒数)
                // alert('Heading: ' + heading.magneticHeading);
            };
            function compassError(error) {
                alert('CompassError: ' + error.code);
            };
        },

        watchOrientation(){
            var compassOptions = {
                frequency: 800
            }
            let _this = this;
            var watchID = navigator.compass.watchHeading(compassSuccess, compassError, compassOptions);
            function compassSuccess(heading) {
                _this.magneticHeading = heading.magneticHeading;//以从0到359的度数表示heading的朝向值
                _this.trueHeading = heading.trueHeading;//相对于北极的朝向值，范围从0到259度。负值表示真实的朝向值不能确定
                _this.headingAccuracy = heading.headingAccuracy;//用度数表示磁极朝向和真实朝向值的不同
                _this.timestamp = heading.timestamp;//朝向值测量的日期和时间(从1970年1月1日午夜开始的毫秒数)
                if(_this.closeWatch === true){
                    navigator.compass.clearWatch(watchID);
                    _this.closeWatch = false;
                }
            };
            function compassError(error) {
                alert('CompassError: ' + error.code);
            };
        },
        stopWatch(){
            this.closeWatch = true;
        }
        
    }
}
</script>
<style lang="less">

</style>
