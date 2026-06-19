<template>
  <div class="for-name">
    <label>Наименование</label>
    <input type="text" v-model="record.title" class="field" />
    <div class="for-error">
      <span v-if="record.title.length == 0">Поле должно быть заполнено</span>
    </div>
  </div>

  <div class="for-date">
    <label>Начало события</label>
    <div class="form-control">{{ formatDay(record.start) }}</div>

    <div class="for-select">
      <label> Продолжительность</label>
      <input class="form-control" type="number" v-model="record.duration" @input="setEnd(e)" ref="inputEnd">
    </div>

    <label>Окончание события</label>
    <div class="form-control">{{ formatDay(record.end) }}</div>
  </div>

  <div class="form-control">
    <p v-for="user in record.users" :key="user.id">
      
      <input type="checkbox" :id="user.descr" 
      v-model="record.participant" 
      :value="user.descr"
      style="margin-right: 5px;"
      >
      <label :for="user.descr"> {{ user.descr }}</label>
      
    </p>


   <p>Участники: {{ record.participant }} </p>
  </div>


  <div>
    <label>Описание</label>
    <textarea class="form-control" cols="30" rows="3" v-model="record.descr"></textarea>
  </div>



  <hr />
  <div class="for-buttons my-2">
    <button class="btn btn-outline-primary my-1" @click="onUpdate('update')" v-if="record.id">Обновить</button>
    <button class="btn btn-outline-warning" @click="onUpdate('close')">Отмена</button>
    <button class="btn btn-outline-success" @click="onUpdate('save')" v-if="!record.id">Сохранить</button>

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
  emits: ['updateRec', 'close', 'save'],
  components: {},
  created(){
    this.setEnd()
  },
  computed: {
    isValid() {
      return this.record.title.length > 2 && this.record.end != ''
    },


  },
  methods: {
    setEnd() {

      if (this.record.duration < 1){ this.record.duration = 1}
      if (this.record.duration > 10){ this.record.duration = 10}
      
       return this.record.end = new Date(this.record.start).addHours(this.record.duration);
    },
    formatDay(date) {
      return new Date(date).format("DD.MM.YYYY HH:mm");
    },

    onUpdate(action) {

      if (action == 'close') {
        this.$emit('close')
        return
      }
      if (!this.isValid) {
        this.toast.error('Неверно заполнены поля')
        return
      }
      if (action == 'save') {
        this.$store.dispatch('saveRec', this.record)
        this.$emit('save')
        return
      }

      this.$store.dispatch('onUpdate', this.record)
      this.$emit('updateRec')
    },


  }





};
</script>

<style scoped>
.for-name,
.for-date {
  width: 100%;
  border-bottom: 1px solid rgb(95, 95, 95);
  margin-bottom: 5px;
  padding-bottom: 10px;
}

.for-error {
  color: red;
  font-size: 12px;
  padding-left: 5px;
  font-style: italic;
}

.for-buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.confirm {
  padding: 10px;
  background: #b4f8d9;
  border-radius: 7px;
}

.delete {
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