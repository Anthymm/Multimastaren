<script>
// import { getTransitionRawChildren } from "vue";
import HomeBtn from "../components/HomeBtn.vue"
export default {
    components: {
        HomeBtn
    },
    created() {
        this.generateTables();
        console.log(this.tables[0][0].question)
        console.log(this.tables[0][0].answer)
    },
    data() {
        return {
            index: 0,
            tables: [],
            userAnswer: null,
            correctAnswer: null,
            switchBtn: true,
            btnText: "Svara",
            btnDisabled: true,
            inputDisabled: false,
        };
    },
    methods: {
        generateTables() {
            // for (let i = 1; i <= 5; i++) {
            // const table = [];
            // for (let j = 1; j <= 10; j++) {
            //     table.push({ question: `${i} x ${j} =`, answer: i * j });
            //     this.randomize(table)
            // }
            // this.tables.push(table);
            // this.randomize(this.tables)
            // }
            const allQuestions = []
            for (let i = 1; i <= 2; i++) {
                for (let j = 1; j <= 2; j++) {
                    allQuestions.push({ question: `${i} x ${j} =`, answer: i * j })
                }
            }
            this.tables.push(this.randomize(allQuestions))
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
        onAnswer() {
            if (this.userAnswer === this.tables[0][this.index].answer) {
                this.correctAnswer = 'Rätt!'
                this.inputDisabled = true
                this.btnText = "Nästa"
            } else {
                this.correctAnswer = `Fel, rätt svar är: ${this.tables[0][this.index].answer}`
                this.inputDisabled = true
                this.btnText = "Nästa"
            }

            if (this.index === this.tables[0].length - 1) {
                this.btnText = "Done"
                this.inputDisabled = true
                this.btnDisabled = true
            }
            this.switchBtn = false
        },
        nextQuestion() {
            this.userAnswer = null
            this.correctAnswer = null
            // if (this.index === this.tables[0].length - 1) {
            //     this.correctAnswer = 'Done';
            //     this.inputDisabled = true
            //     this.btnDisabled = true
            // } else
            if (this.index < this.tables[0].length - 1) {
                this.index++;
                this.correctAnswer = ''
                this.inputDisabled = false
            }
            this.switchBtn = true
            this.btnText = "Svara"
        },

    },
    watch: {
        userAnswer() {
            if (this.userAnswer >= 1) {
                this.btnDisabled = false
            } else {
                this.btnDisabled = true
            }
        },

    }
};
</script>

<template>
    <div id="questionBox">
        <HomeBtn />
        <h1 class="text">{{ this.tables[0][this.index].question }}</h1>
        <input type="number" v-model="userAnswer" min="0" :disabled="inputDisabled" />
        <div id="btns">
            <input type="button" @click="switchBtn ? onAnswer() : nextQuestion()" :value="btnText"
                :disabled="btnDisabled" />
        </div>

        {{ correctAnswer }}
    </div>
</template>

<style>
#questionBox {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
