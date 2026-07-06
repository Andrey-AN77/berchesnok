<template>
  <div class="container">
    <img-popup path="/decl2025.jpg" v-if="isPopup" @close="onClose"></img-popup>
    <h2>PRO наш чеснок</h2>
    <div class="section">
      <p class="text">Чеснок - одна из самых популярных и востребованных приправ на свете: практически любое блюдо
        сопровождается использованием чеснока. В каждом доме едят чеснок как сырым, так и в блюдах. В чем же заключается
        такая популярность?</p>
    </div>

    <div class="section">
      <div class="forimg full">
        <ImgComparisonSlider>
          <!-- eslint-disable -->
          <img slot="first" style="width: 100%" src="../assets/image/ches3.jpg" />
          <img slot="second" style="width: 100%" src="../assets/image/strelka3.jpg" />
          <!-- eslint-enable -->
        </ImgComparisonSlider>
      </div>
      <div class="fortext">
        <p class="text">Чеснок - древнейшее культурное растение, которое возделывается со времен неолита. Главное
          преимущество использования чеснока в пищу заключается в его бактерицидном действии, убивая болезнетворные
          бактерии как в сыром виде, так и термически обработанном. </p>
        <p class="text">Луковицы чеснока содержат эфирные масла, гликозид аллин, витамины группы В и С, магний, кальций,
          фосфор, йод, хлор и множество других микроэлементов. Чеснок нормализует обмен веществ, понижает давление,
          помогает выведению холестерина</p>
      </div>

    </div>

    <!--     <div class="section">

      <div class="fortext">
        <p class="text">Сегодня существует около 300 разновидностей чеснока.</p>
        <p class="text"> Для выращивания на нашем хозяйстве были выбраны несколько сортов чеснока, таких как «ЛЮБАША»,
          «ДОБРЫНЯ», «БОГАТЫРЬ».</p>
      </div>
      <div class="forimg w-40">
        <img src="../assets/image/chess_160.jpg" />
      </div>


    </div> -->

    <!-- <h2>Преимущества сортового чеснока</h2> -->
    <div class="section">
      <ol>
        <li>
          <div class="div">
            <h4 class="h-text">Подтвержденное качество продукции.</h4>
            <div class="flex">
              <div class="fordecl" @click="popupOpen">
                <img src="/decl2025.jpg" alt="">
                <div class="forzoom">
                  <img class="zoom" src="/zoom_in.png" alt="">
                </div>
              </div>

              <p class="text">Наш товарный чеснок соответствует стандартам ГОСТ 33562-2015, что
                подтверждается декларацией соответствия. Каждая партия проходит контроль
                качества в аккредитованных лабораториях.</p>
            </div>


          </div>

        </li>
        <li>
          <div class="div">
            <h4 class="h-text">Высокие вкусовые и качественные характеристики.</h4>
            <p class="text">Наш чеснок обладает кремово-белым окрасом мякоти, острым и полуострым
              вкусом, насыщенным чесночным ароматом, высокой лёжкостью - до 11 месяцев.</p>

          </div>
        </li>
        <li>
          <div class="div">
            <h4 class="h-text">Отечественный посевной материал.</h4>
            <p class="text">Мы работаем только с надежными проверенными поставщиками семенного
              чеснока.</p>

          </div>
        </li>

        <li>
          <div class="div">
            <h4 class="h-text">Хранение под контролем.</h4>
            <p class="text">При хранении чеснока нами создаются и поддерживаются оптимальные
              рекомендованные параметры температуры, влажности и воздухообмена для
              сохранения свежести продукта.</p>

          </div>
        </li>
        <li>
          <div class="div">
            <h4 class="h-text">Безопасный продукт.</h4>
            <p class="text">Мы применяем современные технологии выращивания чеснока с разумным
              использованием средств защиты растений, разрешенных к применению на
              территории Российской Федерации.</p>

          </div>
        </li>
      </ol>
    </div>
    <h4>2026&copy;</h4>
    <br>
  </div>

</template>

<script setup>
  import { ref } from 'vue'

  import { ImgComparisonSlider } from '@img-comparison-slider/vue';
  import imgPopup from '../components/imgPopup.vue';

  import BodyScroll from 'body-scroll-freezer'
  BodyScroll.init()

  const isPopup = ref(false)

  const popupOpen = () => {
    isPopup.value = true
    BodyScroll.freeze()

  }

  const onClose = () => {
    isPopup.value = false
    BodyScroll.unfreeze()

  }

</script>

<style scoped>
  .full {
    width: 120%;
  }

  .h-text {
    color: #381657;
    font-weight: bold;
  }

  .fordecl {
    width: 50%;
    display: flex;
    flex-direction: row;
    position: relative;
    cursor: pointer;
    
  }

  .forzoom {
    position: absolute;
    width: 20%;
    bottom: 20%;
    left: 40%;
  }

  .zoom {
    opacity: 0.4;
  }

  .flex {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  }

  .w-40 {
    width: 40%;
  }

  li::marker {
    font-size: 1.2rem;
  }

  li>p {
    text-align: start;
    text-indent: unset;

  }

  @media (max-width: 765px) {
    .w-40 {
      width: 70%;
    }
    .flex{
      flex-direction: column;
    }

    li>p {
      font-size: 16px;
    }
  }
</style>