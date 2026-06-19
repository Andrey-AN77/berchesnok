<template>
  <div class="container">
    <div class="content">
      
      <div class="forimg">
        <img src="../assets/image/ches6.jpg" alt="logo">
      </div>
      <div class="priv">Приветствуем Вас на страницах сайта КФХ Березниковский чеснок</div>
    </div>

    <div class="razr">Сайт находится в разработке</div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1280px;
  margin: 2rem auto;
  font-family: 'Comfortaa';
  text-align: center;
  font-weight: bold;
  text-shadow: 4px 4px 4px #aaa;
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 100%;



}
.content{
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
}

.forimg {
  width: 60%;
}

img {
  overflow: hidden;
  width: 100%;
}

div {
  font-size: 2rem;
}
.razr{
  margin-top: 20px;
  flex: 0 0 auto;
}

@media (max-width: 1000px){
  .content{
    flex-direction: column;
    justify-content: space-evenly;
  }
}
</style>