<template>
    <div v-show="write">
        <textarea id = "textarea" v-model="text"></textarea>
        <div @click="writeFile" class="openCarmen" >{{tobutton}}</div>
    </div>
</template>
<script>
export default {
    props:[],
    methods:{
        clickEvent(){
            this.$emit("");
        }
    }
}
</script>
<style lang="less">

</style>
