<template>
    <div class="inappbro">
        <input class="writeUrl" type="text" v-model="breUrl"/>
        <div @click="openBrowser" class="clickButton" >打开浏览器</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            breUrl: 'https://www.baidu.com/'
        }
    },
    methods:{
        openBrowser(){
            // var url = 'https://cordova.apache.org';
            var url = this.breUrl;
            var target = '_blank';
            var options = "location=yes"
            var ref = cordova.InAppBrowser.open(url, target, options);

            ref.addEventListener('loadstart', loadstartCallback);
            ref.addEventListener('loadstop', loadstopCallback);
            ref.addEventListener('loadloaderror', loaderrorCallback);
            ref.addEventListener('exit', exitCallback);

            function loadstartCallback(event) {
                console.log('Loading started: '  + event.url)
            }

            function loadstopCallback(event) {
                console.log('Loading finished: ' + event.url)
            }

            function loaderrorCallback(error) {
                console.log('Loading error: ' + error.message)
            }

            function exitCallback() {
                console.log('Browser is closed...')
            }
        }
    }
}
</script>
<style lang="less">
.inappbro{
    padding-top: 20px;
    .writeUrl{
        width: 100vw;
    }
}
</style>
