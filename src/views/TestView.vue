<script>


export default {
    created() {
        this.createTable(1,this.timesOne)
    },
    data() {
        return {
            timesOne: [],
            i: 0
        }
    },
    methods:{
        createTable(x,y){
            while (i < 11) {
                y.push(i * x)
                i++;
            }
        }
    }
}
console.log(timesOne)
</script>
<template>
    TestView
</template>
<style>
</style>
