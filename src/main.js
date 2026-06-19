import { createApp } from 'vue'
import { createPinia } from 'pinia';

import router from './router'

import App from './App.vue'


import Toast, { POSITION } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import './assets/css/bootstrap.min.css'
import './style.css'

const pinia = createPinia();

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Toast,{position: POSITION.BOTTOM_RIGHT});
app.mount('#app')
