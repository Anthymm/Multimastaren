<script>
export default {
    created() {
        this.createTable(1, this.timesOne);
        console.log(this.timesOne)
    },
    data() {
        return {
            timesOne: [],
        };
    },
    methods:{
        createTable(x, y){
            for (let i = 0; i <= 10; i++) {
                y.push(i * x);
            }
        },
    },
};
</script>

<template>
    TestView
</template>

<style>
</style>

