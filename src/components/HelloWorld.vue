<template>
  <div class="h">
    {{ computData }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data (){
    return {
      number:1
    }
  },
  computed :{
    computData (){
      return this.number + 5
    }
  }
}
</script>

<style lang="scss" scoped>
  .h{
    color:red;
  }
</style>

