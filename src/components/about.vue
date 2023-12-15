<script setup>
import { ref, reactive, nextTick } from 'vue';
const windowheight = reactive({
    height: window.innerHeight
})

</script>

<template>
    <div>
        <div class="main" >
            <div style="width:100%;height:100%;background-color: rgba(0,0,0,0.35); overflow: hidden; padding-bottom: 200PX;" >
            <p class="title">{{$t("about.title")}}</p>
            <div class="line"></div>
            <p class="introduce">{{$t("about.content1")}}</p>
            <p class="introduce">
                {{$t("about.content2")}}
            </p>
            <p class="introduce">
                {{$t("about.content3")}}</p>
        </div>
    </div>
        <div class="content">
            <p class="con-title">{{$t("about.system")}}</p>
            <p class="con-introduce">
                {{$t("about.syscontent1")}}
            </p>
            <p class="con-introduce">
                {{$t("about.syscontent2")}}
            </p>
            <p class="con-introduce">
                {{$t("about.syscontent3")}}
            </p>
            <p class="con-introduce">{{$t("about.syscontent4")}}</p>
        </div>
        <div class="imgbox">
            <img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/about2.png" alt="" class="img">
        </div>
        <div class="shadowline"></div>
        <div class="iconcontent">
            <div style="display: flex;">
                <div class="new"><img src="/abouticon1.png" class="icon" alt=""></div>
                <div style="margin-left: 12px;">
                    <span class="icontitle">企业使命</span>&nbsp; 
                    <span class="icontext1">BUSINESS MISSION</span><br />
                    <span class="icontext2">{{$t("about.text1")}}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  </span>
                </div>
            </div>
            <div style="display: flex;margin-top: 40px;">
                <div class="new"><img src="/abouticon2.png" class="icon1" alt=""></div>
                <div style="margin-left: 12px;">
                    <span class="icontitle">企业愿景</span>&nbsp; 
                    <span class="icontext1">BUSINESS VISION</span><br />
                    <span class="icontext2">{{$t("about.text2")}}</span>
                </div>
            </div>
            <div style="display: flex; margin-top: 40px;">
                <div class="new"><img src="/abouticon3.png" class="icon1" alt=""></div>
                <div style="margin-left: 12px;">
                    <span class="icontitle">企业价值观</span>&nbsp; 
                    <span class="icontext1">ENTERPRISE VALUES</span><br />
                    <span class="icontext2">{{$t("about.text3")}}</span>
                </div>
            </div>
        </div>
        <div class="bottomimg"   >
            <div style="width:100%;height:100%;background-color: rgba(0,0,0,0.35); overflow: hidden;" >
            <p class="lasttitle">{{$t("about.cor")}}</p>
            <div class="inline">

            
            <p class="text1">{{$t("about.cortitle1")}}</p>
            <p class="text2">{{$t("about.cortext1")}}</p>
            </div>
            <div class="inline">
            <p class="text3">{{$t("about.cortitle2")}}</p>
            <p class="text2">{{$t("about.cortext2")}}</p>
        </div>
        <div class="inline">
            <p class="text3">{{$t("about.cortitle3")}}</p>
            <p class="text2">{{$t("about.cortext3")}}</p>
        </div>
        <div class="inline">
            <p class="text3">{{$t("about.cortitle4")}}</p>
            <p class="text2">
                {{$t("about.cortext4")}}</p>
            </div>
            </div>
    </div>
    </div>
</template>

<style lang="less" scoped>
.main {
    background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/about1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    text-align: center;
    color: #FFFFFF;
    // padding-left: 30px;
    // padding-right: 30px;

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

    .introduce {
        font-size: 14px;
        margin-top: 17PX;
        margin-left: 30px;
        margin-right: 30px;

    }
}

.content {
    margin-top: 63PX;
    padding-left: 25px;
    padding-right: 25px;

    .con-title {
        font-size: 28px;
        font-weight: bold;
    }

    .con-introduce {
        font-size: 12px;
        margin-top: 31PX;
    }
}

.imgbox {
    margin-top: 47PX;
    padding-left: 39px;
    padding-right: 66px;

    .img {
        width: 100%;
    }
}

.shadowline {
    margin: 0 auto;
    margin-top: 66PX;
    width: 85%;
    height: 1px;
    border-bottom: black 1px dashed;
}

.bottomimg {
    background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/about3.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #FFFFFF;
    margin-top: 60PX;
    overflow: hidden;
    padding-bottom: 60PX;
    .inline{
        margin-top: 30PX;
        margin-left: 10px;
        margin-right: 10px;
        padding-bottom: 15PX;
        backdrop-filter: blur(10px);
        background: rgba(216, 216, 216, 0.2);
        overflow: hidden;
    }
    .lasttitle {
        font-size: 28px;
        font-weight: bold;
        margin-top: 90PX;
        margin-left: 25px;
        margin-right: 25px;
    }

    .text1 {
        font-size: 18px;
        margin-top: 5PX;
        margin-left: 15px;
        margin-right: 15px;
    }

    .text2 {
        font-size: 12px;
        margin-top: 5PX;
        margin-left: 15px;
        margin-right: 15px;
    }

    .text3 {
        font-size: 18px;
        margin-top: 15PX;
        margin-left: 15px;
        margin-right: 15px;
    }
}

.iconcontent {
    margin-top: 40PX;
    padding-left: 26px;
    padding-right: 26px;
    
    .icon {
        width: 44px;
        height: 50px;  

    };
    .icon1{
        width: 44px;
        // height: 54px;  
    }
    .icontitle {
        font-size: 18px;
        font-weight: bold;
    }
    .icontext1{
        font-size: 9px;
        font-weight: 400;
    }
    .icontext2{
        font-size: 12px;
    }
}
.new{
    width: 50px;
    height: 50px;
}
</style>
