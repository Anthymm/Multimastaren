<script>
import HomeBtn from "../components/HomeBtn.vue";
import ScoreBtn from "../components/ScoreBtn.vue";
import RestartTestBtn from "../components/RestartTestBtn.vue";

export default {
  components: {
    HomeBtn,
    ScoreBtn,
    RestartTestBtn,
  },
  created() {
    this.generateTables();
    this.checkTimer();
    if (this.timeSelected) {
      this.startTimer();
    }
  },
  mounted() {
    this.focusInput("numberInput");
  },
  data() {
    return {
      timeSelected: false,
      timer: 0,
      index: 0,
      tables: [],
      userAnswer: null,
      correctAnswer: null,
      switchBtn: true,
      btnText: "Svara",
      btnDisabled: true,
      inputDisabled: false,
      pColor: "#000",
      amountQuestionAnswered: 1,
      testLength: 10, //Byt längd på test
      userScore: 0,
      showScoreBtn: false,
      userAnswerArray: [],
    };
  },
  methods: {
    checkTimer() {
      this.timeSelected = JSON.parse(localStorage.getItem("timeSelected"));
    },
    startTimer() {
      if (this.timeSelected) {
        this.timerInterval = setInterval(() => {
          this.timer++;
        }, 1000);
      }
    },
    stopTimer() {
      clearInterval(this.timerInterval);
    },

    generateTables() {
      const allQuestions = [];

      let chosenTables = JSON.parse(localStorage.getItem("chosenTables"));

      chosenTables.forEach((element) => {
        for (let j = 1; j <= 10; j++) {
          allQuestions.push({
            question: `${element} x ${j} =`,
            answer: element * j,
          });
        }
      });
      this.tables.push(this.randomize(allQuestions));
    },
    randomize(values) {
      let index = values.length;
      let randomIndex;

      while (index != 0) {
        randomIndex = Math.floor(Math.random() * index);
        index--;
        [values[index], values[randomIndex]] = [
          values[randomIndex],
          values[index],
        ];
      }
      while (values.length > this.testLength) {
        values.pop();
      }
      return values;
    },
    focusInput(field) {
      this.$refs[field].focus();
    },
    onAnswer() {
      if (this.userAnswer >= 1 && this.userAnswer <= 100) {
        this.$nextTick(() => {
          this.focusInput("buttonInput");
        });
        if (this.userAnswer === this.tables[0][this.index].answer) {
          this.correctAnswer = "Rätt!";
          this.inputDisabled = true;
          this.btnText = "Nästa";
          this.pColor = "limegreen";
          this.userScore++;
          this.userAnswerArray.push(this.userAnswer + " Rätt");
        } else {
          this.correctAnswer = `Fel, rätt svar är: ${
            this.tables[0][this.index].answer
          }`;
          this.inputDisabled = true;
          this.btnText = "Nästa";
          this.pColor = "#AC0000";
          this.userAnswerArray.push(this.userAnswer + " Fel");
        }

        if (this.index === this.tables[0].length - 1) {
          this.btnText = "Klar";
          this.inputDisabled = true;
          this.btnDisabled = true;
          this.finishedTestSheet();
        }
        this.switchBtn = false;
      }
    },
    nextQuestion() {
      this.userAnswer = null;
      this.correctAnswer = null;
      this.$nextTick(() => {
        this.focusInput("numberInput");
      });
      if (this.index < this.tables[0].length - 1) {
        this.index++;
        this.correctAnswer = "";
        this.inputDisabled = false;
      }
      this.switchBtn = true;
      this.btnText = "Svara";
      this.amountQuestionAnswered++;
    },
    finishedTestSheet() {
      this.showScoreBtn = true;
      this.stopTimer();
    },
    sendValues() {
      localStorage.setItem("userScore", JSON.stringify(this.userScore));
      localStorage.setItem("tables", JSON.stringify(this.tables));
      localStorage.setItem(
        "userAnswerArray",
        JSON.stringify(this.userAnswerArray)
      );
      localStorage.setItem("testLength", JSON.stringify(this.testLength));
      localStorage.setItem("timer", JSON.stringify(this.timer));
    },
    reloadPage() {
      window.location.reload();
    },
  },
  watch: {
    userAnswer() {
      if (this.userAnswer >= 1 && this.userAnswer <= 100) {
        this.btnDisabled = false;
      } else {
        this.btnDisabled = true;
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
    <div id="questionContainer">
      <h1 class="questionText">{{ this.tables[0][this.index].question }}</h1>
      <input
        type="number"
        id="userAnswer"
        v-model="userAnswer"
        min="0"
        max="999"
        :disabled="inputDisabled"
        ref="numberInput"
        @keyup.enter="switchBtn ? onAnswer() : nextQuestion()"
      />
      <input
        type="button"
        id="AnswerAndNextQuestionBtn"
        @click="switchBtn ? onAnswer() : nextQuestion()"
        @keydown.enter="switchBtn ? onAnswer() : nextQuestion()"
        :value="btnText"
        :disabled="btnDisabled"
        ref="buttonInput"
      />
      <p>{{ correctAnswer }}</p>
      <div id="afterTestbtnContainer">
        <div id="afterScoreBtn">
          <ScoreBtn @click="sendValues" v-if="showScoreBtn" />
        </div>
        <div id="afterResultBtn">
          <RestartTest v-if="showScoreBtn" />
          
          <RestartTestBtn @click="reloadPage" v-if="showScoreBtn" />
        </div>
      </div>
    </div>
    <div id="timerQuestiontrackerContainer">
      <p class="timer">Fråga {{ amountQuestionAnswered }} av {{ testLength }}</p>
    <div>
      <p class="timer">
        Fråga {{ amountQuestionAnswered }} av {{ testLength }}
      </p>
      <h2 v-if="timeSelected" class="timer">Tid : {{ timer }}</h2>
    </div>
  </div>
</template>

<style>
.bgBoxTest {
  width: 750px;
  min-height: 500px;
  background-color: #2988be;
  border-radius: 10px;
  margin: auto;
  position: relative;
}
#timerQuestiontrackerContainer {
  display: flex;
  height: 100%;
  position: absolute; 
  bottom: 0;
  align-items:end;
}
.timer {
  padding-left: 2rem;
  text-align: left;
  padding-left: 2rem;
  font-size: 25px;
  color: #ffb74b;
  line-height: 20px;
}

#afterTestbtnContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-top: 40px;
}

.questionText {
  color: #ffb74b;
}
.text {
  color: #ffb74b;
}
p {
  font-size: 4vh;
  color: v-bind("pColor");
}
#userAnswer {
  text-align: center;
  width: 10vh;
  font-size: 4vh;
  color: #03273b;
}

#homeBtnBox {
  display: flex;
  gap: 60%;
  padding: 5vh;
}

#homeBtnBox p {
  font-size: 1.5rem;
  color: #03273b;
}

#AnswerAndNextQuestionBtn {
  margin-top: 3vh;
  font-size: 1.5rem;
  padding: 0 0.5rem;
  color: #03273b;
}

#questionContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2988be;
}

input[type="number"] {
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

  #questionContainer {
    margin-top: 30%;
  }
}
</style>
