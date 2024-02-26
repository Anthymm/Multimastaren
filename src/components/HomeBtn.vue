<script>
import { RouterLink } from 'vue-router';
export default {
    components: { RouterLink }
}
</script>
<template>
    <RouterLink to="/"><i class="bi bi-house-door-fill"></i></RouterLink>
</template>
<style>
a {
    background-color: #BCD7E7;
}

i {
    /* color: #000; */
    /* color: #955a00; */
    /* color: #2988BE; */
    color: #03273b;
    font-size: 2rem;
    border-radius: 17px;
}
</style>
