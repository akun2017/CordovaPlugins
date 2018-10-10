<template>
    <div class="fileTransfer">
        <div @click="uploadFile" class="clickButton" >上传文件</div>
        <div @click="downloadFile" class="clickButton" >下载文件</div>
        <div @click="downFile" class="clickButton" >新下载方式</div>
        <div @click="stopdownFile" class="clickButton" >暂停下载</div>
        <div @click="keepdownFile" class="clickButton" >继续下载</div>
        <div>
            下载进度：
            <p id="downpoint"></p> 
        </div>
        <!-- <x-progress :percent="percent2"></x-progress> -->
        <div class="progressContainer">
            <div class="progress" :style="{width: percent2+'%'}"></div>
            <b>{{percent2}}%</b>
        </div>
    </div>
</template>
<script>
import { XProgress } from 'vux'
import { setInterval, clearInterval } from 'timers';
export default {
    data(){
        return{
            downPoint: 0,
            percent2: 0,
            stopdown: false
            // progreess:5
        }
    },
    components: {
        XProgress
    },
    methods:{
        downloadFile() {
            let _this = this;
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
                // console.log('打开的文件系统: ' + fs.name);
                var url = 'http://p.gdown.baidu.com/5cf7413a05c868fbb224ceaf5562ca18abb6ee62615e9ced46c92f691a323c873635627830a9e6da7ebbab923091e1bc40a88193143dd9f0d2908892b3b772721b3ad80824263a2852651f73c5d0e634f5d0518609277a2fadaef1c874a9695f4d57a16a3d66c6301480b3609f61a725959e774b2fb2fd0fa186a6ba6de1c6d5a5e5128754e28222a3d366b20275aff5b90f928b2966f6460cea17535c1e18521efb6fa3a19ae7f3';
                fs.root.getDirectory('LING',{ create: true },function (dirEntry) {//创建LING文件夹
                    dirEntry.getDirectory('downloads',{ create: true },function (subDirEntry) {//在LING文件夹里面创建txtFile文件夹
                        subDirEntry.getFile('baiduHelp.apk', { create: true, exclusive: false },
                            function (fileEntry) {
                                _this.download(fileEntry, url);
                        }, onErrorCreateFile);
                    },onErrorCreateFile);
                },onErrorCreateFile);
            }, onErrorLoadFs);
            //文件创建失败回调
            function  onErrorCreateFile(error){
                alert("文件创建失败！")
            }
            //FileSystem加载失败回调
            function  onErrorLoadFs(error){
                alert("文件系统加载失败！")
            }
        },
        download(fileEntry, uri) {
            // let _this = thisobj;
            var fileTransfer = new FileTransfer();
            var fileURL = fileEntry.toURL();
            // alert(JSON.stringify(_this));
            fileTransfer.onprogress = function(progressEvent) {
                // if (progressEvent.lengthComputable) {
                let downfilePoint = progressEvent.loaded / progressEvent.total;
                let showpoint = downfilePoint*100;
                let downpoint = document.getElementById('downpoint');
                // _this.percent2 = showpoint;
                downpoint.innerHTML = showpoint;
            };

            fileTransfer.download(
                uri,
                fileURL,
                function (entry) {
                    alert("下载成功！");
                    // alert("文件保存位置: " + entry.toURL());
                },
                function (error) {
                    alert("下载失败！");
                    alert("error source " + error.source);
                    alert("error target " + error.target);
                    alert("error code" + error.code);
                },
                null, // or, pass false
                {
                    //headers: {
                    //    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                    //}
                }
            );
        },
        downFile(){
            let _this = this;
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
                // console.log('打开的文件系统: ' + fs.name);
                var url = 'http://p.gdown.baidu.com/5cf7413a05c868fbb224ceaf5562ca18abb6ee62615e9ced46c92f691a323c873635627830a9e6da7ebbab923091e1bc40a88193143dd9f0d2908892b3b772721b3ad80824263a2852651f73c5d0e634f5d0518609277a2fadaef1c874a9695f4d57a16a3d66c6301480b3609f61a725959e774b2fb2fd0fa186a6ba6de1c6d5a5e5128754e28222a3d366b20275aff5b90f928b2966f6460cea17535c1e18521efb6fa3a19ae7f3';
                fs.root.getDirectory('LING',{ create: true },function (dirEntry) {//创建LING文件夹
                    dirEntry.getDirectory('downloads',{ create: true },function (subDirEntry) {//在LING文件夹里面创建txtFile文件夹
                        subDirEntry.getFile('baiduHelp.apk', { create: true, exclusive: false },function (fileEntry) {
                            var fileTransfer = new FileTransfer();
                            var fileURL = fileEntry.toURL();
                            // alert(JSON.stringify(_this));
                            fileTransfer.onprogress = function(progressEvent) {
                                let downfilePoint = (progressEvent.loaded / progressEvent.total)*100;
                                let aa = Math.floor(downfilePoint);
                                _this.percent2 = aa;
                            };
                            fileTransfer.download(url,fileURL,function (entry) {
                                    alert("下载成功！");
                                },
                                function (error) {
                                    alert("下载失败！");
                                },null,{}
                            );
                        }, onErrorCreateFile);
                    },onErrorCreateFile);
                },onErrorCreateFile);
            }, onErrorLoadFs);
            //文件创建失败回调
            function  onErrorCreateFile(error){
                alert("文件创建失败！")
            }
            //FileSystem加载失败回调
            function  onErrorLoadFs(error){
                alert("文件系统加载失败！")
            }
        },
        uploadFile(){},
        stopdownFile(ft){
            this.stopdown = true;
            // ft.abort();
        },
        keepdownFile(){
            this.stopdown = false;
        }
    },
    mounted(){
        // let _this = this;
        // let timerss =  setInterval(function(){
        //     let downpoint = document.getElementById('downpoint');
        //     _this.percent2 = downpoint.innerHTML;
        //     if(downpoint.innerHTML ===100){
        //         clearInterval(timerss);
        //     }
        // },500)
        // let downpoint = document.getElementById('downpoint');
        // this.percent2 = downpoint.innerHTML;
        // let _this = this;
        // setInterval(function(){
        //     _this.percent2 += 2;
        // },500)
    }
}
</script>
<style lang="less">
div.progressContainer{
    height: 6px;
    width: 90vw;
    border-radius: 3px;
    background-color: rgb(206, 204, 204);
    position: absolute;
}
div.progress{
    background-color: rgba(37, 236, 70, 0.904);
    border-radius: 3px;
    height:6px;
    line-height: 6px;
}
b{
    color:rgb(31, 29, 29);
    font-weight: 100;
    font-size: 10px;
    position: relative;
    right: -92vw;
    top: -12px;

}
</style>
