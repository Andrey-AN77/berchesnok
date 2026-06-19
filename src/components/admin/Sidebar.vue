<template>
    <div class="wrap-side bg-dark sticky-top">
        <div class="d-flex flex-row  bg-dark align-items-center sticky-top">

            <ul class="nav nav-pills nav-flush  flex-row flex-nowrap
                        mb-auto mx-auto text-center align-items-center ">
                <li class="nav-item my-2">
                    <a href="#" class="nav-link py-3 px-2 text-white" :class="{'active': view=='records'}" @click="changeView('records')">
                        Records
                    </a>
                </li>
                <li class="nav-item my-2" >
                    <a href="#" class="nav-link py-3 px-2 text-white" :class="{'active': view=='table'}" @click="changeView('table')">
                        Table
                    </a>
                </li>
            </ul>
            <router-link class="btn btn-danger mx-3" to="/" @click="onLogout">Выйти</router-link>
        </div>
    </div>
</template>

<script>

export default {
    emits:['change-view'],
    props:['view'],
    methods:{
        onLogout(){
            this.$store.dispatch('onLogout')
        },
        changeView(str){
        this.$emit('change-view',str)
       } 
    },

}
</script>

<style>
.wrap-side{
    position: fixed;
    top: 0;
    left: 0px;
    right: 0;
}

@media (max-width: 576px) {
    .wrap-side {
        overflow-x: scroll;
    }
}
</style>