<script>
import HomeBtn from "../components/HomeBtn.vue";
import ScoreBtn from "../components/ScoreBtn.vue";
import RestartTest from "../components/RestartTest.vue"

export default {
  components: {
    HomeBtn,
    ScoreBtn,
    RestartTest

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
      timer: 10, //Byt tid på timer
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
      testLength: 3, //Byt längd på test
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
          if (this.timer > 0) {
            this.timer--;
          } else {// Detta händer när timern når 0
            clearInterval(this.timerInterval); 
            this.btnText = "Slut på Tid";
            this.inputDisabled = true;
            this.btnDisabled = true;
            this.finishedTestSheet();
          }
        }, 1000);
      }
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
          this.userAnswerArray.push(this.userAnswer+ " Fel");
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
    },
    sendValues() {
      localStorage.setItem("userScore", JSON.stringify(this.userScore));
      localStorage.setItem("tables", JSON.stringify(this.tables));
      localStorage.setItem(
        "userAnswerArray",
        JSON.stringify(this.userAnswerArray)
      );
      localStorage.setItem("testLength", JSON.stringify(this.testLength));
      //Om vi räknar uppåt -> Skicka tiden så den kan stå i Result.
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
    <div v-if="timeSelected" class="timer">
      <p>Tid kvar: {{ timer }}</p>
    </div>
    <div id="homeBtnBox">
      <HomeBtn />
      <p>Fråga {{ amountQuestionAnswered }} av {{ testLength }}</p>
    </div>
    <div id="questionBox">
        <h1 class="text">{{ this.tables[0][this.index].question }}</h1>
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
          id="btnAnswer"
          @click="switchBtn ? onAnswer() : nextQuestion()"
          @keydown.enter="switchBtn ? onAnswer() : nextQuestion()"
          :value="btnText"
          :disabled="btnDisabled"
          ref="buttonInput"
        />
        <p>{{ correctAnswer }}</p>
        <div id="bigBtn">
      <div id="afterTestBtns">
        <ScoreBtn @click="sendValues" v-if="showScoreBtn" /> 
        </div>
        <div id="afterTestBtn">
            <RestartTest v-if="showScoreBtn"/>
        </div>
    </div>
    </div>
  </div>
</template>

<style>
#afterTestBtns{
  display: flex;
  justify-content: center;
    margin-bottom: 20px;
}
#afterTestBtn{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

}
.timer {
  text-align: left;
  margin-top: 10px;
  font-size: 2vh;
  color: #fff;
  padding-top: 10px;
  padding-left: 10px;
}
.timer p {
  font-size: 18px;
  margin-bottom: 0;
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

#btnAnswer {
  margin-top: 3vh;
  font-size: 1.5rem;
  padding: 0 0.5rem;
  color: #03273b;
}

.bgBoxTest {
  width: 750px;
  height: 550px;
  background-color: #2988be;
  border-radius: 10px;
  margin: auto;
}

#questionBox {
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

  #questionBox {
    margin-top: 30%;
  }
}
</style>
