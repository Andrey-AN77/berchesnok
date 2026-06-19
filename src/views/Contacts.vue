<template>
  <div class="container">
    <img-popup path="/decl2025.jpg" v-if="isPopup" @close="onClose"></img-popup>
    <h1>Информация для наших клиентов.</h1>
    <div class="section">
      <div class="fortext">
        <h3>Юридическая информация</h3>
        <p class="text">ИП Афанасьев Николай Владимирович</p>
        <p class="text">ИНН 591100119669</p>
        <p class="text">ОГРНИП: 322595800031365</p>
        <p class="text uline">Адрес регистрации:</p>
        <p class="text">618416 Россия. Пермский край. г. Березники ул.Южная д.1</p>

        <p class="text uline">Адрес производства:</p>
        <p class="text">618440 Россия. Пермский край. Усольский район, в примыкании к северной границе д.Лубянка.</p>
        <p class="text"></p>
        <p class="text"></p>
      </div>
      <div class="fordecl" @click="popupOpen">
        <img src="/decl2025.jpg" alt="">
        <div class="forzoom">
          <img class="zoom" src="/zoom_in.png" alt="">
        </div>
      </div>
    </div>

    <h4>Задайте вопрос, оставьте отзыв или сделайте заявку, заполнив форму ниже.</h4>

    <div class="section">

      <div class="forform">

        <form id="form">
          <div class="mb-3 field">
            <label for="name" class="form-label">Ваше ФИО {{ !validName ? '❌' : '✅' }}</label>
            <input type="text" class="form-control" id="name" name="name" v-model="name">
            <div id="nameHelp" class="form-text">Укажите как к Вам обращаться (минимум 5 символов)</div>
          </div>
          <div class="mb-3 field">
            <label for="phone" class="form-label">Телефон {{ !validPhone ? '❌' : '✅' }}</label>
            <input  type="tel" class="form-control" id="phone" name="phone" v-maska="'+7-#####-#####'" v-model="phone" placeholder="+7" />
            <div id="phoneHelp" class="form-text">Укажите телефон без 8, по которому с Вами можно связаться</div>
          </div>

          <div class="mb-3 field">
            <label for="descr" class="form-label">Описание</label>
            <textarea class="form-control" id="descr" rows="3" name="descr" v-model="descr" />
            <div id="descrHelp" class="form-text">Задайте вопрос или сделайте заявку</div>
          </div>

          <div class="mb-3 field">
            <label for="capcha" class="form-label">Защита от спама {{ !validCapcha ? '❌' : '✅' }}</label>

            <div class="forcapcha form-control">
              <img :src="'./data/captcha.php'" />
              <input type="text" class="form-control" id="capcha" name="capcha" v-model="capcha">
            </div>
            <div id="capchaHelp" class="form-text">Введите защитный код с картинки</div>
          </div>


          <button type="button" class="btn btn-primary" @click="onSubmit" :disabled="!validForm">Отправить</button>
        </form>
      </div>
    </div>

    <div class="section">
      <div class="fortext">
        <p class="text">Вы всегда можете нам позвонить <a href="tel:+79028385964">по телефону: +7-90283-85964</a></p>
        <p class="text">или написать нам на <a href="mailto:info@berchesnok.ru">электронную почту:
            info@berchesnok.ru</a>
        </p>
        <p class="text">Мы благодарны Вам за отзывы и предложения.</p>
      </div>


    </div>
    <h4 @click="$router.push({name:'admin'})">2026&copy;</h4>
    <br>
  </div>




</template>

<script setup>
import { ref, watch, computed } from 'vue'
import imgPopup from '../components/imgPopup.vue'
import { vMaska } from "maska/vue"
import { useToast } from "vue-toastification"

const toast = useToast()

import BodyScroll from 'body-scroll-freezer'
BodyScroll.init()


const name = ref('')
const phone = ref('')
const descr = ref('')
const capcha = ref('')




const validPhone = ref(false)
const validName = ref(false)
const validCapcha = ref(false)
const isPopup = ref(false)

const popupOpen = ()=>{
  isPopup.value = true
  BodyScroll.freeze()

}

const onClose=()=>{
  isPopup.value = false
  BodyScroll.unfreeze()

}

watch(phone, (newPhone) => {
  let reg = new RegExp(/(^\+7-[0-9]{5}-[0-9]{5}$)/gm);
  validPhone.value = reg.test(newPhone);
})

watch(name, (newName) => { validName.value = newName.length >= 5 })
watch(capcha, (newCapcha) => { validCapcha.value = newCapcha.length == 4 })

const validForm = computed(() => validPhone.value && validName.value && validCapcha.value)

const clearForm = () => {name.value = phone.value = descr.value = capcha.value = ''}

const onSubmit = () => {
  if (!validForm) {
    toast.warning('Неверно заполнены поля')
    return
  }

  const raw = {
    'name': name.value,
    'phone': phone.value,
    'descr': descr.value,
    'capcha': capcha.value
  }

  fetch('./data/order/insert.php', 
  {
  method: 'POST',
  body: JSON.stringify(raw),
  headers: {'Content-type': 'application/json; charset=UTF-8'}
  })
 .then((res) => res.json())

 .then((data) => {

    if((typeof data) !== 'object'){
      toast.error(data)
      return
    }

    if(data.status === 'error' || !data.status){
     toast.error(data.msg)
      return
   }
   toast.success(data.msg)
   clearForm()

    })
  .catch((e)=>toast.error(e))
  }
  






</script>

<style scoped>
.uline {
  text-decoration: underline;
}

.forform,
.forcapcha {
  width: 50%;
}

.field {
  text-align: left;
}

button.btn:hover {
  cursor: pointer;
}

button.btn:disabled {
  cursor: not-allowed;
}

button.btn {
  pointer-events: auto;
}
.fordecl{
  width: 35%;
  min-width: 350px;
  position: relative;
  cursor: pointer;

}
.forzoom{
  position: absolute;
  width: 20%;
  bottom: 20%;
  left: 40%;
}
.zoom{
  opacity: 0.4;
}
@media (max-width: 765px) {
  .forform {
    width: 90%;
  }

  .forcapcha {
    width: 70%;
  }
}
</style>