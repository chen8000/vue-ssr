<template>
  <div class="h">
    {{ computData }}
    <Events/>
  </div>
</template>

<script>
import Events from './events'
export default {
  name: 'HelloWorld',
  data (){
    return {
      number:1
    }
  },
  components:{
    Events
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

