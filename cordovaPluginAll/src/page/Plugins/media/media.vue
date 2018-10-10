<template>
    <div class="media">
        <textarea v-model="RecordName" placeholder="请输入文件名"></textarea>
        <div @click="startRecord" class="clickButton" >开始录音</div>
        <div @click="stopme" class="clickButton" >结束录音</div>
        <div @click="createdir" class="clickButton" >新录制方法</div>
        <!-- <video src="../../../assets/MP4/VID_20180203_173251.mp4" width="320" height="240" controls="controls">
            Your browser does not support the video tag.
        </video> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            vadio:'',
            RecordName:'',
            stopRecord: false
        }
    },
    methods:{
        startRecord(){
            let _this = this;
            // var src = "cdvfile://localhost/persistent/"+_this.RecordName + ".mp3";//存储到应用程序外部根目录
            var src = "cdvfile://localhost/temporary/"+_this.RecordName + ".mp3";//存储到应用程序内部的cache目录下
            alert("已经开始录音了");
            var mediaRec = new Media(src,
                // success callback
                function() {
                    alert("录音成功！");
                },

                // error callback
                function(err) {
                    alert("recordAudio():Audio Error: "+ err.code);
                });

            // Record audio
            mediaRec.startRecord();
            let timer = setInterval(function(){
                if(_this.stopRecord === true){
                    mediaRec.stopRecord();
                    _this.stopRecord = false;
                    alert('定时器已经关闭');
                    clearInterval(timer);
                }
            },800);

        },
        stopme(){
            this.stopRecord = true;
        },
        createdir(){
            var type = LocalFileSystem.PERSISTENT;//永久目录
            //var type = LocalFileSystem.TEMPORARY,  //临时目录
            var size = 5*1024*1024;
            let _this = this;
            window.requestFileSystem(type, size, successCallback, errorCallback);//向系统请求文件
            function successCallback(fs) {
                fs.root.getDirectory('LING',{ create: true },function (dirEntry) {//创建LING文件夹
                    dirEntry.getDirectory('MP3',{ create: true },function (subDirEntry) {//在LING文件夹里面创建txtFile文件夹
                        var src = "file:///storage/emulated/0/LING/MP3/"+_this.RecordName + ".mp3";//存储到应用程序内部的cache目录下
                        alert(JSON.stringify(subDirEntry));
                            alert("已经开始录音了");
                            var mediaRec = new Media(src,
                                function() {
                                    alert("录音成功！");
                                },
                                function(err) {
                                    alert("recordAudio():Audio Error: "+ err.code);
                                });
                            // Record audio
                            mediaRec.startRecord();
                            let timer = setInterval(function(){
                                if(_this.stopRecord === true){
                                    mediaRec.stopRecord();
                                    _this.stopRecord = false;
                                    alert('定时器已经关闭');
                                    clearInterval(timer);
                                }
                            },800);
                    },errorCallback);
                },errorCallback);
            }
            function errorCallback(error) {
                alert("失败: " + error.code)
            }
        }
    }
}
</script>
<style lang="less">
.media{
    textarea{
        width: 96vw;
        margin: 8px auto;
    }
}
</style>
