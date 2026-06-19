import { createStore } from 'vuex'
import { useToast } from 'vue-toastification'

const toast = useToast()

import axios from "axios";
const ax = axios.create({

  baseURL: import.meta.env.DEV ? "http://localhost/ches_data/" : "./data/",
});

export const store = createStore({
  state: () => ({
    events: [],
    users:[],
    auth: false,
    login:null

  }),
  getters:{
    notConfirm(s){
      let arr =[]
      s.events.map(ev=>{
        if (ev.start > new Date() && ev.status == 0){
          arr.push(ev)
        }
      })
      return arr
    },
    getAuth:(s)=> s.auth,
    getUsers:(s) => s.users
  },
  mutations: {
    setEvents: (s, arr) => {
      s.events = []
      s.events = arr
    },
    setAuth: (s, {b,l}) => {
      s.auth = b
      s.login = l
    },
    setUsers: (s, arr) =>{ s.users = arr}
  },

  actions: {
    async getAll({ commit }) {
      try {
        toast.info('Получение данных... Подождите')
        const res = await ax.get("events/getAll.php")
        if (!res.data.result) {
          toast.error(`сломалось : ${res.data}`)
          return
        }
        if (res.status == 200 && res.data.result) {
          res.data.res.forEach((i) => {
            i.start = new Date(i.start);
            i.end = new Date(i.end);
            i.content =`<p>${i.participant}</p>` ;
            
            
            
          });
          commit('setEvents', res.data.res)

        } else {
          toast.error('Ошибка получения данных')
        }
      } catch (e) {
        toast.error(`Ошибка ${e}`)
      }
    },
    async saveRec({dispatch }, rec) {
      try {
        await ax.post("events/insert.php", rec).then((res) => {
          if ((res.status = 200 && res.data == 1)) {
            toast.success("Запись успешно добавлена");
            dispatch('getAll')
            
          }
        });
      } catch (e) {
        toast.error(`${e}`);
      }
    },
    async onLogin({ commit, dispatch }, obj) {
      try {
        let res = await ax.post('admin/login.php', obj)
        if (typeof (res.data) != 'object') {
          toast.error(`Упсс...сломалось: ${res.data}`)
          return
        }
        if (res.data.result == true) {
          commit('setAuth', {b:true, l:res.data.login})
          dispatch('getAll')
          dispatch('getUsers')
          toast.success(`Привет тебе, ${res.data.login})))`)
        } else {
          toast.error(`Error: ${res.data.error}`)
        }
      } catch (e) {
        toast.error(`Error: ${e}`)
      }
    },
    onLogout({ commit}){
      commit('setAuth',{b:false, l:null})
    },
    async getAllAdmin({ commit }) {
      try {
        toast.info('Получение данных... Подождите')
        const res = await ax.get("admin/getAll.php")
        if (!res.data.result) {
          toast.error(`сломалось : ${res.data}`)
          return
        }
        if (res.status == 200 && res.data.result) {
          res.data.res.forEach((i) => {
            i.start = new Date(i.start);
            i.end = new Date(i.end);
            i.content = `<span class="badge event-badge">${i.id}</span>`;
            i.class = i.status == 0 ? 'new-event':'confirm-event';
            if(i.end < new Date()){i.class = 'no-event'}
          });
          commit('setEvents', res.data.res)

        } else {
          toast.error('Ошибка получения данных')
        }
      } catch (e) {
        toast.error(`Ошибка ${e}`)
      }
    },
    async onUpdate({dispatch},obj){
      try {
        await ax.post("admin/updOne.php", obj).then((res) => {
          if ((res.status = 200 && res.data == 1)) {
            toast.success("Запись обновлена");
            dispatch('getAll')
          }
        });
      } catch (e) {
        toast.error(`${e}`);
      }
    },
    async getUsers({commit}){
      try{
        const res = await ax.get('users/getAll.php')
        if (!res.data.result || res.status != 200) {
          console.log(res.status);
          toast.error(`Ошибочка : ${res.data} ${res.status}`)
          return
        }
        commit('setUsers', res.data.users)

      }catch{
        toast.error(`Error: ${res.data.error}`)
      }

    }

  }
})