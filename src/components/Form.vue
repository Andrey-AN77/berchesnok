<template>
  <div class="for-name">
    <label>Ваше имя</label>
    <input type="text" v-model="record.title" class="field" />
    <div class="for-error">
      <span v-if="record.title.length == 0">Поле должно быть заполнено</span>
    </div>
  </div>

  <div class="for-date">
    <label>Начало бронирования</label>
    <div class="field">{{ formatDay(record.start) }}</div>
    
    <div class="for-select" v-if="record.maxTime">
      <label > Продолжительность</label>
    <select class="field" @change="setEnd()" ref="select">
      <option disabled selected style="color:red">Выберите продолжительность</option>
      <option
        v-for="h in record.maxTime"
        :key="h" 
        :value="h"
      >{{h}} час.</option>

    </select >
    </div>

    <label>Конец бронирования</label>
    <div class="field" v-if="record.end != ''">{{ formatDay(record.end) }}</div>
  </div>

  <div> 
    <label>Описание</label>
    <textarea class="form-control" cols="30" rows="6" v-model="record.descr"></textarea>
  </div>

  <div class="for-email" v-if="'email' in record">
    <label>Электронная почта</label>

    <input
      type="text"
      v-model="record.email"
      class="field"
      :class="validEmail() ? 'green':'red'"
    />
    <div class="for-error">
      <span v-if="record.email.length == 0">Поле должно быть заполнено. </span>
      <span v-else-if="!validEmail()">Неверный формат электронной почты.</span>
    </div>
  </div>
  <div class="for-phone" v-if="'phone' in record">
    <label>Телефон</label>
    <input
      type="text"
      v-model="record.phone"
      class="field"
      v-maska="'+7-#####-#####'"
      :class="validPhone() ? 'green':'red'"
    />
    <div class="for-error">
      <span v-if="record.phone.length == 0">Поле должно быть заполнено</span>
      <span v-else-if="!validPhone()"
        >Введите 10 знаков без 8</span
      >
    </div>
  </div>
  <hr>
  <div class="for-buttons">
    <button class="btn btn-outline-warning" @click="onUpdate('close')" >Отмена</button>
    <button class="btn btn-outline-success" @click="onUpdate('save')" >Сохранить</button>

  </div>

  
</template>

<script>
//(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)
import { useToast } from "vue-toastification";
export default {
  setup() {
    const toast = useToast();
    return {
      toast
    }
  },
  props: {
    record: {
      type: Object,
    },
  },
  emits:['save','close'],
  components: {},
  computed:{
    isValid(){
      return this.validEmail() && this.validPhone() && this.record.title.length > 2 && this.record.end !=''
    }
  },
  methods: {
    validEmail() {
      let reg = new RegExp(/(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/);
      return reg.test(this.record.email);
    },
    validPhone() {
      let regex = new RegExp(/(^\+7-[0-9]{5}-[0-9]{5}$)/);
      return regex.test(this.record.phone);
    },
    formatDay(date) {
      return new Date(date).format("DD.MM.YYYY, HH:mm");
    },
    setEnd(){
      let hourse = +this.$refs.select.value
      this.record.end = new Date(this.record.start).addHours(hourse);
    },
    onUpdate(action){

      if(action == 'close'){
        this.$emit('close')
      }
      if(action == 'save' && !this.isValid){
        this.toast.error('Не верно заполнены поля')
        return
      }else{
        this.$emit('save')
      }
      
    }
  },

  

};
</script>

<style scoped>
.for-name,
.for-date,
.for-email,
.for-select
.for-phone {
  width: 100%;
  border-bottom: 1px solid rgb(95, 95, 95);
  margin-bottom: 5px;
}
.for-error {
  color: red;
  font-size: 12px;
  padding-left: 5px;
  font-style: italic;
}
.for-buttons{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.confirm{
  padding: 10px;
  background: #b4f8d9;
  border-radius: 7px;
}
.delete{
  padding: 10px;
  background: #e78b8b;
  border-radius: 7px;
}
.field {
  width: 90%;
  padding: 3px 10px;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  margin: 5px;
  color: #4e4b4b;
}
.field:focus {
  border-color: #bdbdbd;
}
.red {
  border: 1px solid red;
}
.green {
  border: 1px solid green;
}
</style>