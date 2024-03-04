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
            testLength: 0
        }

    },
    methods: {
        setValues() {
            this.userScore = JSON.parse(localStorage.getItem("userScore"))
            this.tables = JSON.parse(localStorage.getItem("tables"))
            this.userAnswerArray = JSON.parse(localStorage.getItem("userAnswerArray"))
            this.testLength = JSON.parse(localStorage.getItem("testLength"))
        }
    }
}
</script>
<template>
    <div id="bgBox">
        <div id="homeBtnBox2">
            <HomeBtn /><h1>Du fick {{ userScore }} rätt av {{ testLength }}!</h1>
        </div>
        <div id="testResultText">
            
            <h2>Dina Svar:</h2>
            <p v-for="(el, index) in tables[0]">{{ el.question }} {{ userAnswerArray[index] }}</p>
            <RestartTestBtn />
        </div>
    </div>
</template>
<style>
#bgBox {
    width: 750px;
    min-height: 500px;
    background-color: #2988be;
    border-radius: 10px;
    margin: auto;
}

#homeBtnBox2 {
    display: flex;
    gap: 6rem;
    align-items: end;
    padding: 5%;
    padding-bottom: 2.5px;
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
