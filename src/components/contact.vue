<script setup>
import { ref, reactive, nextTick } from 'vue';
const windowheight = reactive({
    height: window.innerHeight
})

</script>

<template>
    <div class="main" :style="{ height: `${windowheight.height}PX` }">
        <div style="width:100%;height:100%;background-color: rgba(0,0,0,0.35);" >
        <div class="title"><p>{{$t("contact.title")}}</p><div class="line"></div></div>
        <div class="content">
            <div>
                <p class="text1">{{$t("contact.ch")}}</p>
                <p class="text2">mail@qdtz888.com</p>
                <p class="text3">北京丰台区丽泽商务区丽泽SOHO南塔37层</p>
                <p class="text4">Lize SOHO South tower 37th floor. Fengtai District.<br />Beijing</p>
            </div>
            <div :style="{'margin-top':`${windowheight.height*0.02}PX`}">
                <p class="text1">{{$t("contact.changsha")}}</p>
                <p class="text2">mail@qdtz888.com</p>
                <p class="text3">湖南省长沙市天心区裕南街街道湘江中路二段365号平安财富大厦8楼</p>
                <p class="text4">8F, Ping'an Fortune Building, Xiangjiang Middle Road,<br />Tianxin District, Changsha, Hunan</p>
            </div>
            <div :style="{'margin-top':`${windowheight.height*0.02}PX`}">
                <p class="text1">{{$t("contact.yuenan")}}</p>
                <p class="text2">+84-096 909 1010</p>
                <p class="text3">越南河内市巴亭区金马街360号大河商务中心</p>
                <p class="text4 text5">Daeha Business Center, No. 360, Jinma Street, Bating<br />District, Hanoi, Vietnam</p>
            </div>

        </div>
    </div>
    </div>
</template>

<style lang="less" scoped>
.main {
    width: 100%;
    background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/contact1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #FFFFFF;
}
.title{
    text-align: center;
    overflow: hidden;
    p{
        font-size: 28px;
        font-weight: bold;
        margin-top: 90PX;
    }
    .line{
        width:51px;
        height: 4PX;
        background-color: #49B98D;
        margin: 0 auto;
        margin-top: 20PX;
        border-radius: 2PX;
    }
   
}
.content{
    margin-top: 17px;
    margin-left: 62px;
    margin-right: 30px;
    .text1{
        font-size: 20px;
    }
    .text2{
        font-size: 16px;
        font-weight: bold;
        margin-top: 23px;
    }
    .text3{
        font-size: 12px;
        margin-top: 4px;
    }
    .text4{
        font-size: 8px;
    }
}
</style>
