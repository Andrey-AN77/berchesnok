import { defineStore } from 'pinia';
import axios from 'axios';
import { useToast } from 'vue-toastification'
import router from '../router';

const toast = useToast()

const ax = axios.create({

  baseURL: import.meta.env.DEV ? "http://localhost/ches_data/order" : "./data/",
});

export const useOrderChes = defineStore('orders', {

  state: () => ({
    orders: [],
    isAuth: false,
    login: null
  }),
  getters: {
    getOrders: (s) => s.orders,
    getAuth: (s) => s.isAuth

  },
  actions: {
    async onLogin(log, pass) {
      toast.warning('Секундочку')
      try {
        const res = await ax.post('login.php', { log, pass })
        if (typeof (res.data) != 'object' && !res.data) {
          toast.error(`Упсс...сломалось: ${res.data}`)
          return
        }

        if (res.data.result === true) {
          this.isAuth = true
          this.login = res.data.login
          toast.success(`Привет тебе, ${res.data.login})))`)
          router.push({ name: 'admin' })
          this.getAll()
        } else {
          toast.error(`Error: ${res.data.error}`)
        }

      } catch (e) {
        toast.error(`Error: ${e}`)

      }
    },
    async getAll() {
      this.orders = []
      try {
        toast.warning('Подождите...Данные загружаются')
        const res = await ax.get('getAll.php')
        if (typeof (res.data) != 'object' && !res.data) {
          toast.error(`Упсс...сломалось: ${res.data}`)
          return
        }
        if (res.data.result === true) {
          this.orders = res.data.tbl
          toast.success('Данные загружены')

        } else {
          toast.error(`Error: ${res.data.error}`)
        }



      } catch(e) {
        toast.error(`Error: ${e}`)
      }
    }
  }
})