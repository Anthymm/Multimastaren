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
                this.randomize(table)
            }
            this.tables.push(table);
            this.randomize(this.tables)
            }

        },
        randomize(values) {
            let index = values.length;
            let randomIndex;

            while (index != 0) {
                randomIndex = Math.floor(Math.random() * index);
                index--;
                [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
            }
            return values;
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
            if(this.randomNumber === 4 && this.randomNumber2 === 9){
                this.correctAnswer = 'Slut'
            }else if(this.randomNumber2 <= 8){
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
        <h1 class="text">{{ this.tables[this.randomNumber][this.randomNumber2].question}}</h1>
        <input type="number" v-model="userAnswer" /> {{ userAnswer }} <input type="button" @click="onAnswer" value="Svara"/><input type="button" :disabled="nextBtnDisable" @click="nextQuestion" value="Nästa"/> <br/>
        {{ correctAnswer }}        
    </div>
</template>

<style>
</style>
