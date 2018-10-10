<template>
    <div class="GETP5OEE">
        <x-header :left-options="{showBack: false}">环形图</x-header>
        <group label-margin-left>
            <x-switch :title="thame" v-model="stringValue" prevent-default @on-click="changeColor"></x-switch>
        </group>
        <div class="chartsFrame" ref="chartsFrame">
            <div id="myChart"></div>
            <p class="standard" ref="forword"><i ref="A">A</i>指标</p>
            <p class="outWord" >操作时间：<i ref="worktime">{{workTime}}</i></p>
            <p class="outWord">计划工作时间：<i ref="plantime">{{planTime}}</i></p>
        </div>
    </div>
</template>
<script>
export default {
    name:'Stable',
    data(){
        return{
           workTime: '',
           planTime: '',
           stringValue: false,
           ReachedRate: '90%',
           thame: '白天主题'
        }
    },
    methods: {
        getdata(){
            // 基于准备好的dom，初始化echarts实例
            const myChart = this.$echarts.init(document.getElementById('myChart'));
            // 绘制图表
            var i = 0;
            var colors=['rgb(31, 176, 240)','rgb(226, 223, 209)'];
            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data:[]
                },
                series: [
                    {
                        name:'完成量',
                        type:'pie',
                        radius: ['65%','75%'],
                        avoidLabelOverlap: false,
                        hoverAnimation: false,
                        silent: true,
                        label: {
                            normal: {
                                show: true,
                                position: 'center',
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle : {
                            normal : {
                                color:function(){
                                    return colors[i++];
                                },
                            },
                            emphasis : {
                                label : {
                                    show : true,
                                    position : 'center',
                                    textStyle : {
                                        fontSize : '30',
                                        fontWeight : 'bold'
                                    }
                                }   
                            }
                        },
                        data:[
                            // {value:80},
                            // {value:60}
                        ]
                    }
                ]
            });
            //获取数据
            let Tticket = localStorage.getItem('ticket');
            let _this = this;
            // console.log(Tticket);
            let pargrams = {    
                "ApiType": "MobileController",
                "Parameters": [
                    {
                    "Value": 1
                    },
                    {
                    "Value": "str"
                    },
                    {
                    "Value": "str"
                    }
                ],
                "Method": "GetP5OEE",
                "Context": {
                    "Ticket": Tticket,
                    "InvOrgId": 1
                }
            };
            this.axios.post('/api/invoke',pargrams)
            .then(function (res) {
                let Result = res.data.Result;
                // console.log(Result);
                let ObjResult = JSON.parse(Result);
                let ok = ObjResult.CTotalQty;
                let notok = ObjResult.CTotalQty-ObjResult.COkQty;
                var point = Math.abs(Math.floor(ok/(ok+notok)*100))+'%';
                // console.log(ok);
                // console.log(notok);
                let WT = ObjResult.BOperationTime;
                let PT = ObjResult.APlanWorkTime;
                _this.workTime = WT;
                _this.planTime = PT;
                let seriesdata = [{
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            formatter:function () {
                                let resdata = point;
                                return resdata;
                            },
                            textStyle:{
                                fontSize: 35,
                                color:'#1049F5'
                            }
                        }
                    },
                    data:[
                        {value:ok},
                        {value:notok}
                    ]
                }];
                myChart.setOption({
                    series:seriesdata
                });
            })
            .catch(function (error) {
                console.log('请检测设备是否连接网络');
            })
        },
        changeColor(){
            this.stringValue = !this.stringValue;
            // console.log("事件触发了");
            // console.log(this.$refs.chartsFrame.style.backgroundColor);
            if(this.stringValue){
                this.thame = '黑夜主题';
                this.$refs.chartsFrame.style.backgroundColor = 'rgb(38, 42, 77)';
                this.$refs.chartsFrame.style.borderColor = 'rgb(29, 31, 54)';
                this.$refs.worktime.style.color = 'rgb(254, 254, 255)';
                this.$refs.plantime.style.color = 'rgb(254, 254, 255)';
                this.$refs.forword.style.color = 'rgb(0, 222, 143)';
                this.$refs.A.style.color = 'rgb(248, 248, 248)';
                let blackColors =  ['rgb(220, 73, 14)','rgb(25, 26, 46)'];
                let i = 0;
                let seriesData = [{
                    label: {
                        normal: {
                            textStyle:{
                                color:'#F39D1B'
                            }
                        }
                    },
                    itemStyle : {
                        normal : {
                            color:function(){
                                return blackColors[i++]; 
                            },
                        },
                    },
                }]
                let myChart = this.$echarts.init(document.getElementById('myChart'));
                myChart.setOption({
                    series:seriesData
                });
                // colors = ['#F17F0C','rgb(45, 44, 46)'];
            }else{
                this.thame = '白天主题';
                this.$refs.chartsFrame.style.backgroundColor = 'rgb(213, 207, 177)';
                this.$refs.chartsFrame.style.borderColor = 'rgb(222, 218, 200)';
                this.$refs.chartsFrame.style.color = 'rgb(254, 254, 255)';
                this.$refs.worktime.style.color = 'rgb(0, 0, 0)';
                this.$refs.plantime.style.color = 'rgb(0, 0, 0)';
                this.$refs.forword.style.color = 'rgb(251, 32, 113)';
                this.$refs.A.style.color = 'rgb(13, 10, 13)';
                let blackColors = ['rgb(31, 176, 240)','rgb(226, 223, 209)'];
                let i = 0;
                let seriesData = [{
                    label: {
                        normal: {
                            textStyle:{
                                color:'rgb(4, 48, 177)'
                            }
                        }
                    },
                    itemStyle : {
                        normal : {
                            color:function(){
                                return blackColors[i++]; 
                            },
                        },
                    }
                }];
                let myChart = this.$echarts.init(document.getElementById('myChart'));
                myChart.setOption({
                    series:seriesData
                });
                // colors=['#30BEC6','#E4F7F8'];
            }
        }
    },
    mounted(){
        this.getdata();
    }
}
</script>
<style>
@import '../../assets/style/GetP5OEE.css';
</style>