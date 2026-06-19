<template>
    <div class="container">
        <Popup >
            <div class="wrapper">
                <input type="text" class="form-control my-2" placeholder="Login" v-model="login" />
                <input type="password" class="form-control my-2" placeholder="password" v-model="password" />

                <button class="btn btn-danger" @click="onLogin">Login</button>
            </div>
            <div class="my-2">
                <button class="btn btn-outline-warning" @click="$router.push({name:'contacts'})">Отмена</button>
            </div>

        </Popup>
    </div>

</template>

<script setup>
import { ref } from 'vue'

import Popup from './Popup.vue'
import { useOrderChes } from '../store/orderChes'

const orderStore = useOrderChes()
const login = ref('')
const password = ref('')

const onLogin = () => {
    orderStore.onLogin(login.value, password.value)
}


</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
}

.my-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
}

.form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.375rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
</style>