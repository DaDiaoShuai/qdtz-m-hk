<script setup>
import { ref, reactive, nextTick } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const windowheight = reactive({
    height: window.innerHeight
})
const titleflash1 = ref(t("home1.value1"))
const titleflash2 = ref(t("home1.value2"))
const titleflash3 = ref(t("home1.value3"))
const titleflash4 = ref(t("home1.value4"))
let i = 1
setInterval(() => {
  if (i % 3 == 1) {
    titleflash1.value = t("home2.value1")
    titleflash2.value = t("home2.value2")
    titleflash3.value = t("home2.value3")
    titleflash4.value = t("home2.value4")
  } else if (i % 3 == 2) {
    titleflash1.value = t("home3.value1")
    titleflash2.value = t("home3.value2")
    titleflash3.value = t("home3.value3")
    titleflash4.value = t("home3.value4")
  } else {
    titleflash1.value = t("home1.value1")
    titleflash2.value = t("home1.value2")
    titleflash3.value = t("home1.value3")
    titleflash4.value = t("home1.value4")
  };
  i++
}, 6000)
</script>

<template>
    <swiper style="width: 100%; color: #FFFFFF;" :style="{ height: `${windowheight.height}PX` }" :slides-per-view="1"
        direction="vertical">
        <swiper-slide class="main">
        <div style="width:100%;height:100vh;background-color: rgba(0,0,0,0.35); overflow: hidden;" >
        <div class="flash">
            <!-- <img  src="/44.gif"  style=" width: 100%; height: 100vh; " > -->
            <p class="title1 title2">{{ titleflash1 }}</p>
            <p class="title1">{{ titleflash2 }}</p>
            <p class="text1" style="margin-top: 5PX;">{{ titleflash3 }}</p>
            <p class="text1">{{ titleflash4 }}</p>
        </div>
        </div>
        </swiper-slide>
        <swiper-slide class="section1 img">
            <div style="width:100%;height:100vh;background-color: rgba(0,0,0,0.35); overflow: hidden;" >
            <div><p class="s1title1">{{$t("messages.business")}}</p></div>
            <div class="line"></div>
            <div class="s1box1"><p class="s1text1">{{$t("messages.businesstext")}}</p></div>
        </div>
        </swiper-slide>
        <swiper-slide class="img" style="background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/business2.png);">
            <div style="width:100%;height:100vh;background-color: rgba(0,0,0,0.35); overflow: hidden;" >
            <div>
                <p class="title" :style="{ 'margin-top': `${windowheight.height * 0.12}PX` }">{{$t("messages.investment")}}</p>
                <p class="con-text">{{$t("messages.investtext")}}</p>
            </div>
            <div>
                <div class="box1">
                    <div>
                        <img class="icon1" :style="{ 'margin-top': `${windowheight.height * 0.08}PX` }"
                            src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/mainIcon1.png">
                    </div>
                    <div style="padding-right: 29PX;">
                        <p class="text1 mob1" :style="{ 'margin-top': `${windowheight.height * 0.08}PX` }">{{$t("messages.wind")}}</p>
                        <p class="text2 mob2">
                            {{$t("messages.windtext")}}</p>
                    </div>
                </div>
                <div class="box1">
                    <div>
                        <img class="icon2" src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/mainIcon2.png">
                    </div>
                    <div style="padding-right: 29PX;">
                        <p class="text3 mob">{{$t("messages.photo")}}</p>
                        <p class="text2">{{$t("messages.phototext")}}</p>
                    </div>

                </div>
                <div class="box1">
                    <div>
                        <img class="icon2" src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/mainIcon3.png">
                    </div>
                    <div style="padding-right: 29PX;">
                        <p class="text3 mob">{{$t("messages.energy")}}</p>
                        <p class="text2">{{$t("messages.energytext")}}</p>
                    </div>
                </div>

            </div>
        </div>
        </swiper-slide>
        <swiper-slide class="img" style="background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/business3.png);">
            <div style="width:100%;height:100vh;background-color: rgba(0,0,0,0.35); overflow: hidden;" >
            <div  style="padding-right: 29PX;">
                <p class="title" :style="{ 'margin-top': `${windowheight.height * 0.12}PX` }">{{$t("messages.project")}}</p>
                <p class="con-text">{{$t("messages.projecttext")}}</p>
                <p class="con-explain">{{$t("messages.projectmain")}}</p>
            </div>
            <div>
                <div class="box1">
                    <div>
                        <img class="icon1" :style="{ 'margin-top': `${windowheight.height * 0.04}PX` }"
                            src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/mainIcon4.png">
                    </div>
                    <div style="padding-right: 29PX;">
                        <p class="text1 mob" :style="{ 'margin-top': `${windowheight.height * 0.045}PX` }">{{$t("messages.manage")}}</p>
                    </div>
                </div>
                <div class="box1">
                    <div>
                        <img class="icon2" src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/mainIcon5.png">
                    </div>
                    <div style="padding-right: 29PX;">
                        <p class="text3 mob" >{{$t("messages.general")}}</p>
                    </div>

                </div>
                <div class="box1">
                    <div>
                        <img class="icon2" src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/mainIcon6.png">
                    </div>
                    <div style="padding-right: 29PX;">
                        <p class="text3 mob">{{$t("messages.eng")}}</p>
                    </div>
                </div>
                <div class="box1">
                    <div>
                        <img class="icon2" src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/mainIcon7.png">
                    </div>
                    <div style="padding-right: 29PX;">
                        <p class="text3 mob">{{$t("messages.engs")}}</p>
                    </div>
                </div>

            </div>
        </div>
        </swiper-slide>
        <swiper-slide class="img" style="background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/business4.png);">
            <div style="width:100%;height:100vh;background-color: rgba(0,0,0,0.35); overflow: hidden;" >
            <div  style="padding-right: 29PX;">
                <p class="title" :style="{ 'margin-top': `${windowheight.height * 0.12}PX` }">{{$t("messages.asset")}}</p>
                <p class="con-text">{{$t("messages.assettext")}}</p>
                <p class="con-explain">{{$t("messages.assetmain")}}</p>
            </div>
            <div>
                <div class="box1">
                    <div>
                        <img class="icon1" :style="{ 'margin-top': `${windowheight.height * 0.04}PX` }"
                            src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/mainIcon8.png">
                    </div>
                    <div style="padding-right: 29PX;">
                        <p class="text1 mob" :style="{ 'margin-top': `${windowheight.height * 0.045}PX` }">{{$t("messages.fin")}}</p>
                    </div>
                </div>
                <div class="box1">
                    <div>
                        <img class="icon2" src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/mainIcon9.png">
                    </div>
                    <div style="padding-right: 29PX;">
                        <p class="text3 mob">{{$t("messages.pow")}}</p>
                    </div>

                </div>
                <div class="box1">
                    <div>
                        <img class="icon2" src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/mainIcon10.png">
                    </div>
                    <div style="padding-right: 29PX;">
                        <p class="text3 mob">{{$t("messages.sta")}}</p>
                    </div>
                </div>

            </div>
        </div>
        </swiper-slide>
        <swiper-slide class="img" style="background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/business5.png);">
            <div style="width:100%;height:100vh;background-color: rgba(0,0,0,0.35); overflow: hidden;" >
            <div  style="padding-right: 29PX;">
                <p class="title" :style="{ 'margin-top': `${windowheight.height * 0.12}PX` }">{{$t("messages.consulting")}}</p>
                <p class="con-text">{{$t("messages.flex")}}</p>
                <p class="con-explain">{{$t("messages.abandon")}}</p>
            </div>
            <div>
                <div class="box1">
                    <div>
                        <img class="icon1" :style="{ 'margin-top': `${windowheight.height * 0.04}PX` }"
                            src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/mainIcon11.png">
                    </div>
                    <div style="padding-right: 29PX;">
                        <p class="text1 mob" :style="{ 'margin-top': `${windowheight.height * 0.045}PX` }">{{$t("messages.conicon1")}}</p>
                    </div>
                </div>
                <div class="box1">
                    <div>
                        <img class="icon2" src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/mainIcon12.png">
                    </div>
                    <div style="padding-right: 29PX;">
                        <p class="text3 mob">{{$t("messages.conicon2")}}</p>
                    </div>

                </div>
                <div class="box1">
                    <div>
                        <img class="icon2" src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/mainIcon13.png">
                    </div>
                    <div style="padding-right: 29PX;">
                        <p class="text3 mob">{{$t("messages.conicon3")}}</p>
                    </div>
                </div>
                <div class="box1">
                    <div>
                        <img class="icon2" src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/mainIcon14.png">
                    </div>
                    <div >
                        <p class="text3 mob">{{$t("messages.conicon4")}}</p>
                    </div>
                    
                </div>
                <div class="box1">
                    <div>
                        <img class="icon2" src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/mainIcon15.png">
                    </div>
                    <div>
                        <p class="text3 mob">{{$t("messages.conicon5")}}</p>
                    </div>
                </div>

            </div>
        </div>
        </swiper-slide>
    </swiper>
