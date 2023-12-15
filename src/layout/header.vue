<script setup>
import { ref, reactive, nextTick } from 'vue';
import {useStore} from '../store'
import { useI18n } from "vue-i18n";
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore()
const { locale } = useI18n();
// localStorage.setItem("lang", 'zhCN');
const language = (val)=>{
    // router.go(0)
    locale.value = val;
    localStorage.setItem("lang", val);
    i18e.value=!i18e.value;
}
const windowheight = reactive({
  height:window.innerHeight
})
const i18e = ref(localStorage.getItem("lang")=='zhCN')
console.log(windowheight.height);
const isshow = () => {
    store.rightshow = true
    store.isshadow=true
}//右侧此单显示
const ishidden = () => {
    store.svgshow = false
    store.isshadow=false
    nextTick(() => {
        store.rightshow = false
    })
}//右侧菜单隐藏
const after = () => {
    store.svgshow = true
}//箭头最后出现

const home = ()=>{
    ishidden()
    router.push('/')
}
const business = ()=>{
    ishidden()
    router.push('/business')
}
const core = ()=>{
    ishidden()
    router.push('/core')
}
const achievement = ()=>{
    ishidden()
    router.push('/achievement')
}
const partner = ()=>{
    ishidden()
    router.push('/partner')
}
const about = ()=>{
    ishidden()
    router.push('/about')
}
const contact = ()=>{
    ishidden()
    router.push('/contact')
}
</script>

<template>
    <Transition name="fade" @after-enter="after">
        <div class="rightsec" v-if="store.rightshow" >
            <svg v-if="store.svgshow" @click="ishidden" t="1690967429424" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="1544"
                data-spm-anchor-id="a313x.collections_detail.0.i0.6d063a81ouVacO" width="15" height="15">
                <path d="M797.2352 512L399.0016 910.2336l-54.3232-54.2976L688.64 512 344.6784 168.064l54.3232-54.2976z"
                    p-id="1545"></path>
            </svg>
            <div class="menu" :style="{'margin-top':`${windowheight.height*0.1}PX`}">
                <ul >
                    <li><p @click="home" style="font-size: 18px;">{{$t("messages.home")}}</p></li>
                    <li><p @click="business" style="font-size: 18px;">{{$t("messages.main")}}</p></li>
                    <li><p @click="core" style="font-size: 18px;">{{$t("messages.core")}}</p></li>
                    <li><p @click="achievement" style="font-size: 18px;">{{$t("messages.dev")}}</p></li>
                    <li><p @click="partner" style="font-size: 18px;">{{$t("messages.coop")}}</p></li>
                    <li><p @click="about" style="font-size: 18px;">{{$t("messages.about")}}</p></li> 
                    <li><p @click="contact" style="font-size: 18px;">{{$t("messages.con")}}</p></li> 
                </ul>
            <div class="line"></div>
            <!-- <p class="text1"  @click="contact" >{{$t("messages.con")}}</p> -->
            <p class="text2">mail@qdtz888.com</p>
            <p class="text3">北京丰台区丽泽商务区丽泽SOHO南塔37层</p>
            <p class="text4">Lize SOHO South tower 37th floor.</p>
            <p class="text4">Fengtai District. Beijing</p>
            <p class="text5"><span>{{$t("logo.message1")}}</span><br/><span>{{$t("logo.message2")}}</span></p>
            </div>
            
        </div>
    </Transition>
    <div class="header" :class={shadow:store.isshadow} >
        <img src="/logo.png" alt=""  @click="home">
        <img src="/option.png" alt="" @click="isshow">
        <img  v-if="!i18e" src="/en.png" alt=""  @click="language('en')">
        <img  v-if="i18e" src="/ch.png" alt="" @click="language('zhCN')">
        
    </div>
</template>
<style lang="less" scoped>
.rightsec {
    width: 322px;
    height: 100vh;
    background-color: #FFFFFF;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 11;
    .icon {
        width: 30px;
        height: 30px;
        float: right;
        margin-top: 17PX;
        margin-right: 8PX;
    }
}
.header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.1);
    :nth-child(1) {
        width: 99px;
        height: 38px;
        margin-top: 10PX;
        // margin-bottom: 20PX;
        margin-left: 10PX;
    }
    :nth-child(2) {
        width: 18px;
        height: 16px;
        position: absolute;
        top: 22PX;
        right: 17PX;
    }
    :nth-child(3) {
        width: 24px;
        height: 24px;
        position: absolute;
        top: 18PX;
        right: 50PX;
    }
    :nth-child(4) {
        width: 24px;
        height: 24px;
        position: absolute;
        top: 18PX;
        right: 50PX;
    }
}
.menu{
   margin-left: 28px;
   white-space:nowrap;
   font-size: 18px;
   li{
    list-style-type:none;
    box-sizing: border-box;
    margin-top: 30PX;
   }
   .line{
    margin-top: 39PX;
    width: 85%;
    height: 1px;
    border-bottom: black 1px dashed;
   }
   p{
    font-size: 16px;
    font-family: MicrosoftYaHei;
   }
   .text1{
    margin-top: 24PX;
   }
   .text2{
    margin-top: 16PX;
   }
   .text3{
    margin-top: 2PX;
    font-size: 13px;
   }
   .text4{
    font-size: 9px;
   }
   .text5{
    font-size: 10px;
    margin-top: 10px;
   }   
}

.fade-enter-from {
    width: 0;
}
.fade-enter-active {
    transition: all 0.5s ease;
}
.fade-leave-to {
    width: 0;
}

.fade-leave-active {
    transition: all 0.5s ease;
}</style>
