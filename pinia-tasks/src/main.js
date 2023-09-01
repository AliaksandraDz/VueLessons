import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

//how to use a middleware, createPinia in this case:
createApp(App).use(createPinia()).mount('#app')
