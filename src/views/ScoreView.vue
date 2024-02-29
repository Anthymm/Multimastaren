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
    <div id="bgBox">
        <div id="homeBtnBox">
          <HomeBtn/>  
        </div>
        <div id="testResultText">
            <h1>Du fick {{ userScore }} rätt av {{ testLength }}!</h1>
            <h2>Dina Svar:</h2>
            <p v-for="(el, index) in tables[0]">{{ el.question }} {{ userAnswerArray[index] }}</p>
        </div>
    </div>

</template>
<style>
#bgBox{
    width: 750px;
    height: 500px;
    background-color: #2988be;
    border-radius: 10px;
    margin: auto;
}

#homeBtnBox {
    display: flex;
    gap: 60%;
    padding: 5vh;
}
#testResultText{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffb74b;
}
</style>