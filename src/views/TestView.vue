<script>
import HomeBtn from "../components/HomeBtn.vue"
export default {
    components: {
        HomeBtn

    },
    created() {
        // this.createTable(1, this.timesOne);
        // console.log(this.timesOne)
        this.createTable();
        console.log(this.tables)
    },
    data() {
        return {
            // timesOne: [],
            // timesTwo: [],
            // timesThree: [],
            // timesFour: [],
            // timesFive: [],
            // timesSix: [],
            // timesSeven: [],
            // timesEight: [],
            // timesNine: [],
            // timesTen: [],
            tables: {}
        };
    },
    methods: {
        createTable() {
            let emptyArray = []

            for (let i = 1; i <= 10; i++) {
                for (let j = 1; j <= 10; j++) {
                    emptyArray.push(i * j)
                }
                this.tables["times" + i] = emptyArray
                emptyArray = []
            }

        },
    },
};
</script>

<template>
    <HomeBtn />
</template>

<style>
</style>
