<template>
    <div class="pulgins">
        <x-header :left-options="{showBack: false}">首页</x-header>
        <group label-margin-left>
            <cell title="chooseImage" :link="{path:'/nullpage/carmen'}" inline-desc='拍照获得照片' @cell-font-size="20"></cell>
            <cell title="scanCode" :link="{path:'/nullpage/scanCode'}" inline-desc='扫描'></cell>
            <cell title="geolocation" :link="{path:'/nullpage/GPSposition'}" inline-desc='GPS定位'></cell>
            <cell title="battery" :link="{path:'/nullpage/battery'}" inline-desc='电池信息'></cell>
            <cell title="FileSystem" :link="{path:'/nullpage/file'}" inline-desc='文件系统'></cell>
            <cell title="fileTransfer" :link="{path:'/nullpage/fileTransfer'}" inline-desc='文件传输'></cell>
            <cell title="Media" :link="{path:'/nullpage/media'}" inline-desc='制作媒体'></cell>
            <cell title="mediaCapture" :link="{path:'/nullpage/mediaCapture'}" inline-desc='获取媒体'></cell>
            <cell title="Device" :link="{path:'/nullpage/device'}" inline-desc='设备信息'></cell>
            <cell title="deviceMotion" :link="{path:'/nullpage/deviceMotion'}" inline-desc='设备加速度'></cell>
            <cell title="deviceOrientation" :link="{path:'/nullpage/deviceOrientation'}" inline-desc='设备方向'></cell>
            <cell title="Network" :link="{path:'/nullpage/network'}" inline-desc='网络信息'></cell>
            <cell title="InAppBrowser" :link="{path:'/nullpage/inappbrowser'}" inline-desc='内置浏览器'></cell>
        </group>
    </div>
</template>
<script>
export default {
    name:'Plugin'
}
</script>
<style lang="less">
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
    color:rgb(247,29,116)!important;
}
.weui-cells{
    margin-bottom: 54px;
}
</style>
