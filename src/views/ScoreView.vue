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
    <HomeBtn/>
    <div id="testResultText">
        <h1>Du fick {{ userScore }} antal rätt av {{ testLength }}!</h1>
        <h2>Dina Svar: (OBS, lägg in alla svar, nu finns bara det första)</h2>
        <p> {{ tables[0][0].question }} {{ userAnswerArray[0] }}</p>
    </div>

</template>
<style>
#testResultText{
    color: #ffb74b
}
</style>