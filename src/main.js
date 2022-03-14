import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './myStyle.css'
import './assets/tailwind.css'
import ElementPlus from 'element-plus'


createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
