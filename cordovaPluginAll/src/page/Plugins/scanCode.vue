<template>
    <div>
        <x-header :left-options="{showBack: false}">扫描</x-header>
        <div @click="scan" class="clickButton">扫码</div>
        <div @click="scanFromDcim" class="clickButton">从相册中选取</div>
        <div @click="makeScantext" class="clickButton">文本生成二维码</div>
        <div @click="makeScanemail" class="clickButton">邮箱地址生成二维码</div>
        <div @click="makeScanPhone" class="clickButton">电话号码生成二维码</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        //扫码插件应用cordova plugin add phonegap-plugin-barcodescanner
        scan(){
            cordova.plugins.barcodeScanner.scan(
                function (result) {
                    alert(`扫描结果:\n${result.text}`);
                            // alert("扫描结果\n" +
                            // "Result: " + result.text + "\n" +
                            // "Format: " + result.format + "\n" +
                            // "Cancelled: " + result.cancelled);
                    location= result.text;
                },
                function (error) {
                    alert("Scanning failed: " + error);
                },
                {
                    preferFrontCamera : false, // iOS and Android
                    showFlipCameraButton : false, // iOS and Android
                    showTorchButton : false, // iOS and Android
                    torchOn: false, // Android, launch with the torch switched on (if available)
                    saveHistory: true, // Android, save scan history (default false)
                    prompt : "请将条码置于扫码框中", // Android
                    resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                    formats : "", // default: all but PDF_417 and RSS_EXPANDED
                    orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
                    disableAnimations : true, // iOS
                    disableSuccessBeep: false // iOS and Android
                }
            );
        },
        scanFromDcim(){
            
        },
        makeScantext(){
            cordova.plugins.barcodeScanner.encode(
                "TEXT_TYPE",//配置来源是文本形式
                "http://www.baidu.com",
            function(success) {  
                alert("encode success: " + success);  
            }, function(fail) {  
                alert("encoding failed: " + fail);  
            });  
        },
        makeScanemail(){
            cordova.plugins.barcodeScanner.encode(  
                "EMAIL_TYPE",   //配置来源是邮箱形式
                "rensanning@gmail.com",   
            function(success) {  
                alert("encode success: " + success);  
            }, function(fail) {  
                alert("encoding failed: " + fail);  
            }  
            );  
        },
        makeScanPhone(){
            cordova.plugins.barcodeScanner.encode(  
                "PHONE_TYPE",   
                "166-0304-5970",   
            function(success) {  
                alert("encode success: " + success);  
            }, function(fail) {  
                alert("encoding failed: " + fail);  
            }  
            ); 
        }
    }
}
</script>
<style lang="less">

</style>
