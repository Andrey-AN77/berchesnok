<template>
  <div class="back"></div>

  <app-navbar></app-navbar>


  
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">

      <component :is="Component" />
    </transition>
  </router-view>





</template>

<script>
import AppNavbar from './components/AppNavbar.vue';


export default {
  components: { AppNavbar },
}
</script>

<style scoped>
.back {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #F5F6E8;
  z-index: -1;

}

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
