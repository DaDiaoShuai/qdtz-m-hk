import { createApp } from 'vue'
import App from '../App.vue'
import { createI18n } from 'vue-i18n'
import en from './en'
import zhCN from './zh'
 
const app = createApp(App)
const i18n = createI18n({
    legacy: false, 
    locale: localStorage.getItem('lang') || "en", // 初始化显示中文
    messages: {en,zhCN} // 这里就是你有几种语言，对象里面就有几个
  })
  export default function (app) {
    app.use(i18n)
  }