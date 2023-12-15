import { defineStore } from 'pinia'
export const useStore = defineStore('main',{
    state: () => ({
        isshadow: false,//蒙版阴影
        rightshow:false,//右侧菜单
        svgshow:false,//箭头
    }),
    actions: {
        change(val) {
            console.log(val);
        }
    },
})