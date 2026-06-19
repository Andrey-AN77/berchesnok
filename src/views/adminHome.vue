<template>

    <div class="container">
        <popup v-if="isRedaction">
            <h3 @click="onClose">Редактирование записи #{{ curentOrder.id }}</h3>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="process" v-model="curentOrder.process">
                <label class="form-check-label" for="process">Обработано</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="pay" v-model="curentOrder.pay">
                <label class="form-check-label" for="pay">Оплачено </label>
            </div>
            <div class="forbtn">
                <button type="button" class="btn btn-warning">Отмена</button>
                <button type="button" class="btn btn-success">Сохранить</button>
            </div>

        </popup>
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th scope="col" @click="getAll">#</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Телефон</th>
                    <th scope="col">Обращение</th>
                    <th scope="col">Обработано</th>
                    <th scope="col">Оплачено</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in orders" :key="item.id" @click="onRedaction(item)">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.descr }}</td>
                    <td :class="Boolean(item.process) ? 'green' : 'red'">{{ !!item.process ? 'ДА' : 'НЕТ' }}</td>
                    <td :class="!!item.pay ? 'green' : 'red'">{{ !!item.pay ? 'ДА' : 'НЕТ' }}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script setup>
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useOrderChes } from '../store/orderChes';

import Popup from '../components/Popup.vue';


const orderState = useOrderChes()
const { orders } = storeToRefs(orderState)
const getAll = () => orderState.getAll()

const isRedaction = ref(false)
const curentOrder = ref({})


const onRedaction = (item) => {
    isRedaction.value = true
    curentOrder.value = {...item}
}
const onClose = () => {
    isRedaction.value = false
    curentOrder.value={}
}

</script>

<style scoped>
tbody>tr {
    cursor: pointer;
}

.red {
    background: rgba(248, 163, 163, 0.918);
}

.green {
    background: rgb(231, 252, 156);
}
.forbtn{
    display: flex;
    justify-content: space-around;
}
</style>