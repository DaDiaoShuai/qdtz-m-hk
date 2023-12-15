import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import i18n from './lang/index'
const store = createPinia()
if(!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)){
    window.location.href= 'http://www.qdtz888.com/'; 
}
createApp(App).use(store).use(i18n).use(router).mount('#app')
