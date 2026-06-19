import { createWebHistory, createRouter } from "vue-router";
import {useOrderChes} from '../store/orderChes.js'
import Main from '../views/Main.vue'


const routes = [
  {
    path: "/",
    name: "Home",
    component: Main,
  },
  {
    path: "/pro-chesnok",
    name: "pro-chesnok",
    component: () => import('../views/ProChesnok.vue'),
  },
  {
    path: "/products",
    name: "products",
    component: () => import('../views/Product.vue'),
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import('../views/Contacts.vue'),
  },
  {
    path: "/login",
    name: "Login",
    component: ()=>import('../components/Login.vue'),
  },
  {
    path: "/_admin",
    name: "admin",
    component: () => import('../views/adminHome.vue'),
    beforeEnter:(to,from,next)=>{
      const orderStore = useOrderChes()
      if(!orderStore.getAuth){
        next('/login')
      }else{
        next()
      }
    }
  }


];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  history: createWebHistory(),
  routes,
});

export default router;
