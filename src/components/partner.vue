<script setup>
import { ref, reactive, nextTick } from 'vue';
const windowheight = reactive({
    height: window.innerHeight
})

</script>

<template>
    <div class="main" :style="{ height: `${windowheight.height}PX` }">
        <div style="width:100%;height:100vh;background-color: rgba(0,0,0,0.35); overflow: hidden;" >
        <div class="content">
            <p class="title">{{$t("partner.title")}}</p>
            <div class="line"></div>
            <p class="text1 text2">{{$t("partner.text1")}}</p>
            <p class="text1">{{$t("partner.text2")}}</p>
        </div>
        <div class="bottom">
            <img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/partner2.png" alt="" class="img" :style="{ height: `${windowheight.height*0.42}PX` }">
        </div>
    </div>
    </div>
</template>

<style lang="less" scoped>
.main {
    width: 100%;
    background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/partner1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
}
.content{
    text-align: center;
    color: #FFFFFF;
    padding-left: 35px;
    padding-right: 35px;
    .title {
        font-size: 28px;
        font-weight: bold;
        margin-top: 90PX;
    }
    .line {
        width: 51px;
        height: 4PX;
        background-color: #49B98D;
        margin: 0 auto;
        margin-top: 20PX;
        border-radius: 2PX;
    }
    .text1{
        font-size: 14px;
    }
    .text2{
        margin-top: 17PX;
    }
}
.bottom{
    margin-top: 36PX;
    padding-left: 19px;
    padding-right: 19px;
    padding-bottom: 66PX;
    text-align: center;
  
}
</style>
