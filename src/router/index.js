import { createWebHistory, createRouter } from "vue-router";
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
