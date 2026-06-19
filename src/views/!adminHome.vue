<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <sidebar :view="view" @change-view="changeView" ></sidebar>
      </div>
      <div class="col-12 d-flex justify-content-center content">
        <Popup v-if="isVisible">
          <form-admin :record="record" @updateRec="updateRec" @close="cancelRec" @save="saveRec"></form-admin>
        </Popup>
        <vue-cal v-if="view == 'records'" ref="vuecal" locale="ru" class="vuecal--green-theme"
          style="min-height: 500px;max-width: 1200px;"
          :editable-events="{ title: false, drag: false, resize: false, delete: false, create: false }"
          :selected-date="selectedDate" :time-step="60" :time-from="9 * 60" :time-to="23 * 60"
          :disable-views="['years', 'year']" :events="events" @cell-click="cellClick($event)" 
          @event-click="eventClick($event)">

          <template #arrow-prev>
            <button class="arrow" @click="arrowClick">&lt;</button>
          </template>
          <template #arrow-next>
            <button class="arrow">&gt;</button>
          </template>
        </vue-cal>
      </div>
    </div>

    <!-- view Table -->

    <div class="row justify-content-center" v-if="view == 'table'">
      <div class="cur-month">
        <button class="arrow" @click="curM--">&lt;</button>
        <h2>Учет рабочего времени за
          {{ getMonth }} {{ curY }} года</h2>
        <button class="arrow" @click="curM++">&gt;</button>
      </div>

      <div class="col-12 col-md-10">
        <table class="table table-hover table-responsive" id="table">
          <thead class="table-dark top-head">
            <tr>
              <td>Участники</td>
              <td v-for="i in getDays" :key="i">{{ i }}</td>
              <td>Всего</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="us in getUsers" :key="us.id" style="cursor:pointer">
              <td>{{ us.descr }}</td>
              <td v-for="i in getDays" :key="i">{{ inRec(us.descr, i) }}</td>
              <td>{{ total(us.descr) }}</td>
            </tr>
          </tbody>
        </table>
        <button class="arrow" @click="download">Скачать</button>
      </div>
    </div>

  </div>


</template>

<script>

import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import 'vue-cal/dist/drag-and-drop.es.js'

import Popup from "../components/Popup.vue";
import FormAdmin from "../components/admin/FormAdmin.vue";

import { useToast } from "vue-toastification";
import Sidebar from '../components/admin/Sidebar.vue'





export default {

  components: { Sidebar, Popup, FormAdmin, VueCal },
  setup() {
    const toast = useToast();
    return {
      toast
    }
  },

  data: () => ({

    isVisible: false,
    record: null,
    records: {},
    currentDay: new Date(),
    prevDisabled: true,
    selectedDate: null,
    view: 'records',
    curM: 6,
    curY: 2024

  }),
  created() {

  },
  computed: {
    events() {
      return this.$store.state.events
    },
    tHeads() {
      return Object.keys(this.events[0])
    },
    getDays() {
      return new Date(this.curY, this.curM, 0).getDate()
    },
    getUsers() {
      return this.$store.getters.getUsers
    },
    getMonth() {
      if (this.curM < 1) { this.curM = 1 }
      if (this.curM > 12) { this.curM = 12 }
      const months = ['', 'январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
      return months[this.curM]
    },
    inMonth() {
      let arr = []

      this.events.forEach((e) => {
        if (new Date(e.start).getMonth() + 1 == this.curM) {
          arr.push(e)
        };
      })
      return arr
    }


  },


  methods: {
    inRec(name, d) {
      let dur = ''
      this.inMonth.forEach((e) => {
        let day = new Date(e.start).getDate()


        if ((e.participant.indexOf(name) != -1) && (day == d)) {
          dur = +e.duration
        };

      })
      return dur
    },
    total(name) {
      let total = 0
      this.inMonth.forEach((e) => {
        if ((e.participant.indexOf(name) != -1)) {
          total += +e.duration
        };

      })
      return total
    },
  

  formatDay(date) {
    return new Date(date).format("DD.MM.YYYY HH:mm");
  },
  eventClick(ev) {

    this.record = { ...ev }
    this.isVisible = true
  },
  changeView(str) {
    this.view = str
  },

  cellClick(e) {
    if (e.date) {
      return
    }
    this.selectedDate = e

    if (this.$refs.vuecal.view.id == "month") {
      this.$refs.vuecal.view.id = "day"
      return;
    }

    let start = new Date(e).setMinutes(0)



    this.record = {
      title: "",
      start: new Date(start),
      end: '',
      descr: '',
      users: this.$store.getters.getUsers,
      participant: [],
      duration: 1
    };
    this.isVisible = true;
  },
  saveRec() {

    this.record = null
    this.isVisible = false

  },
  updateRec() {
    this.isVisible = false;
    this.record = null
  },
  cancelRec() {
    this.isVisible = false;
    this.toast.warning("Запись не обновлена");
    this.record = null
  }
}
}


</script>

<style>
.cur-month {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h2 {
  text-align: center;
}

td {
  border: 1px solid black
}

.vuecal__event.no-event {
  display: none;
}

.event-badge {
  top: 1px;
  position: absolute;
  left: 1px;
  border: 1px solid red;
  background: #42b983;
}
</style>

<style scoped>
.table-responsive {
  overflow-x: auto;
  width: 100%;
  display: block;
  text-align: center;
}

.content {
  margin-top: 80px;
}

.top-head {
  position: sticky;
  top: 0;
}

th {
  text-align: center;
  font-weight: 400;
}
</style>