const input = document.querySelector("#input-number")
const buttonCheck = document.querySelector(".check")
const buttonAgain = document.querySelector(".again")
let numberRandom = Math.round(Math.random() * 10)
const screenOne = document.querySelector(".appOne")
const screenTwo = document.querySelector(".appTwo")
let attempts = 1

buttonCheck.addEventListener("click", numberCheck)
buttonAgain.addEventListener("click", temptsAgain)
document.addEventListener("keydown", (event) => {
  if(event.key === "Enter" && screenOne.classList.contains("hide")) {
    temptsAgain()
  }

  if(event.key === "Enter" && typeof Number(input.value) == "number") {
    numberCheck()
  }
}) 

function toggleScreen() {
  screenOne.classList.toggle("hide")
  screenTwo.classList.toggle("hide")
}

function numberCheck() {
  if (Number(input.value) >= 0 && Number(input.value) <= 10) {
    if (Number(input.value) === numberRandom) {
      toggleScreen()

      screenTwo.querySelector("p")
        .innerText = `acertou em ${attempts} tentativas!`
    }
  } else {
    alert("Número inválido! Digite um número entre 0 e 10.")
    attempts -= 1
  }

  if (Number(input.value) == "" && screenOne.classList.contains("hide")) {
    alert("Campo vazio! Insira um número")
    attempts -= 1
  }
  
  input.value = ""
  attempts++
}

function temptsAgain() {
  toggleScreen();
  numberRandom = Math.round(Math.random() * 10)
  attempts = 1
}