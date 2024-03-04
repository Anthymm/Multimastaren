<template>
    {{ countDown }}
</template>

<script>
import router from "../router";
export default {
    data() {
        return {
            countDown: 3
        }
    },
    methods: {
        countDownTimer() {
            if (this.countDown > 0) {
                setTimeout(() => {
                    this.countDown -= 1
                    this.countDownTimer()
                }, 850)
            } else{
                router.push("/test")
            }
        }
    },
    created() {
        this.countDownTimer()
    }
}
</script>
<style>
*{
    color: #ffb74b;
}
</style>
