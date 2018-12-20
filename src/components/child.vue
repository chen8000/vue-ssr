<template>
    <div>
        <button @click="$emit('toParent', 1, 2, 3)">给父组件传值</button>

        {{number}}

        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'Child',
    props:{
        number:Number
    }
}
</script>

<style lang="scss" scoped>

</style>


