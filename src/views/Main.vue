<template>
  <div class="container">

    <h2>Приветствуем Вас на сайте КФХ Березниковский чеснок</h2>
    <div class="section">

      <div class="forimg">
        <img src="/public/DSC03874-1.jpg" alt="ches6">
      </div>
      <div class="fortext">
        <p class="text">Березниковский чеснок - крестьянско-фермерское хозяйство (КФХ), расположенное в Пермском крае в районе
деревни Лубянка на берегу реки Нечаихи, в 40 км от г . Березники. </p>
        <p class="text">Наше хозяйство занимается производством отечественного озимого чеснока с использованием интенсивных
технологий. Главный приоритет нашего фермерского хозяйства – качество продукции.
В 2022 году мы начинали с площади в 1 гектар, сейчас в собственности компании 50 гектаров земли для
посева.</p>
        <p class="text">Наш продукт – Фермерский товарный чеснок высшего, первого, второго сорта по ГОСТу.</p>
        <p class="text">В 2025 ИП Афанасьев Н.В. стал участником проекта 
          <a class="pl-10" href="https://pokupaypermskoe.ru/company/ip-afanasev-nv1" target="_blanc">"Покупай Пермское".</a></p>
      </div>

    </div>

    <h2>Почему чеснок?</h2>
    <div class="section">

      <div class="fortext">
        <p class="text">80% чеснока, поступающего на прилавки магазинов России, поставляется из Китая.</p>
        <p class="text">Низкое качество, использование запрещенных химических веществ для ускорения роста, увеличения
сроков годности и сохранения товарного вида , загрязненная почва и вода - именно эти факторы
вызывают сомнения в безопасности импортного чеснока. </p>
        <p class="text">Мы выращиваем качественный, экологически чистый продукт. </p>
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
        <p class="text">В нашем хозяйстве используется система дождевания, так как данная система полива является
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
    <h4>2026&copy;</h4>
    <br>
  </div>

</template>

<script setup>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

/* export default {
  components: {
    ImgComparisonSlider
  }

} */

</script>

<style scoped>
.forimg{
  width: 100%;
}
.pl-10{
  padding: 10px;
  color: #e42913;
}
@media (max-width: 550px) {
  .order {
    order: -1
  }
}
</style>