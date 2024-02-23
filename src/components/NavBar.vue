<script>
export default {
  created() {
    addEventListener("DOMContentLoaded", () => {
      this.drawNavObjects()
    })
  },
  data() {
    return { amount: 5 }
  },
  methods: {
    drawNavObjects() {
      let nav = document.querySelector("nav")
      let takenPositionX = [Int16Array]
      let takenPositionY = [Int16Array]
      let xCoord, yCoord
      for (let i = 1; i <= this.amount; i++) {
        let cross = document.createElement("p")
        cross.setAttribute("class", "object")
        cross.textContent = "X"
        xCoord = Math.floor(Math.random() * 75) + (i * 3)
        yCoord = Math.floor(Math.random() * 12)
        if (takenPositionX != []) {
          for (let j = takenPositionX.length - 1; j <= takenPositionX.length; j++) {
            if (xCoord == takenPositionX[j]) {
              continue
            } else if (xCoord != takenPositionX[j]) {
              takenPositionX.push(xCoord)
              break
            }
          }
        } else {
          takenPositionX.push(xCoord)
        }

        if (takenPositionY != []) {
          for (let j = takenPositionY.length - 1; j <= takenPositionY.length; j++) {
            if (yCoord == takenPositionY[j]) {
              continue
            } else if (yCoord != takenPositionY[j]) {
              takenPositionY.push(yCoord)
              break
            }
          }
        } else {
          takenPositionY.push(yCoord)
        }

        cross.style.left = xCoord + "%"
        cross.style.top = yCoord + "%"
        cross.style.rotate = Math.floor(Math.random() * 360) + "deg"
        nav.appendChild(cross)
      }
      for (let i = 1; i <= this.amount; i++) {
        let circle = document.createElement("p")
        circle.setAttribute("class", "object")
        circle.textContent = "O"
        let xCoord = Math.floor(Math.random() * 75) + (i * 1)
        let yCoord = Math.floor(Math.random() * 12)
        if (takenPositionX != []) {
          for (let j = takenPositionX.length - 1; j <= takenPositionX.length; j++) {
            if (xCoord == takenPositionX[j]) {
              continue
            } else if (xCoord != takenPositionX[j]) {
              takenPositionX.push(xCoord)
              break
            }
          }
        } else {
          takenPositionX.push(xCoord)
        }

        if (takenPositionY != []) {
          for (let j = takenPositionY.length - 1; j <= takenPositionY.length; j++) {
            if (yCoord == takenPositionY[j]) {
              continue
            } else if (yCoord != takenPositionY[j]) {
              takenPositionY.push(yCoord)
              break
            }
          }
        } else {
          takenPositionY.push(yCoord)
        }

        circle.style.left = xCoord + "%"
        circle.style.top = yCoord + "%"
        circle.style.rotate = Math.floor(Math.random() * 360) + "deg"
        nav.appendChild(circle)
      }
    }
  },
  components: { NavBar }
}
</script>

<template>
  <nav>
    <div>
      <h1>MultiMästaren</h1>
      <h2>Maximera din kunskap, mästra din framgång!</h2>
    </div>
  </nav>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Jaldi", sans-serif;
}

:root {
  --nav-color: #1971A3;
  --text-color: #FFB74B;
  --object-color: #4989ad;
}

nav {
  height: 20vh;
  background-color: #1971A3;
  width: 100vw;
}

nav div {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--text-color);
  font-size: 4.5vw;
  line-height: 175%;
  user-select: none;
  position: relative;
  z-index: 2;
  overflow: hidden;
}

nav div h2 {
  font-size: 1.75vw;
  margin-top: -4%;
}

.object {
  color: var(--object-color);
  position: absolute;
  font-size: 10vw;
  z-index: 0;
  line-height: 10%;
}

@media screen and (max-width: 480px) {
  nav div {
    font-size: 10vw;
    line-height: 150%;
  }

  nav div h2 {
    font-size: 4vw;
  }
}
</style>
