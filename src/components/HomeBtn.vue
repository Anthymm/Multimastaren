<script>
import { RouterLink } from 'vue-router';
export default {
    components: { RouterLink }
}
</script>
<template>
    <RouterLink id="homeLink" to="/"><i class="bi bi-house-door-fill"></i></RouterLink>
</template>
<style>
#homeLink{
    color: #955a00;
  font-size: 1.5rem;
  text-decoration: none !important;
  background-color: #bcd7e7;
  padding: 0.5rem 2rem;
  text-align: center;
  border-radius: 17px;
}


i {
    color: #03273b;
    /* font-size: 2rem; */
    /* border-radius: 17px; */
}
</style>
