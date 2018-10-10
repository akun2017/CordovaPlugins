<template>
    <div class="file">
        <div @click="createName" class="clickButton" >创建文件</div>
        <div @click="openWrite" class="clickButton" >填写文件</div>
        <div @click="showcontent" class="clickButton" >读取文件</div>
        <div @click="removeFile" class="clickButton" >删除文件</div>
        <!-- <input type="text" v-model="createname" v-show="create"/> -->
        <!-- <input type="file" placeholder="请选择文件" /> -->
        <div v-show="write">
            <textarea id = "textarea" v-model="text"></textarea>
            <div @click="createFile" class="clickButton" v-show="createname">确认文件名</div>
            <div @click="writeFile" class="clickButton" v-show="sendContent">填写文件内容</div>
            <!-- <div @click="createFile" class="openCarmen" v-show="createname">确认文件名</div> -->
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            text:'',
            write: false,
            createname: false,
            sendContent: false,
            create: false
        }
    },
    methods:{
        createName(){
            // this.tobutton = '确认文件名'
            this.text = '';
            this.createname = true;
            this.sendContent = false;
            this.write = true;
        },
        createFile() {
            var type = LocalFileSystem.PERSISTENT;//永久目录
             //LocalFileSystem.TEMPORARY,  //临时目录
            var size = 5*1024*1024;
            let _this = this;
            window.requestFileSystem(type, size, successCallback, errorCallback);//向系统请求文件
            function successCallback(fs) {
                fs.root.getDirectory('LING',{ create: true },function (dirEntry) {//创建LING文件夹
                    dirEntry.getDirectory('txtFile',{ create: true },function (subDirEntry) {//在LING文件夹里面创建txtFile文件夹
                        //exclusive：是否不能重复
                        //如果没有是否创建
                        subDirEntry.getFile(_this.text+'.txt', {create: true, exclusive: true}, function(fileEntry) {//在txtFile文件夹下创建_this.text+'.txt'文件
                            alert('文件创建成功了：'+_this.text);
                        }, errorCallback);//如果系统没有_this.text+'.txt'文件，则自动生成，
                    },errorCallback);
                },errorCallback);
            }
            function errorCallback(error) {
                alert("失败: " + error.code)
            }
            //创建filenamelist数组，从localStorage获取，如果localStorage没有则为空，数组里的每个对象用逗号分开
            let filenamelist=localStorage.getItem('filenamelist')&&localStorage.getItem('filenamelist').split(',')||[];
            //向数组里推送_this.text+'.txt'字符串
            filenamelist.push(_this.text+'.txt');
            //将_this.text+'.txt'字符串存储到localStorage中,用','分开
            localStorage.setItem('filenamelist',filenamelist.join(','));
            _this.write = false;
        },
        openWrite(){
            this.text = '';
            this.sendContent = true;
            this.createname = false;
            this.write = true;
        },
        writeFile() {
            var type = LocalFileSystem.PERSISTENT;
            var size = 5*1024*1024;
            let _this = this;
            // let fileIndex = _this.$store.state.fileName.length-1;
            let fileStorage = localStorage.getItem('filenamelist');
            let namearr = fileStorage.split(",");//将fileIndex字符串，转换成用逗号分隔的数组；
            let fileIndex = namearr[namearr.length-1];
            // alert(fileIndex);
            window.requestFileSystem(type, size, successCallback, errorCallback)
            function successCallback(fs) {
                fs.root.getDirectory('LING',{ create: false},function (dirEntry) {//创建LING文件夹
                    dirEntry.getDirectory('txtFile',{ create: false},function (subDirEntry) {//在LING文件夹里面创建txtFile文件夹
                        subDirEntry.getFile(fileIndex, {create: false}, function(fileEntry) {
                            fileEntry.createWriter(function(fileWriter) {
                                fileWriter.onwriteend = function(e) {
                                    alert('向['+fileIndex+']写入内容成功');
                                };
                                fileWriter.onerror = function(e) {
                                    alert('写入失败: ' + e.toString());
                                };
                                var blob = new Blob([_this.text], {type: 'text/plain'});
                                fileWriter.write(blob);
                            }, errorCallback);
                        }, errorCallback);
                    },errorCallback);
                },errorCallback);
            }
            function errorCallback(error) {
                alert("ERROR: " + error.code)
            }
            _this.sendContent = false;
            _this.write = false;
        },
        showcontent(){
            this.createname = false;
            this.sendContent = false;
            this.write = true;
            this.readFile();
        },
        readFile() {
            var type = LocalFileSystem.PERSISTENT;
            var size = 5*1024*1024;
            let _this = this;
            // let fileIndex = _this.$store.state.fileName.length-1;
            let fileStorage = localStorage.getItem('filenamelist');
            let namearr = fileStorage.split(",");//将fileIndex字符串，转换成用逗号分隔的数组；
            let fileIndex = namearr[namearr.length-1];
            window.requestFileSystem(type, size, successCallback, errorCallback)
            function successCallback(fs) {
                fs.root.getDirectory('LING',{ create: false},function (dirEntry) {//创建LING文件夹
                    dirEntry.getDirectory('txtFile',{ create: false},function (subDirEntry) {//在LING文件夹里面创建txtFile文件夹
                        subDirEntry.getFile(fileIndex, {}, function(fileEntry) {
                            fileEntry.file(function(file) {
                                alert('现在显示的内容来源于：' + fileIndex);
                                var reader = new FileReader();
                                reader.onloadend = function(e) {
                                    _this.text = this.result;
                                };
                                reader.readAsText(file);
                            }, errorCallback);
                        }, errorCallback);
                    },errorCallback);
                },errorCallback);

                // fs.root.getFile(fileIndex, {}, function(fileEntry) {
                //     fileEntry.file(function(file) {
                //         alert('现在显示的内容来源于：' + fileIndex);
                //         var reader = new FileReader();
                //         reader.onloadend = function(e) {
                //             _this.text = this.result;
                //         };
                //         reader.readAsText(file);
                //     }, errorCallback);
                // }, errorCallback);
            }
            function errorCallback(error) {
                alert("ERROR: " + error.code)
            }
        },
        removeFile() {
            var type = LocalFileSystem.PERSISTENT;
            var size = 5*1024*1024;
            let _this = this;
            // let fileIndex = _this.$store.state.fileName.length-1;
            let fileStorage = localStorage.getItem('filenamelist');
            let namearr = fileStorage.split(",");//将fileIndex字符串，转换成用逗号分隔的数组；
            let fileIndex = namearr[namearr.length-1];
            window.requestFileSystem(type, size, successCallback, errorCallback)
            function successCallback(fs) {
                fs.root.getDirectory('LING',{ create: false},function (dirEntry) {//创建LING文件夹
                    dirEntry.getDirectory('txtFile',{ create: false},function (subDirEntry) {//在LING文件夹里面创建txtFile文件夹
                        subDirEntry.getFile(fileIndex, {create: false}, function(fileEntry) {
                            fileEntry.remove(function() {
                                alert('删除了文件：'+ fileIndex);
                            }, errorCallback);
                        }, errorCallback);
                    },errorCallback);
                },errorCallback);
            }
            function errorCallback(error) {
                alert("删除失败: " + error.code)
            }
            namearr.splice(namearr.length-1,1);
            localStorage.setItem('filenamelist',namearr);
            alert('剩下的文件有：'+fileStorage);
            _this.write = false;
        }
    }
}
</script>
<style lang="less">
.file{
    p{
        margin-left: 10vw;
    }
    #textarea{
        width: 96vw;
        height: 50vw;
        margin: 2px auto;
    }
}
</style>
