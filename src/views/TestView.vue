<script>
import { getTransitionRawChildren } from "vue";
import HomeBtn from "../components/HomeBtn.vue"
export default {
    components: {
        HomeBtn
    },
    created() {
        this.generateTables();
        // this.createTable();
        // this.selectArr();
        // console.log(this.selectedQuestion[this.selectedIndex], this.selectedArr[this.selectedIndex])
        // console.log(`randomNumber = ${this.randomNumber}, selectedIndex = ${this.selectedIndex}`)
        // console.log(`randomNumber- väljer arr från tables + questions`)
        // console.log(`selectedIndex- väljer index i valda arr `)

        // console.log(tables[0][1])
        console.log(this.tables[0][0].question)
        console.log(this.tables[0][0].answer)
        console.log(this.randomNumber, this.randomNumber2)
    },
    data() {
        return {
            // timesOne: [],
            // tables: {},
            // questions: {},
            randomNumber: Math.floor(Math.random() * 10),
            randomNumber2: Math.floor(Math.random() * 10),
            // selectedArr: null,
            // selectedQuestion: null,
            // selectedIndex: 5,
            tables: []
        };
    },
    methods: {
        generateTables() {
            for (let i = 1; i <= 10; i++) {
            const table = [];
            for (let j = 1; j <= 10; j++) {
                table.push({ question: `${i} x ${j} =`, answer: i * j });
            }
            this.tables.push(table);
            }
        },

        // createTable() {
        //     let temporaryAnswer = []
        //     let temporaryQuestion = []

        //     for (let i = 1; i <= 5; i++) {
        //         for (let j = 1; j <= 10; j++) {
        //             temporaryAnswer.push(i * j)
        //             temporaryQuestion.push(i + '*' + j + '=')
        //         }
        //         this.tables["times" + i] = temporaryAnswer
        //         this.questions["times" + i] = temporaryQuestion
        //         temporaryAnswer = []
        //         temporaryQuestion = []
        //     }

        // },
        // selectArr(){
        //     this.selectedArr = this.tables["times" + this.randomNumber]
        //     this.selectedQuestion = this.questions["times" + this.randomNumber]
        // }
    },
};
</script>

<template>
    <div>
        <HomeBtn/>
        <h1 class="text">{{ this.tables[this.randomNumber][this.randomNumber2].question}} {{ this.tables[this.randomNumber][this.randomNumber2].answer}}</h1>
    </div>
</template>

<style>
.text{
    color: white
}
</style>
