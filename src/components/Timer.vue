<template>
    <h1>{{ countDown }}</h1>
</template>

<script>
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
                }, 1000)
            }
        }
    },
    created() {
        this.countDownTimer()
    }
}
</script>
<style>
h1 {
    color: whitesmoke;
}
</style>
