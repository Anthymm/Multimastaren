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
        <h2 id="tabell">Välj tabeller:</h2>
        <div class="subgrid">
          <div>
            <label><input type="checkbox" /><span>1</span> </label>
            <label><input type="checkbox" /> <span>2</span></label>
            <label><input type="checkbox" /> <span>3</span></label>
            <label><input type="checkbox" /> <span>4</span></label>
            <label><input type="checkbox" /> <span>5</span></label>
            <button id="remove">Rensa</button>
          </div>
          <div>
            <label><input type="checkbox" /> <span>6</span></label>
            <label><input type="checkbox" /> <span>7</span></label>
            <label><input type="checkbox" /> <span>8</span></label>
            <label><input type="checkbox" /> <span>9</span></label>
            <label><input type="checkbox" /> <span>10</span></label>
            <button id="all">Alla</button>
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
  display: flex;
  flex-direction: column;
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

#remove {
  background-color: #BCD7E7;
  color: #955A00;
  font-weight: bold;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 20%;
  padding-right: 10px;
  margin-top: 10%;
}

#all {
  background-color: #BCD7E7;
  color: #955A00;
  font-weight: bold;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 20%;
  margin-top: 10%;
}

span{
  font-size: 1.5rem;
  color: #a36200;
  font-weight: bold;
  margin: auto;
}

#tabell{
  color: #FFB74B;
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 10%
}
</style>
