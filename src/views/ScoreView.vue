<script>
import HomeBtn from "../components/HomeBtn.vue"
import RestartTestBtn from "../components/RestartTestBtn.vue";
export default {
    components: {
        HomeBtn,
        RestartTestBtn
    },
    created() {
        this.setValues();
    },
    data() {
        return {
            userScore: "",
            tables: [],
            userAnswerArray: [],
            testLength: 0,
            timer: 0
        }

    },
    methods: {
        setValues() {
            this.userScore = JSON.parse(localStorage.getItem("userScore"))
            this.tables = JSON.parse(localStorage.getItem("tables"))
            this.userAnswerArray = JSON.parse(localStorage.getItem("userAnswerArray"))
            this.testLength = JSON.parse(localStorage.getItem("testLength"))
            this.timer = JSON.parse(localStorage.getItem("timer"))
        }
    }
}
</script>
<template>
    <div id="bgBox">
        <div id="homeBtnBox2">
            <HomeBtn />
            <h1>Du fick {{ userScore }} rätt av {{ testLength }}!</h1>
        </div>
        <div id="testResultText">
            <h2>Dina Svar:</h2>
            <div id="resultContainer">
                <div>
                    <!-- Första 5 svaren -->
                    <p v-for="(el, index) in tables[0].slice(0, 5)">{{ el.question }} {{ userAnswerArray[index] }}</p>
                </div>
                <div>
                    <!-- Sista 5 svaren -->
                    <p v-for="(el, index) in tables[0].slice(5)">{{ el.question }} {{ userAnswerArray[index + 5] }}</p>
                </div>
            </div>
            <p v-if="timer > 0">Tid: {{ timer }} sekunder</p>

            <RestartTestBtn />
        </div>
    </div>
</template>
<style>
#resultContainer {
    display: flex;
    justify-content: space-around;
    width: 100%;
    line-height: 25px;

}

#bgBox {
    width: 750px;
    min-height: 500px;
    background-color: #2988be;
    border-radius: 10px;
    margin: auto;
    padding-bottom: 20px;
}

#homeBtnBox2 {
    display: flex;
    gap: 18%;
    align-items: end;
    padding: 4vh;
    padding-bottom: 5px;
}

#homeBtnBox2 h1 {
    font-size: 2rem;
}

#homeLink {
    display: flex;
    gap: 60%;
    /* align-items: end; */
    /* padding: 5vh; */

}

#testResultText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffb74b;
    /* margin-bottom: 20px; */
}
</style>
