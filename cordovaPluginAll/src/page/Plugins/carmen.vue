<template>
    <div class="carPicture">
        <x-header :left-options="{showBack: false}">拍照</x-header>
        <div @click="open_car" class="clickButton">打开摄像头</div>
        <div @click="getPhoto" class="clickButton">从相册选择照片</div>
        <img :src="openCar" id="largeImage">
    </div>
</template>
<script>
var pictureSource;
var destinationType;
export default {
    data(){
        return{
            openCar:'./static/imgs/backGroundImg.jpg'
        }
    },
    name:'Carmen',
    methods:{
        //拍照插件应用cordova plugin add cordova-plugin-camera
        open_car(){
            navigator.camera.getPicture(this.cameraSuccess, this.cameraError, {
                correctOrientation: true,
            });
        },
        cameraSuccess(imgdata){
            this.openCar = imgdata;
        },
        cameraError(){
            console.log('FAIL 不能打开');
        },
        //Cordova加载完成会触发
        // onDeviceReady() {
        //     pictureSource=navigator.camera.PictureSourceType;
        //     destinationType=navigator.camera.DestinationType;
        // },
         //获取照片
        getPhoto() {
            //quality : 图像的质量，范围是[0,100]
            let _this = this;
            navigator.camera.getPicture(_this.onPhotoURISuccess,
                function(error){alert("照片获取失败！")},
                { 
                    quality: 50, 
                    destinationType: navigator.camera.DestinationType.FILE_URI, //配置返回的是文件路径
                    sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY//配置相片从相册中选择
                }
            );
        },

        //获取照片成功
        onPhotoURISuccess(imageURI) {
            //打印出照片路径
            // alert(imageURI);
            //显示照片
            var largeImage = document.getElementById('largeImage');
            largeImage.src = imageURI;
            // this.openCar = imageURL;//通过data绑定src不能成功，只能通过getElementById来绑定src
        }
    },
    mounted(){
        // document.addEventListener("deviceready",this.onDeviceReady,false);
    }
}
</script>
<style>
img{
    width: 100vw;
}
</style>
