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
  <swiper style="width: 100%;" :style="{ height: `${windowheight.height}PX` }" :slides-per-view="1" direction="vertical"
    class="box">
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
  </swiper>
</template>

<style lang="less" scoped>
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
}</style>
