<template>
  <div class="container">

    <h2>Приветствуем Вас на сайте КФХ Березниковский чеснок</h2>
    <div class="section">

      <div class="forimg">
        <img src="../assets/image/ches9.png" alt="ches6">
      </div>
      <div class="fortext">
        <p class="text">Березниковский чеснок - крестьянско-фермерское хозяйство (КФХ), расположенное в Пермском крае, в
          40 км от г.Березники. </p>
        <p class="text">Наше хозяйство занимается производством отечественного озимого чеснока с использованием
          интенсивных технологий.</p>
        <p class="text">Главный приоритет нашего фермерского хозяйства – качество продукции.</p>
      </div>

    </div>

    <h2>Почему чеснок?</h2>
    <div class="section">

      <div class="fortext">
        <p class="text">80% чеснока, поступающего на прилавки магазинов России, произрастает в Китае.</p>
        <p class="text">Низкое качество, использование запрещенных химических веществ для ускорения роста, загрязненная
          почва и вода - и именно эти проблемы мы решаем для покупателя. </p>
        <p class="text">Целью нашего фермерского хозяйства является производство отечественного, качественного,
          экологически чистого продукта. </p>
      </div>

      <div class="forimg order">
        <img src="../assets/image/ches11.png" alt="ches11">

      </div>

    </div>

    <h2>Как мы выращиваем?</h2>
    <div class="section">
      <div class="forimg">
        <ImgComparisonSlider>
          <!-- eslint-disable -->
          <img slot="first" style="width: 100%" src="../assets/image/111.jpg" />
          <img slot="second" style="width: 100%" src="../assets/image/485.jpg" />
          <!-- eslint-enable -->
        </ImgComparisonSlider>
      </div>
      <div class="fortext">
        <p class="text">Мы выращиваем чеснок из сортового посадочного материала, имеющего необходимый сертификат
          соответствия, на собственной земле! </p>

      </div>
    </div>



    <div class="section">

      <div class="fortext">
        <p class="text">Чеснок заслуженно называют природным антибиотиком, противогрибковым средством, народным лекарем.
        </p>
        <p class="text">На нашем хозяйстве используется система дождевания, так как данная система полива является
          наиболее эффективной для выращивания чеснока.</p>

      </div>

      <div class="forimg">
        <ImgComparisonSlider>
          <!-- eslint-disable -->
          <img slot="first" style="width: 100%" src="../assets/image/ches925.jpg" />
          <img slot="second" style="width: 100%" src="../assets/image/ches994.jpg" />
          <!-- eslint-enable -->
        </ImgComparisonSlider>

      </div>

    </div>
    <h4>2025&copy;</h4>
    <br>
  </div>

</template>

<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

export default {
  components: {
    ImgComparisonSlider
  }

}

</script>

<style scoped>
@media (max-width: 550px) {
  .order {
    order: -1
  }
}
</style>