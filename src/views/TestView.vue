<script>
// import { getTransitionRawChildren } from "vue";
import HomeBtn from "../components/HomeBtn.vue"
export default {
    components: {
        HomeBtn
    },
    created() {
        this.generateTables();
    },
    mounted() {
        this.focusInput('numberInput');
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
            pColor: "#000"
        };
    },
    methods: {
        generateTables() {
            const allQuestions = []

            let chosenTables = JSON.parse(localStorage.getItem("chosenTables"))

            chosenTables.forEach(element => {
                for (let j = 1; j <= 10; j++) {
                    allQuestions.push({ question: `${element} x ${j} =`, answer: element * j })
                }
            });
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
            while (values.length > 5) {
                values.pop()
            }
            return values;
        },
        focusInput( field) {
            this.$refs[field].focus();
            console.log('focus has been activated')
    },
        onAnswer() {
            if (this.userAnswer >= 1 && this.userAnswer <= 100){
                this.$nextTick(() => {
                    this.focusInput('buttonInput');
                });
                if (this.userAnswer === this.tables[0][this.index].answer) {
                    this.correctAnswer = 'Rätt!'
                    this.inputDisabled = true
                    this.btnText = "Nästa"
                    this.pColor = "limegreen"
                } else {
                    this.correctAnswer = `Fel, rätt svar är: ${this.tables[0][this.index].answer}`
                    this.inputDisabled = true
                    this.btnText = "Nästa"
                    this.pColor = "#AC0000"
                }
    
                if (this.index === this.tables[0].length - 1) {
                    this.btnText = "Done"
                    this.inputDisabled = true
                    this.btnDisabled = true
                }
                this.switchBtn = false 
            }
        },
        nextQuestion() {
                this.userAnswer = null
                this.correctAnswer = null
                this.$nextTick(() => {
                    this.focusInput('numberInput');
                });
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
            if (this.userAnswer >= 1 && this.userAnswer <= 100) {
                this.btnDisabled = false
            } else {
                this.btnDisabled = true
            }
        },

    },
};
</script>

<template>
    <div class="bgBoxTest">
        <div id="homeBtnBox">
            <HomeBtn />
        </div>
        <div id="questionBox">
            <h1 class="text">{{ this.tables[0][this.index].question }}</h1>
            <input type="number" id="userAnswer" 
                v-model="userAnswer" min="0" max="999" 
                :disabled="inputDisabled" 
                ref="numberInput"
                @keyup.enter="switchBtn ? onAnswer() : nextQuestion()"/>
                
            <input type="button" id="btnAnswer" 
                @click="switchBtn ? onAnswer() : nextQuestion()" 
                @keydown.enter="switchBtn ? onAnswer() : nextQuestion()"
                
                :value="btnText" 
                :disabled="btnDisabled" 
                ref="buttonInput"/>
            <p>{{ correctAnswer }}</p>
        </div>
    </div>
</template>

<style>
p {
    font-size: 4vh;
    color: v-bind('pColor');
    
}

#userAnswer {
    text-align: center;
    width: 10vh;
    font-size: 4vh;
}

#homeBtnBox {
    padding: 5vh;
}

#btnAnswer {
    margin-top: 3vh;
    font-size: 1.5rem;
    padding: 0 0.5rem;
}

.bgBoxTest {
    width: 750px;
    height: 500px;
    background-color: #2988be;
    border-radius: 10px;
    margin: auto;

}

#questionBox {
    margin: auto;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2988BE;
}

input[type=number] {
    -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

@media (max-width: 750px) {
    .bgBoxTest {
        width: 300px;
        height: 80vh;
    }

    #questionBox {
        margin-top: 30%;
    }
}
</style>
