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
      <div class="grid">
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
      <div class="start">
        <div class="start-checkbox">
          <label><input type="checkbox" /> <span>Tid</span></label>
          <label><input type="checkbox" /> <span>Ingen Tid</span></label>
        </div>
        <StartTest />
      </div>
    </div>
  </div>
</template>
<style>
body {
  /* background-color: #03273b; */
  font-family: jaldi;
}

.box {
  width: 750px;
  height: 500px;
  background-color: #2988be;
  border-radius: 10px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
}

.grid {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.start {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  color: #955a00;
  text-decoration: none;
  font-weight: bold;
  border-radius: 17px;
  padding: 1rem 3rem;
}

.start-checkbox {
  margin-bottom: 10%;
}

.start:focus {
  text-decoration: none;
  color: #955a00;
  font-size: 1.7rem;
}

.start :hover {
  text-decoration: none;
  color: #955a00;
  font-size: 1.7rem;
}

/*.start label:hover {
  color: inherit;
  font-size: inherit;
}*/

.start input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 10px solid #bcd7e7;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
}

.start label {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.start input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 10px solid #bcd7e7;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
}

.start input[type="checkbox"]:checked::before {
  content: "x";
  margin-bottom: 0.5rem;
  font-size: 3.5rem;
  color: #2988be;
  font-weight: bold;
}

.grid .subgrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.grid .subgrid label {
  display: flex;
  align-items: center;
}

.grid .subgrid input[type="checkbox"] {
  margin-right: 5px;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 10px solid #bcd7e7;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid .subgrid input[type="checkbox"]:checked::before {
  content: "x";
  margin-bottom: 0.5rem;
  font-size: 3.5rem;
  color: #2988be;
  font-weight: bold;
}

#remove,
#all {
  background-color: #bcd7e7;
  color: #955a00;
  font-weight: bold;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 20%;
  padding-right: 10px;
  margin-top: 10%;
}

#all :hover {
  text-decoration: none;
  font-size: 1.7rem;
}

span {
  font-size: 1.5rem;
  color: #ffb74b;
  font-weight: bold;
  margin: auto;
}

#tabell {
  color: #ffb74b;
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 10%;
}
</style>