</template>

<style lang="less" scoped>
.img {
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.section1 {
    background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/business1.png);
    text-align: center;
    .s1title1 {
        font-size: 28px;
        font-weight: bold;
        margin-top: 196PX;
    }
    .line {
        width: 51px;
        height: 4PX;
        background-color: #49B98D;
        margin: 0 auto;
        margin-top: 20PX;
        border-radius: 2PX;
    }
    .s1box1 {
        padding-left: 32PX;
        padding-right: 32PX;

        .s1text1 {
            font-size: 14px;
            margin-top: 17PX;
        }

    }
}
.title {
    font-size: 28px;
    font-weight: bold;
    margin-left: 24px;
}

.con-text {
    font-size: 20px;
    margin-top: 8PX;
    margin-left: 24px;
}
.con-explain{
    font-size: 14px;
    margin-top: 8PX;
    margin-left: 24px; 
}


.box1 {
    display: flex;
}

.text1 {
    font-size: 18px;
    font-weight: bold;
    margin-left: 8PX;
}

.text2 {
    font-size: 12px;
    margin-top: 10PX;
    margin-left: 8PX;
}

.text3 {
    font-size: 18px;
    font-weight: bold;
    margin-top: 35PX;
    margin-left: 8PX;
}

.icon1 {
    width: 40px;
    height: 40px;
    margin-left: 26PX;
}

.icon2 {
    width: 40px;
    height: 40px;
    margin-top: 30PX;
    margin-left: 26PX;
}
.mob{
    position:relative;
    top:1PX
}
.mob1{
    position:relative;
    top:5PX
}
.mob2{
    position:relative;
    top:3PX
}
.main {
  background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/44.gif);
  // background-position: center center;
  background-repeat: no-repeat;
  // background-attachment: fixed;
  background-size: 100% 100%;
  text-align: center;
  color: #FFFFFF;
}

.title1 {
  font-size: 20px;
  font-weight: bold;

}

.title2 {
  margin-top: 196PX;

}

.text1 {
  font-size: 10px;
}

@keyframes flash {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.flash {
  animation-name: flash;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
