<script>
import StartTestBtn from "../components/StartTestBtn.vue";
import StartTestTimeBtn from "../components/StartTestTimeBtn.vue";

export default {
  components: {
    StartTestBtn,
    StartTestTimeBtn

  },
  data() {
    return {
      selectedTables: [],
      timeSelected: false
    };

  },
  methods: {
    clearBoxes() {
      this.selectedTables = [];
    },
    selectAllBoxes() {
      this.selectedTables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    },
    sendValues() {
      localStorage.setItem("chosenTables", JSON.stringify(this.selectedTables));
      localStorage.setItem("timeSelected", JSON.stringify(this.timeSelected));

    },
  },
};
</script>
<template>
  <div class="box">
    <h1 id="description">Välj nedan vilken tabell du vill öva på!</h1>
    <div class="container">
      <div class="grid">
        <h2 id="tabell">Välj tabeller:</h2>
        <div class="subgrid">
          <div>
            <label>
              <input type="checkbox" value="1" v-model="selectedTables" />
              <span>1</span>
            </label>
            <label>
              <input type="checkbox" value="2" v-model="selectedTables" />
              <span>2</span></label>
            <label>
              <input type="checkbox" value="3" v-model="selectedTables" />
              <span>3</span>
            </label>
            <label>
              <input type="checkbox" value="4" v-model="selectedTables" />
              <span>4</span>
            </label>
            <label>
              <input type="checkbox" value="5" v-model="selectedTables" />
              <span>5</span>
            </label>
            <button id="remove" @click="clearBoxes">Rensa</button>
          </div>
          <div>
            <label><input type="checkbox" value="6" v-model="selectedTables" />
              <span>6</span></label>
            <label><input type="checkbox" value="7" v-model="selectedTables" />
              <span>7</span></label>
            <label><input type="checkbox" value="8" v-model="selectedTables" />
              <span>8</span></label>
            <label><input type="checkbox" value="9" v-model="selectedTables" />
              <span>9</span></label>
            <label><input type="checkbox" value="10" v-model="selectedTables" />
              <span>10</span></label>
            <button id="selectAll" @click="selectAllBoxes">Alla</button>
          </div>
        </div>
      </div>
        <div class="start">
          <div class="start-checkbox">
            <div id="SwitchContainer">
              <h2 id="ejTidText">Ingen tid</h2>
              <label class="switch">
            <input type="checkbox" v-model="timeSelected">
            <span class="slider round">
            </span>
          </label>
          <h2 id="tidText">Tid</h2>
          </div>
        </div>
        <div>
          <template v-if="timeSelected">
            <StartTestTimeBtn @click="sendValues" :class="{ disabled: this.selectedTables.length === 0 }"/>
          </template>
          <template v-else>
            <StartTestBtn @click="sendValues" :class="{ disabled: this.selectedTables.length === 0 }"/>
          </template>
        </div>

        </div>
        <StartTestTime  v-if="timeSelected" @click="sendValues" :class="{ disabled: this.selectedTables.length === 0 }"/>
        <StartTest v-else @click="sendValues" :class="{ disabled: this.selectedTables.length === 0 }" />

      </div>
    </div>
</template>
<style>
body {
  font-family: jaldi;

}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.box {
  width: 750px;
  height: 500px;
  background-color: #2988be;
  border-radius: 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#description {
  color: #ffb74b;
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 2%;
}

.container {

  display: grid;
  grid-template-columns: 1fr 1fr;

}

/* Switch styling */
#SwitchContainer {
  padding-bottom: 20px;
  display: flex;
  gap: 5px;
}

#tidText {
  margin-left: -20px;
  color: #ffb74b;
}

#ejTidText {
  color: #ffb74b;
}

/* Switch styling */
.grid {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.start {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
}



.start label {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.start input[type="checkbox"]:checked:after {
  font-family: Arial, Helvetica, sans-serif;
  content: "X";
  font-size: 33px;
  font-weight: bolder;
  margin-top: 2px;
  color: #2988be;
}

.grid .subgrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.grid .subgrid label {
  -webkit-appearance: initial;
  appearance: initial;
  display: flex;
  align-items: center;
}

.grid .subgrid input[type="checkbox"] {
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-appearance: initial;
  appearance: initial;
  margin-right: 5px;
  width: 20px;
  height: 20px;
  border: 10px solid #bcd7e7;
  border-radius: 4px;
}

.grid .subgrid input[type="checkbox"]:checked::after {
  font-family: Arial, Helvetica, sans-serif;
  content: "X";
  font-size: 33px;
  font-weight: bolder;
  margin-top: 3px;
  color: #2988be;
}

#remove,
#selectAll {
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

span {
  font-size: 1.5rem;
  color: #ffb74b;
  font-weight: bold;
  margin: 0;
}

#tabell {
  color: #ffb74b;
  font-size: 1.7rem;
  font-weight: bold;
  padding-bottom: 2%;
}


/* switch för tid/ej tid*/
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;


}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;

}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: #ffb74b;
}

input:focus+.slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

/*HÄR SLUTAR SWITCH*/

@media (max-width: 770px) {
  .box {
    width: 300px;
    height: 550px;
    flex-direction: column;

  }

  #description {
    display: flex;
    text-align: center;
    font-size: 1.3rem;
    /* padding-top: 20%; */
    margin-top: 20%;
  }

  .container {
    grid-template-columns: 1fr;
    height: 500px;
  }

  .start {
    padding-bottom: 50px;
    margin-top: 20px;
    margin-right: 0px;
  }

  .grid {
    padding-bottom: 0;
  }
}
</style>
