<template>
    <div>
        a:{{$store.state.money.a}}
        <button @click="add">add</button>
        <button @click="less">less</button>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'A',
    methods:{
        ...mapActions('money',['add','less'])
    }
}
</script>
