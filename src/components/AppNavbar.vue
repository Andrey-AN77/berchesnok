<template>
  <div class="navbar">
    <div class="logo">

      <img src="../assets/image/logo.png" alt="ch-logo">

    </div>
    <div class="nav-menu">
      <ul>
        <router-link to="/" active-class="active" class="nav-menu-item">Главная</router-link>
        <router-link to="/pro-chesnok" active-class="active" class="nav-menu-item">PRO&nbsp;Чеснок</router-link>
        <router-link to="/products" active-class="active" class="nav-menu-item">Продукция</router-link>

        <router-link to="/contacts" active-class="active" class="nav-menu-item">Контакты</router-link>
        <!--router-link to="/_admin" active-class="active" class="nav-menu-item">&Gt;</router-link-->
      </ul>

    </div>
    <div class="menu-xs-icon" @click="visible = !visible">
      <img src="../assets/image/icon.png" alt="icon">
    </div>
    <div class="nav-menu-xs" v-if="visible">
      <ul class="menu-xs" @click="visible = false">
        <router-link to="/" active-class="active" class="nav-menu-item">Главная</router-link>
        <router-link to="/pro-chesnok" active-class="active" class="nav-menu-item">PRO&nbsp;Чеснок</router-link>
        <router-link to="/products" active-class="active" class="nav-menu-item">Продукция</router-link>

        <router-link to="/contacts" active-class="active" class="nav-menu-item">Контакты</router-link>
      </ul>

    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  }

}
</script>

<style scoped>
.navbar {
  font-family: 'Comfortaa';
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(176, 167, 138);
  padding: 1.5rem 0;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  height: 100px;
  z-index: 10;
  flex-wrap: nowrap;
}



.logo {
  color: #3B5C3D;
  text-shadow: #fff 2px 0px 2px, #fff 0px 2px 2px, #fff 0px -2px 2px, #fff -2px 0px;
  font-weight: bold;
  margin-left: 30px;
  font-size: 3rem;
  position: relative;
  width: 8%;
  border-radius: 11%;
  overflow: hidden;
}

.for-ch {
  position: absolute;
  width: 55px;
  height: 12px;
  bottom: 39px;
  left: 22%;
  z-index: -1;
}

.nav-menu>ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
}

.menu-xs-icon {
  display: none;
  background-color: #F5F6E8;
  margin-right: 15px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;

}

.nav-menu-xs {
  position: fixed;
  width: 250px;
  background-color: rgb(176, 167, 138);
  right: 0;
  top: 118px;
  display: none;
  border-radius: 10px;

}

.menu-xs {
  display: flex;
  flex-direction: column;
}


.nav-menu-item {
  font-size: 1.5rem;
  margin: 0 10px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;

}

.nav-menu-item:hover:not(.active) {
  text-shadow: #3B5C3D 2px 0px 2px, #3B5C3D 0px 2px 2px, #3B5C3D 0px -2px 2px, #3B5C3D -2px 0px;
}

.active {
  font-size: 1.7rem;
  color: #3B5C3D;
  text-shadow: #fff 2px 0px 2px, #fff 0px 2px 2px, #fff 0px -2px 2px, #fff -2px 0px;
}

img {
  width: 100%;
}

@media (max-width: 1000px) {
  .nav-menu {
    display: none;
  }

  .nav-menu-xs,
  .menu-xs-icon {
    display: block;

  }
}

@media (max-width: 550px) {
  .navbar {
    padding: 0.5rem 0;
    height: 70px;
  }

  .nav-menu-xs {
    top: 66px;
  }

  .logo {
    font-size: 2rem;
    margin-left: 20px;
    width: 14%;
  }

  .for-ch {
    width: 47px;
    bottom: 9px;
    left: 17%
  }

  .menu-xs-icon {
    margin-right: 10px;
    width: 40px;
    height: 40px;
    padding: 0;
  }
}
</style>
