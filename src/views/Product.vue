<template>
  
  <div class="container">
    <img-popup v-if="isPopup" :path="curentPath" @close="onClose"/>
    
    <h1 class="center">Урожай 2025</h1>
    <div class="section">
      <p class="text lg">Дорогие друзья предлагаем Вам высококачественный чеснок урожая 2025 года.</p>

    </div>
    <div class="section">
      <ol>
        <li>
          <p class="text lg">Чеснок свежий сухой, ВЫСШИЙ СОРТ, калиброванный в размер 50-60 мм.</p>
          <p class="text sm">Луковицы чеснока правильной формы, надлежащим образом очищены. У сухого чеснока корни
            должны быть подрезаны близко к основанию луковицы. Допускаются незначительные поверхностные дефекты, при
            условии, что они не влияют на общий внешний вид, качество, сохранность и товарный вид продукта в упаковке.
          </p>
          <div class="flex">
            <div class="forimg" v-for="path, i in img5" :key="i" @click="onPopup(path)" >
              <img :src="`/${path}`" :alt="path">  
            </div>

          </div>

          <p class="price">Стоимость <span class="lg">350&#x20bd;</span> за 1 кг.</p>
        </li>
        <li>
          <p class="text lg">Чеснок свежий сухой, ВЫСШИЙ СОРТ, калиброванный в размер 40-50 мм.</p>
          <p class="text sm">Луковицы чеснока правильной формы, надлежащим образом очищены. У сухого чеснока корни
            должны быть подрезаны близко к основанию луковицы. Допускаются незначительные поверхностные дефекты, при
            условии, что они не влияют на общий внешний вид, качество, сохранность и товарный вид продукта в упаковке.
          </p>
                    <div class="flex">
            <div class="forimg" v-for="path, i in img4" :key="i" @click="onPopup(path)" >
              <img :src="`/${path}`" :alt="path">  
            </div>

          </div>
          <p class="price">Стоимость <span class="lg">300&#x20bd;</span> за 1 кг.</p>
        </li>
        <li>
          <p class="text lg">Чеснок свежий сухой, ПЕРВЫЙ СОРТ, калиброванный в размер 30-40 мм. </p>
          <p class="text sm">Достаточно правильной формы. Допускаются небольшие разрывы покровной чешуи луковицы при
            условии, что они не влияют на общий внешний вид, качество, сохранность и товарный вид продукта в упаковке.
          </p>
                    <div class="flex">
            <div class="forimg" v-for="path, i in img3" :key="i" @click="onPopup(path)" >
              <img :src="`/${path}`" :alt="path">  
            </div>

          </div>
          <p class="price">Стоимость <span class="lg">250&#x20bd;</span> за 1 кг.</p>
        </li>
        <li>
          <p class="text lg">Чеснок свежий сухой, ВТОРОЙ СОРТ, калиброванный в размер 30-40 мм.</p>
          <p class="text sm">Допускаются разрывы покровной чешуи луковиц или её отсутствие, зарубцевавшиеся механические
            повреждения, небольшие следы побитости, луковицы неправильной формы, отсутствие не более трёх зубков при
            условии, что чеснок сохраняет характерные признаки качества, сохраняемость и товарный вид.</p>
          <p class="price">Стоимость <span class="lg">200&#x20bd;</span> за 1 кг.</p>
        </li>
        <li>
          <p class="text lg">Чеснок свежий сухой (некондиция).</p>
          <p class="text sm">Чеснок, не соответствующий минимальным требованиям качества. Такой продукт не может быть
            отнесён к более высоким сортам, но отвечает минимальным требованиям, при условии, что сохраняет характерные
            признаки качества, сохраняемость и товарный вид. Может быть раздроблен на зубцы.</p>
          <p class="price">Стоимость <span class="lg">150&#x20bd;</span> за 1 кг.</p>
        </li>
      </ol>
    </div>

    <div class="section">
      <div class="fortext">
        <p class="text lg">Весь чеснок соответствует стандартам, предусмотренным ГОСТ 33562—2015.</p>
        <p class="text lg">Задать все интересующие Вас вопросы, а так же сделать заявку на приобретение, Вы можете на
          страничке
          <router-link to="/contacts" active-class="active" class="nav-menu-item">Контакты</router-link>, заполнив форму
          обратной связи.
        </p>
      </div>

    </div>
    <h4>2025&copy;</h4>
    <br>
  </div>

</template>

<script setup>
import {ref} from 'vue'
import imgPopup from '../components/imgPopup.vue';

import BodyScroll from 'body-scroll-freezer'
BodyScroll.init()

const isPopup = ref(false)
const curentPath = ref('')
const img5=['ches5-1kg.jpg','ches5-1kg-2.jpg','ches5-1kg-zub.jpg']
const img4=['ches4-1kg.jpg','ches4-1kg-2.jpg','ches4-1kg-zub.jpg']
const img3=['ches3-1kg.jpg','ches3-1kg-2.jpg','ches3-1kg-zub.jpg']

const onPopup = (src)=>{
  curentPath.value=src
  isPopup.value = true
  BodyScroll.freeze()
  
}

const onClose=()=>{
  curentPath.value = ''
  isPopup.value = false
  BodyScroll.unfreeze()

}

</script>

<style scoped>
li {
  padding: 1rem;
}

.lg {
  padding: 0;

}

.sm {
  font-size: 18px;
  margin: 0;
}

.lg,
li::marker {
  font-size: 24px;

}
.flex{
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
.forimg{
  width: 30%;
  cursor: pointer;
}

.price {
  text-align: right;
}

@media (max-width: 550px) {
  .price {
    text-align: center;
  }

  .sm {
    text-align: justify;
    font-size: 14px;
  }

  li>p {
    text-align: left;
  }
  .flex{
    flex-direction: column;
  }
  .forimg{
    width: 100%;
    margin: 10px 0px;
  }
}
</style>