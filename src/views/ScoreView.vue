<script>
import HomeBtn from "../components/HomeBtn.vue"

export default {
    components: {
        HomeBtn
    },
    created() {
        this.setValues();
    },
    data() {
        return{
            userScore: "",
            tables: [],
            userAnswerArray: [],
            testLength: 0
        }

    },
    methods: {
        setValues(){
            this.userScore =  JSON.parse(localStorage.getItem("userScore"))
            this.tables =  JSON.parse(localStorage.getItem("tables"))
            this.userAnswerArray =  JSON.parse(localStorage.getItem("userAnswerArray")) 
            this.testLength =  JSON.parse(localStorage.getItem("testLength"))
        }
    }
}
</script>
<template>
    <div id="testResultText">
        <HomeBtn/>
        <h1>Du fick {{ userScore }} antal rätt av {{ testLength }}!</h1>
        <h2>Dina Svar:</h2>
        <p v-for="(el, index) in tables[0]">{{ el.question }} {{ userAnswerArray[index] }}</p>
    </div>

</template>
<style>
#testResultText{
    color: #ffb74b;
    width: 750px;
    height: 500px;
    background-color: #2988be;
    border-radius: 10px;
    margin: auto;
}
</style>