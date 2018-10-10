<template>
    <div>
        <div class="YOUposition">
            <div @click="getPositionBybaidu" class="clickButton" >百度地图定位方案</div>
            <div @click="getPositionBygaode" class="clickButton" >高德地图定位方案</div>
            <!-- <button class="getGPSData" @click="baiduPC">百度PC端定位方案</button> -->
        </div>
        <p v-show="failed">{{failmsg}}</p>
        <div>
            <p>国家：{{country}}</p>
            <p>省份：{{province}}</p>
            <p>城市：{{city}}</p>
            <p>详细地址：{{addr}}</p>
            <p>日期：{{time}}</p>
        </div>

    </div>
</template>
<script>
import '../../assets/js/jquery-3.3.1.js'
export default {
    data(){
        return{
            failmsg: '网络位置失败，因为百度定位服务检查密钥是不合法的，请检查本APP的密钥',
            failed: false,
            country: '',
            province: '',
            city: '',
            addr: '',
            time: ''
        }
    },
    methods:{
        getPositionBybaidu(){
            let _this = this;
            if ('baidumap_location' in window) {
                baidumap_location.getCurrentPosition(function (result) {
                    // console.log(result);
                    // alert(typeof(result));
                    alert(JSON.stringify(result));
                    _this.country = result.country;
                    _this.province = result.province;
                    _this.city = result.city;
                    _this.addr = result.addr;
                    _this.time = result.time;
                }, function (error) {
                    // console.error(error);
                    alert('获取失败')
                    alert(error)
                });
            } else {
                console.error('baidumap_location is undefined');
                alert('baidumap_location is undefined');
            }
        },
        baiduPC(){
            // https://api.map.baidu.com/location/ip?ip=xx.xx.xx.xx&ak=您的AK&coor=bd09ll
            this.axios.post('/api/location/ip?ip&ak=T7PEdIsCpQI1h5zraMdrDCinS52hvYuU&coor=bd09ll')
             .then(res=>{
                console.log(res);
            }).catch(err=>{
                consolog(err);
            })
        },
        getPositionBygaode(){
            // 进行定位
            GaoDe.getCurrentPosition(function(res){
                alert(JSON.stringify(res, null, 4));
            }, function(){
                alert('获取失败');
            });
        }
    }
}
</script>
<style lang="less">
.YOUposition{
    display: flex;
    flex-direction: column;
    justify-content: center;
    .getGPSData{
        width: 40vw;
        height: 8vh;
        font-size: 16px;
        margin-top: 10px;
        margin: 5px auto;
    }
}
</style>
