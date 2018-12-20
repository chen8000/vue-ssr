<template>
    <div>
        <Child :number='number' @toParent='parentfn'>
            <h1>我要加东西1</h1>
        </Child>
    </div>
</template>

<script>
import Child from './child'
export default {
    name:'Events',
    data (){
        return {
            number:1
        }
    },
    components:{
        Child
    },
    methods:{
        parentfn(a,b,c){
            console.log(a,b,c)

            this.number ++
        }   
    }
}
</script>

