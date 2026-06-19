<template>
  <div class="header">
    <Popup v-if="isVisible">
      <Form :record="record" @save="saveRec" @close="cancelRec"></Form>
    </Popup>
    <vue-cal ref="vuecal" locale="ru" class="vuecal--green-theme" style="min-height: 500px;max-width: 100%;"
      :selected-date="selectedDate" :time-step="30" :time-from="9 * 60" :time-to="23 * 60"
      :disable-views="['years', 'year']" :events="events" :minDate="currentDay" @cell-click="cellClick($event)"
      @view-change="viewChange">
      <template #arrow-prev>
        <button :disabled="prevDisabled" class="arrow">&lt;</button>
      </template>
      <template #arrow-next>
        <button class="arrow">&gt;</button>
      </template>
    </vue-cal>
  </div>

  <div class="inform">
    <div class="new-event">Неподтверждённое бронирование</div>
    <div class="confirm-event">Бронирование подтвердил администратор</div>
    <div class="vuecal__cell--disabled">Время в прошлом, бронирование невозможно</div>
    <router-link to="/_admin" class="btn btn-danger">Войти</router-link>
  </div>
</template>

<script>

function dateToMinutes(date) {
  return 60 * date.getHours() + date.getMinutes()
}



import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

import Popup from "../components/Popup.vue";
import Form from "../components/Form.vue";

import { useToast } from "vue-toastification";




export default {

  setup() {
    const toast = useToast();
    return {
      toast
    }
  },
  components: { Popup, Form, VueCal },
  data: () => ({

    isVisible: false,
    record: null,
    records: {},
    currentDay: new Date(),
    prevDisabled: true,
    selectedDate: null,

  }),
  created() {

    this.$store.dispatch('getLast')
    this.toast.info('Здасьте))')
    setInterval(() => this.$store.dispatch('getLast'), 10000);
  },
  computed: {
    events() {
      return this.$store.state.events
    }
  },


  methods: {
    viewChange(e) {
      this.prevDisabled = e.startDate < this.currentDay ? true : false;
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


      let start = new Date((e.getMinutes() > 30) ? e.setMinutes(30) : e.setMinutes(0));

      if (start < this.currentDay) {
        this.toast.error("Начало бронирования меньше текущего времени");
        return;
      }

      let startMin = dateToMinutes(start)
      let dayEvents = this.events
        .filter(
          (ev) =>
            start.format("DD-MM-YYYY") == ev.start.format("DD-MM-YYYY") &&
            dateToMinutes(ev.start) > startMin
        )
        .map((ev) => dateToMinutes(ev.start));


      let maxTime
      if (dayEvents.length == 0) {
        maxTime = Math.floor((23 * 60 - startMin) / 60)
      } else {
        maxTime = Math.floor((Math.min(...dayEvents) - startMin) / 60)
      }

      if (maxTime == 0) {
        this.toast.error("Свободное время меньше 1 часа. Бронирование невозможно.");
        return
      }



      this.record = {
        title: "",
        start,
        end: '',
        maxTime,
        phone: "",
        email: "",
        descr: '',
        login: 'user',
        status: 0,
      };
      this.isVisible = true;
    },
    saveRec() {
      this.$store.dispatch('saveRec', this.record)
      this.record = null
      this.isVisible = false
    },
    cancelRec() {
      this.isVisible = false;
      this.toast.warning("Запись не добавлена");
      this.record = null
    }
  }
};
</script>

<style>
.arrow {
  padding: 5px 10px;
  cursor: pointer;
}

.header {
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;
}

.inform {
  width: 80%;
  margin: 10px auto;
}

.inform>div {
  padding: 10px;
  border-radius: 10px;
  margin-top: 5px;
  color: black;
}

.vuecal__cell--disabled {
  background: #fff7f0 repeating-linear-gradient(-45deg,
      rgba(255, 162, 87, 0.25),
      rgba(255, 162, 87, 0.25) 5px,
      rgba(255, 255, 255, 0) 5px,
      rgba(255, 255, 255, 0) 15px);
}

.vuecal__event.no-event {
  display: none;
}

.vuecal__event.new-event,
.new-event {
  background: #f8b7b2;
  border-radius: 5px;
  border: 1px solid #fa4e42
}

.vuecal__event.confirm-event,
.confirm-event {
  background: #b4f8d9;
  border-radius: 5px;
  border: 1px solid #5acd98;
}

.event-badge {
  top: 1px;
  position: absolute;
  left: 1px;
  border: 1px solid red;
  background: #42b983;
}

/* Green-theme. */
.vuecal__menu,
.vuecal__cell-events-count {
  background-color: #cffde8;
}

.vuecal__title-bar {
  background-color: #e4f5ef;
}

.vuecal__cell--today,
.vuecal__cell--current {
  background-color: rgba(240, 240, 255, 0.4);
}

.vuecal:not(.vuecal--day-view) .vuecal__cell--selected {
  background-color: rgba(235, 255, 245, 0.4);
}

.vuecal__cell--selected:before {
  border-color: rgba(66, 185, 131, 0.5);
}

@media screen and (max-width: 1000px) {
  .vuecal__no-event {
    display: none;
  }
}

@media screen and (max-width: 750px) {
  .event-badge {
    display: none !important;
  }
}
</style>