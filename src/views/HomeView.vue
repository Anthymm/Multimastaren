<script>
import StartTest from "../components/StartTest.vue";

export default {
  components: {
    StartTest,
  },
};
</script>
<template>
  <div class="box">
    <div class="container">
      <div class="left">
        <h2>Välj tabeller:</h2>
        <div class="subgrid">
          <div>
            <label><input type="checkbox" /> 1</label>
            <label><input type="checkbox" /> 2</label>
            <label><input type="checkbox" /> 3</label>
            <label><input type="checkbox" /> 4</label>
            <label><input type="checkbox" /> 5</label>
            <button>Rensa</button>
          </div>
          <div>
            <label><input type="checkbox" /> 6</label>
            <label><input type="checkbox" /> 7</label>
            <label><input type="checkbox" /> 8</label>
            <label><input type="checkbox" /> 9</label>
            <label><input type="checkbox" /> 10</label>
            <button>Alla</button>
          </div>
        </div>
      </div>
      <div class="right">
        <li><StartTest /></li>
      </div>
    </div>
  </div>
</template>
<style>
body {
  background-color: #03273b;
  font-family: jaldi;
}
.box {
  width: 750px;
  height: 500px;
  background-color: #2988be;
  border-radius: 10px;
  margin: auto;
  display: block;
  margin-top: 100px;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
}

.left {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.right {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.left .subgrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.left .subgrid label {
  display: flex;
  align-items: center;
}

.left .subgrid input[type="checkbox"] {
  margin-right: 5px;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #666;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left .subgrid input[type="checkbox"]:checked::before {
  content: "x";
  font-size: 14px;
  color: #666;
}
.left .buttons {
  margin-top: 20px;
}

.left .buttons button {
  display: block;
  margin-bottom: 5px;
}
</style>
