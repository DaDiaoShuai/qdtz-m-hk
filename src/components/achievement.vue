<script setup>
import { ref, reactive, nextTick } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
const windowheight = reactive({
    height: window.innerHeight
})
</script>

<template>
    <swiper style="width: 100%; color: #FFFFFF;" :style="{ height: `${windowheight.height}PX` }" :slides-per-view="1"
        direction="vertical">
        <swiper-slide class="section1 img">
            <div style="width:100%;height:100vh;background-color: rgba(0,0,0,0.35); overflow: hidden;">
                <div>
                    <p class="s1title1">{{$t("achieve.title")}}</p>
                </div>
                <div class="line"></div>
                <div class="s1box1">
                    <p class="s1text1">{{$t("achieve.content")}}</p>
                </div>
                <div class="demo" style="margin-top: 60PX;">
                    <div><img src="/new1.png" alt="" class="icon1"></div>
                    <div class="mobox">
                        <p class="text1">2.03<span class="text2">GW</span></p>

                        <p class="text3">{{$t("achieve.icon1")}}<span style="position: fixed;">{{$t("achieve.icon11")}}</span></p>
                    </div>
                </div>
                <div class="demo">
                    <div><img src="/new2.png" alt="" class="icon1"></div>
                    <div class="mobox">
                        <p class="text1">3.11<span class="text2">GW</span></p>
                        <p class="text3">{{$t("achieve.icon2")}}</p>
                    </div>
                </div>
                <div class="demo">
                    <div><img src="/new3.png" alt="" class="icon1"></div>
                    <div class="mobox">
                        <p class="text1">7.41<span class="text2">GW</span></p>
                        <p class="text3">{{$t("achieve.icon3")}}</p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide class="img" style="background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/pro1.gif);">
            <div style="width:100%;height:100vh;background-color: rgba(0,0,0,0.35); overflow: hidden;">

                <p class="title">{{$t("achieve.sec1title1")}}</p>
                <p class="text">{{$t("achieve.sec1text1")}}</p>
                <div class="whitebox">
                    <div>
                        <p class="whitenum">100<span>MW</span></p>
                        <p class="whitetext">{{$t("achieve.sec1icon1")}}</p>
                    </div>
                    <div class="verline"></div>
                    <div>
                        <div><img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/achieveIcon45.png" alt=""
                                class="contenticon"></div>
                        <p class="whitetext">{{$t("achieve.sec1icon2")}}</p>
                    </div>
                    <div class="verline"></div>

                    <div>
                        <div><img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/achieveIcon46.png" alt=""
                                class="contenticon"></div>
                        <p class="whitetext">{{$t("achieve.sec1icon3")}}</p>
                    </div>
                </div>
            </div>

        </swiper-slide>
        <swiper-slide class="img" style="background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/achievement1.png);">
            <div style="width:100%;height:100vh;background-color: rgba(0,0,0,0.35); overflow: hidden;">

                <p class="title">{{$t("achieve.sec2title1")}}</p>
                <p class="text">{{$t("achieve.sec2text1")}}</p>
                <div class="whitebox">
                    <div>
                        <p class="whitenum">10<span>MW</span></p>
                        <p class="whitetext">{{$t("achieve.sec1icon1")}}</p>
                    </div>
                    <div class="verline"></div>
                    <div>
                        <div><img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/achieveIcon45.png" alt=""
                                class="contenticon"></div>
                        <p class="whitetext">{{$t("achieve.sec1icon2")}}</p>
                    </div>
                    <div class="verline"></div>

                    <div>
                        <div><img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/achieveIcon46.png" alt=""
                                class="contenticon"></div>
                        <p class="whitetext">{{$t("achieve.sec1icon3")}}</p>
                    </div>
                </div>
            </div>

        </swiper-slide>
        <swiper-slide class="img" style="background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/pro3.gif);">
            <div style="width:100%;height:100vh;background-color: rgba(0,0,0,0.35); overflow: hidden;">

                <p class="title">{{$t("achieve.sec3title1")}}</p>
                <p class="text">{{$t("achieve.sec3text1")}}</p>
                <div class="whitebox">
                    <div>
                        <p class="whitenum">100<span>MW</span></p>
                        <p class="whitetext">{{$t("achieve.sec1icon1")}}</p>
                    </div>
                    <div class="verline"></div>
                    <div>
                        <div><img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/achieveIcon45.png" alt=""
                                class="contenticon"></div>
                        <p class="whitetext">{{$t("achieve.sec1icon2")}}</p>
                    </div>
                    <div class="verline"></div>

                    <div>
                        <div><img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/achieveIcon46.png" alt=""
                                class="contenticon"></div>
                        <p class="whitetext">{{$t("achieve.sec1icon3")}}</p>
                    </div>
                </div>
            </div>

        </swiper-slide>
        <swiper-slide class="img" style="background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/achievement3.png);">
            <div style="width:100%;height:100vh;background-color: rgba(0,0,0,0.35); overflow: hidden;">

                <p class="title">{{$t("achieve.sec4title1")}}</p>
                <p class="text">{{$t("achieve.sec4text1")}}</p>
                <div class="whitebox">
                    <div>
                        <p class="whitenum">100<span>MW</span></p>
                        <p class="whitetext">{{$t("achieve.sec1icon1")}}</p>
                    </div>
                    <div class="verline"></div>

                    <div>
                        <div><img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/achieveIcon45.png" alt=""
                                class="contenticon"></div>
                        <p class="whitetext">{{$t("achieve.sec1icon2")}}</p>
                    </div>
                    <div class="verline"></div>

                    <div>
                        <div><img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/achieveIcon46.png" alt=""
                                class="contenticon"></div>
                        <p class="whitetext">{{$t("achieve.sec1icon3")}}</p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide class="img" style="background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/pro5.gif);">
            <div style="width:100%;height:100vh;background-color: rgba(0,0,0,0.35); overflow: hidden;">

                <p class="title">{{$t("achieve.sec5title1")}}</p>
                <p class="text">{{$t("achieve.sec5text1")}}</p>
                <div class="whitebox">
                    <div>
                        <p class="whitenum">100<span>MW</span></p>
                        <p class="whitetext">{{$t("achieve.sec1icon1")}}</p>
                    </div>
                    <div class="verline"></div>
                    <div>
                        <div><img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/achieveIcon47.png?v=2" alt=""
                                class="contenticon"></div>
                        <p class="whitetext">{{$t("achieve.sec1icon4")}}</p>
                    </div>
                    <div class="verline"></div>

                    <div>
                        <div><img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/achieveIcon46.png" alt=""
                                class="contenticon"></div>
                        <p class="whitetext">{{$t("achieve.sec1icon3")}}</p>
                    </div>
                </div>
            </div>

        </swiper-slide>
        <swiper-slide class="img" style="background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/achievement4.png);">
            <div style="width:100%;height:100vh;background-color: rgba(0,0,0,0.35); overflow: hidden;">
                <p class="title">{{$t("achieve.sec6title1")}}</p>
                <p class="text">{{$t("achieve.sec6text1")}}</p>
                <div class="whitebox">
                    <div>
                        <p class="whitenum">200<span>MW</span></p>
                        <p class="whitetext">{{$t("achieve.sec1icon1")}}</p>
                    </div>
                    <div class="verline"></div>

                    <div>
                        <div><img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/achieveIcon47.png?v=2"
                                alt="" class="contenticon"></div>
                        <p class="whitetext">{{$t("achieve.sec1icon4")}}</p>
                    </div>
                    <div class="verline"></div>

                    <div>
                        <div><img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/achieveIcon46.png" alt=""
                                class="contenticon"></div>
                        <p class="whitetext">{{$t("achieve.sec1icon3")}}</p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide class="img" style="background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/achievement5.png);">
            <div style="width:100%;height:100vh;background-color: rgba(0,0,0,0.35); overflow: hidden;">
                <p class="title">{{$t("achieve.sec7title1")}}</p>
                <p class="text">
                    {{$t("achieve.sec7text1")}}
                </p>
                <div class="whitebox">
                    <div>
                        <p class="whitenum">100<span>MW</span></p>
                        <p class="whitetext">{{$t("achieve.sec1icon1")}}</p>
                    </div>
                    <div class="verline"></div>

                    <div>
                        <div><img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/achieveIcon47.png?v=2"
                                alt="" class="contenticon"></div>
                        <p class="whitetext">{{$t("achieve.sec1icon4")}}</p>
                    </div>
                    <div class="verline"></div>

                    <div>
                        <div><img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/achieveIcon46.png" alt=""
                                class="contenticon"></div>
                        <p class="whitetext">{{$t("achieve.sec1icon3")}}</p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide class="img" style="background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/achievement6.png);">
            <div style="width:100%;height:100vh;background-color: rgba(0,0,0,0.35); overflow: hidden;">
                <p class="title">{{$t("achieve.sec8title1")}}</p>
                <p class="text">{{$t("achieve.sec8text1")}}
                </p>
                <div class="whitebox">
                    <div>
                        <p class="whitenum">500<span>MW</span></p>
                        <p class="whitetext">{{$t("achieve.sec1icon1")}}</p>
                    </div>
                    <div class="verline"></div>

                    <div>
                        <div><img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/achieveIcon47.png?v=2"
                                alt="" class="contenticon"></div>
                        <p class="whitetext">{{$t("achieve.sec1icon4")}}</p>
                    </div>
                    <div class="verline"></div>

                    <div>
                        <div><img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/achieveIcon46.png" alt=""
                                class="contenticon"></div>
                        <p class="whitetext">{{$t("achieve.sec1icon3")}}</p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide class="img" style="background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/achievement7.jpg);">
            <div style="width:100%;height:100vh;background-color: rgba(0,0,0,0.35); overflow: hidden;">
                <p class="title">{{$t("achieve.sec9title1")}}</p>
                <p class="text">
                    {{$t("achieve.sec9text1")}}
                </p>
                <div class="whitebox">
                    <div>
                        <p class="whitenum">748<span>KW</span></p>
                        <p class="whitetext">{{$t("achieve.sec1icon1")}}</p>
                    </div>
                    <div class="verline"></div>

                    <div>
                        <div><img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/achieveIcon47.png?v=2"
                                alt="" class="contenticon"></div>
                        <p class="whitetext">{{$t("achieve.sec1icon4")}}</p>
                    </div>
                    <div class="verline"></div>

                    <div>
                        <div><img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/achieveIcon46.png" alt=""
                                class="contenticon"></div>
                        <p class="whitetext">{{$t("achieve.sec1icon3")}}</p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide class="img" style="background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/achievement8.jpg);">
            <div style="width:100%;height:100vh;background-color: rgba(0,0,0,0.35); overflow: hidden;">
                <p class="title">{{$t("achieve.sec10title1")}}</p>
                <p class="text">
                    {{$t("achieve.sec10text1")}}
                </p>
                <div class="whitebox">
                    <div>
                        <p class="whitenum">2.1<span>MW</span></p>
                        <p class="whitetext">{{$t("achieve.sec1icon1")}}</p>
                    </div>
                    <div class="verline"></div>

                    <div>
                        <div><img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/achieveIcon47.png?v=2"
                                alt="" class="contenticon"></div>
                        <p class="whitetext">{{$t("achieve.sec1icon4")}}</p>
                    </div>
                    <div class="verline"></div>

                    <div>
                        <div><img src="https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/image/achieveIcon46.png" alt=""
                                class="contenticon"></div>
                        <p class="whitetext">{{$t("achieve.sec1icon3")}}</p>
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
    background-image: url(https://qing-yuan-default.oss-cn-beijing.aliyuncs.com/mobimage/achievement1.png);
    text-align: center;

    .s1title1 {
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

    .s1box1 {
        padding-left: 32PX;
        padding-right: 32PX;

        .s1text1 {
            font-size: 14px;
            margin-top: 17PX;
        }

    }

    .demo {
        width: 100%;
        height: 10%;
        margin-top: 15PX;
        margin-left: 75PX;
        margin-right: 30PX;
        display: flex;
        justify-content: left;
        text-align: left;

        .icon {
            width: 42px;
            height: 56px;
        }

        .icon1 {
            width: 48px;
            text-align: left;
        }

        .mobox {
            position: relative;
            top: -8PX;
            left: 10PX;
        }

        .text1 {
            font-size: 30px;
            margin-left: 5px;
        }

        .text2 {
            font-size: 20px;
        }

        .text3 {
            font-size: 14px;
            margin-left: 5px;
            position: relative;
            top: -5PX;
        }
    }

}

.title {
    font-size: 28px;
    font-weight: bold;
    margin-top: 139PX;
    margin-left: 25px;
    margin-right: 48px;
}

.text {
    font-size: 12px;
    margin-top: 36PX;
    margin-left: 25px;
    margin-right: 48px;

}

.whitebox {
    width: 230px;
    height: 59px;
    background-color: #FFFFFF;
    margin-top: 32PX;
    margin-left: 25px;
    padding-left: 12px;
    padding-right: 12px;
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    text-align: center;

    .contenticon {
        height: 35px;
        margin-top: 5PX;
    }

    .whitenum {
        color: #434343;
        font-size: 34px;
        margin-top: 4PX;

        span {
            font-size: 14px;
        }
    }

    .whitetext {
        color: #434343;
        font-size: 10px;
        position: relative;
        top: -5PX;
    }
}

.verline {
    width: 1PX;
    height: 44px;
    background-color: #979797;
    border-radius: 2PX;
    margin-top: 8PX;
}
.mob{
    position: relative;
    left: 6PX;
}
</style>
