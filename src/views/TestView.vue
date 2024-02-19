<script>
import { getTransitionRawChildren } from "vue";
import HomeBtn from "../components/HomeBtn.vue"
export default {
    components: {
        HomeBtn
    },
    created() {
        this.generateTables();
        console.log(this.tables[0][0].question)
        console.log(this.tables[0][0].answer)
        console.log(this.randomNumber, this.randomNumber2)
    },
    data() {
        return {
            randomNumber: 0,
            randomNumber2: 0,
            // randomNumber: Math.floor(Math.random() * 10),
            // randomNumber2: Math.floor(Math.random() * 10),
            tables: [],
            userAnswer: null,
            correctAnswer: null,
            nextBtnDisable: true
        };
    },
    methods: {
        generateTables() {
            for (let i = 1; i <= 5; i++) {
            const table = [];
            for (let j = 1; j <= 10; j++) {
                table.push({ question: `${i} x ${j} =`, answer: i * j });
            }
            this.tables.push(table);
            }
        },
        onAnswer (){
            if (this.userAnswer === this.tables[this.randomNumber][this.randomNumber2].answer){
                this.correctAnswer = 'Rätt!'
            }else{
                this.correctAnswer = `Fel, rätt svar är: ${this.tables[this.randomNumber][this.randomNumber2].answer}`
            }
            this.nextBtnDisable = false
        },
        nextQuestion(){
            this.userAnswer = null
            this.correctAnswer = null
            if(this.randomNumber2 <= 8){
                this.randomNumber2++
            }else{
                this.randomNumber++
                this.randomNumber2 = 0
            }
            this.nextBtnDisable = true
        }
    },
};
</script>

<template>
    <div>
        <HomeBtn/>
        <h1 class="text">{{ this.tables[this.randomNumber][this.randomNumber2].question}} {{ this.tables[this.randomNumber][this.randomNumber2].answer}}</h1>
        <input type="number" v-model="userAnswer" /> {{ userAnswer }} <input type="button" @click="onAnswer" value="Svara"/> <br/>
        {{ correctAnswer }} <br/>
        <input type="button" :disabled="nextBtnDisable" @click="nextQuestion" value="Nästa"/>
    </div>
</template>

<style>
</style>
