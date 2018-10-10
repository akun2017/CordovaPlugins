<template>
    <div class="mediaCapture">
        <div @click="audioCapture" class="clickButton" >开始录音</div>
        <div @click="videoCapture" class="clickButton" >录制视频</div>
    </div>
</template>
<script>
export default {
    methods:{
        audioCapture() {
            //开始录音（最长录制时间：15秒）
            navigator.device.capture.captureAudio(onSuccess, onError, {duration: 15});

            //录制成功
            function onSuccess(mediaFiles) {
                var i, path, len;
                //遍历获取录制的文件（iOS只支持一次录制一个视频或音频）
                for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                console.log(mediaFiles);
                    path = mediaFiles[i].fullPath;
                    alert("录制成功！\n\n"
                        + "文件名：" + mediaFiles[i].name + "\n"
                        + "大小：" + mediaFiles[i].size + "\n\n"
                        + "localURL地址：" + mediaFiles[i].localURL + "\n\n"
                        + "fullPath地址：" + path);
                }
            }

            //录制失败
            function onError(error) {
                alert('录制失败！错误码：' + error.code);
            }
        },
        videoCapture() {
            //开始录像（最长录制时间：15秒）
            navigator.device.capture.captureVideo(onSuccess, onError, {duration: 15});

            //录制成功
            function onSuccess(mediaFiles) {
                var i, path, len;
                //遍历获取录制的文件（iOS只支持一次录制一个视频或音频）
                for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                console.log(mediaFiles);
                    path = mediaFiles[i].fullPath;
                    alert("录制成功！\n\n"
                        + "文件名：" + mediaFiles[i].name + "\n"
                        + "大小：" + mediaFiles[i].size + "\n\n"
                        + "localURL地址：" + mediaFiles[i].localURL + "\n\n"
                        + "fullPath地址：" + path);
                }
            }

            //录制失败
            function onError(error) {
                alert('录制失败！错误码：' + error.code);
            }
        }
    }
}
</script>
<style lang="less">
</style>
