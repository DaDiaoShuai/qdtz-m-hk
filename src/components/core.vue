<script setup>
import { ref, reactive, nextTick } from 'vue';
const windowheight = reactive({
    height: window.innerHeight
})

</script>

<template>
    <div>
        <div class="main" :style="{ height: `${windowheight.height}PX` }">
            <div style="width:100%;height:100vh;background-color: rgba(0,0,0,0.35); overflow: hidden;" >
            <p class="title">{{$t("core.comp")}}</p>
            <div class="line"></div>
            <p class="text">{{$t("core.as")}}</p>
        </div>
        </div>
        <div class="content">
            <p class="contitle">{{$t("core.fle")}}</p>
            <div style="display: flex;margin-top: 53PX;">
                <div><img src="/corelcon1.png" alt="" class="conicon"></div>
                <div style="margin-left: 15px;" class="mob">
                    <p class="icontitle">{{$t("core.dev")}}</p>
                    <p class="icontext">{{$t("core.es")}}</p>
                </div>
            </div>
            <div style="display: flex;margin-top: 32PX;">
                <div><img src="/corelcon2.png" alt="" class="conicon leaf"></div>
                <div style="margin-left: 15px;" class="mob">
                    <p class="icontitle">{{$t("core.pro")}}</p>
                    <p class="icontext">{{$t("core.ba")}}</p>
                </div>
            </div>
            <div style="display: flex;margin-top: 32PX;">
                <div><img src="/corelcon3.png" alt="" class="conicon"></div>
                <div style="margin-left: 15px;" class="mob">
                    <p class="icontitle">{{$t("core.jo")}}</p>
                    <p class="icontext">{{$t("core.in")}}</p>
                </div>
            </div>
            <div style="display: flex;margin-top: 32PX;">
                <div><img src="/corelcon4.png" alt="" class="conicon"></div>
                <div style="margin-left: 15px;" class="mob">
                    <p class="icontitle">{{$t("core.op")}}</p>
                    <p class="icontext">{{$t("core.th")}}</p>
                </div>
            </div>
        </div>
        <div class="content">
            <p class="contitle">{{$t("core.abu")}}</p>
            <div style="display: flex;margin-top: 53PX;">
                <div><img src="/corelcon5.png" alt="" class="conicon"></div>
                <div style="margin-left: 15px;" class="mob">
                    <p class="icontitle">{{$t("core.proje")}}</p>
                    <p class="icontext">{{$t("core.res")}}</p>
                </div>
            </div>
            <div style="display: flex;margin-top: 32PX;">
                <div><img src="/corelcon6.png" alt="" class="conicon"></div>
                <div style="margin-left: 15px;" class="mob">
                    <p class="icontitle">{{$t("core.coo")}}</p>
                    <p class="icontext">{{$t("core.dep")}}</p>
                </div>
            </div>
            <div style="display: flex;margin-top: 32PX;">
                <div><img src="/corelcon7.png" alt="" class="conicon"></div>
                <div style="margin-left: 15px;" class="mob">
                    <p class="icontitle">{{$t("core.fin")}}</p>
                    <p class="icontext">{{$t("core.wor")}}</p>
                </div>
            </div>
            <div style="display: flex;margin-top: 32PX;">
                <div><img src="/corelcon8.png" alt="" class="conicon"></div>
                <div style="margin-left: 15px;" class="mob">
                    <p class="icontitle">{{$t("core.ind")}}</p>
                    <p class="icontext">{{$t("core.coop")}}</p>
                </div>
            </div>
        </div>
        <div class="content">
            <p class="contitle">{{$t("core.profe")}}</p>
            <div style="display: flex;margin-top: 53PX;">
                <div><img src="/corelcon9.png" alt="" class="conicon"></div>
                <div style="margin-left: 15px;" class="mob">
                    <p class="icontitle">{{$t("core.deve")}}</p>
                    <p class="icontext">{{$t("core.mor")}}</p>
                </div>
            </div>
            <div style="display: flex;margin-top: 32PX;">
                <div><img src="/corelcon10.png" alt="" class="conicon"></div>
                <div style="margin-left: 15px;" class="mob">
                    <p class="icontitle">{{$t("core.engin")}}</p>
                    <p class="icontext">{{$t("core.thet")}}</p>
                </div>
            </div>
            <div style="display: flex;margin-top: 32PX;">
                <div><img src="/corelcon11.png" alt="" class="conicon"></div>
                <div style="margin-left: 15px;" class="mob">
                    <p class="icontitle">{{$t("core.risk")}}</p>
                    <p class="icontext">{{$t("core.ri")}}</p>
                </div>
            </div>
            <div style="display: flex;margin-top: 32PX;">
                <div><img src="/corelcon12.png" alt="" class="conicon"></div>
                <div style="margin-left: 15px;" class="mob">
                    <p class="icontitle">{{$t("core.fina")}}</p>
                    <p class="icontext">{{$t("core.them")}}</p>
                </div>
            </div>
        </div>
        <div style="height: 60PX;"></div>
    </div>
</template>

<style lang="less" scoped>
.main {
    background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/core1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    color: #FFFFFF;
    text-align: center;
}

.title {
    font-size: 28px;
    font-weight: bold;
    margin-top: 196PX;
    margin-left: 30px;
    margin-right: 30px;
}

.line {
    width: 51px;
    height: 4PX;
    background-color: #49B98D;
    margin: 0 auto;
    margin-top: 20PX;
    border-radius: 2PX;
}
.text {
    font-size: 14px;
    margin-top: 17PX;
    margin-left: 30px;
    margin-right: 30px;
    }
.content{
    padding-left: 25px;
    padding-right: 29px;
    .contitle{
        font-size: 28px;
        font-weight: bold;
        margin-top: 70PX;
    }
    .conicon{
        width: 41px;
    }
    .icontitle{
        font-size: 18px;
        font-weight: bold;
    }
    .icontext{
        font-size: 12px;
        margin-top: 2PX;
    }
}
.leaf{
    height: 51px;
}
.mob{
    position: relative;
    top: -4PX;
}
</style>
