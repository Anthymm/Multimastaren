<script>
import CountDown from '../components/CountDown.vue';

export default {
    components: {
        CountDown,
    },
    data() {
        return {
        }
    },
}
</script>
<template>
    <div id="countDownDiv">
        <h1 class="countDownTimer">Gör dig redo!</h1>
        <h2>
            <CountDown />
        </h2>
    </div>
</template>
<style>
#countDownDiv {
    margin: 20vh auto;
    padding: 4vh 2vh;
    width: 30%;
    background-color: #2988be;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 25px;
}

.countDownTimer {
    color: #ffb74b;
}
@media (max-width: 750px) {
    #countDownDiv{
        width: 50%;
    }

   
}
</style>
