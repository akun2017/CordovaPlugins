# CordovaPulgins

> 本项目是对cordova平台所使用的一些常用插件进行实验，供大家学习使用

项目所用到的知识有：Vue、VUX、Cordova、echarts、vue-router、

本人的环境是`Windows10`, `ZUKz2pro`, `Android 8.0`

* 使用echarts，并将数据绑定到图表当中。
> 由于做的时候使用的是公司的接口，正常下载后是拿不到数据的

* vux组件库的使用

* 定位插件`cordova plugin add cordova-plugin-geolocation`,不适用于安卓，支持IOS定位
所以有两种方案，百度和高德的定位方案，

[定位说明介绍](https://www.cnblogs.com/akun-2017/p/9766617.html)

百度：`cordova plugin add cordova-plugin-baidumaplocation --variable ANDROID_KEY="<API_KEY_ANDROID>" --variable IOS_KEY="<API_KEY_IOS>"`

#### 注意高德定位还没实现

* 电池信息插件`cordova plugin add cordova-plugin-battery-status`

* 文件系统插件`cordova plugin add cordova-plugin-file`

* 退出应用`cordova plugin add cordova-plugin-exitapp`

* 扫码插件`cordova plugin add phonegap-plugin-barcodescanner`

* 媒体插件`cordova plugin add cordova-plugin-media`，录制媒体：如音频，直接调用硬件设备，不经过第三方应用

* 获取媒体插件`cordova plugin add cordova-plugin-media-capture`,录制媒体文件,使用的是系统默认应用

* 摄像头插件`cordova plugin add cordova-plugin-camera`

* 获取设备信息`cordova plugin add cordova-plugin-device`

* 闪屏插件`cordova plugin add cordova-plugin-splashscreen`
> 闪屏插件，不同于其它的插件，闪屏发生的时间点实在，应用开启时的启动画面设置，直接在cordova项目的`config.xml`进行配置就可以了。
```xml
<!-- 配置开启闪屏功能，value值是图片名 -->
<preference name="SplashScreen" value="screen" />
<!-- 配置闪屏保持的时间长，这里我设置为3秒 -->
<preference name="SplashScreenDelay" value="3000" />
<!-- 配置闪屏的背景图片是否进行伸拉，适配全屏 -->
<preference name = "SplashMaintainAspectRatio" value = "true" />
```
* 获取网络信息 `cordova plugin add cordova-plugin-network-information`

* 设备加速计`cordova plugin add cordova-plugin-device-motion`

* 设备方向`cordova plugin add cordova-plugin-device-orientation`

* 震动插件`cordova plugin add cordova-plugin-vibration`

* 内置浏览器`cordova plugin add cordova-plugin-inappbrowser`

* 文件传输插件`cordova plugin add cordova-plugin-file-transfer`

cordova 项目的`config.xml`追加两条配置：
```xml
<!--此配置是配合file插件使用的，-->
<preference name="AndroidPersistentFileLocation" value="Compatibility" />
<!--此配置禁止屏幕横屏-->
<preference name="orientation" value="portrait" />
```
> 如果有什么疑问，随时欢迎大家提问。


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
