let randomNumber = Math.round(Math.random() * 2);
console.log(randomNumber);

const player = document.querySelector("#spelare");
const computer = document.querySelector("#dator");
const result = document.querySelector("#resultat");
const submit = document.querySelector("#pname");

const sten = document.querySelector("#rock");
const sax = document.querySelector("#sax");
const pose = document.querySelector("#paper");

let spelare;
let datorsumma = 0;
let spelaresumma = 0;
let namn;

submit.addEventListener("click", skrivnamn);
function skrivnamn(event) {
  event.preventDefault();
  const el = document.createElement("h1");
  document.body.appendChild(el);
  const textinput = document.querySelector("#name-input");
  player.innerText = textinput.value;
  namn = textinput.value;
  textinput.value = " ";
}

container.addEventListener("click", spel);
function spel(event) {
  if (event.target.tagName == "BUTTON") {
    randomNumber = Math.round(Math.random() * 2);
    console.log(randomNumber);
    if (event.target.id == "rock") {
      spelare = event.target.innerText;
      const ele = document.createElement("h1");
      document.body.appendChild(ele);
      player.innerText = (`${namn}`+":"+ spelare );

      if (randomNumber == 0) {
        computer.innerText = "Cpmputer: Sten";
        result.innerText = "Result: Lika";

      } else if (randomNumber == 1) {
        computer.innerText = "Cpmputer: pose";
        result.innerText = "Result: Dator vann";
        datorsumma++;

      } else if (randomNumber == 2) {
        computer.innerText = "Cpmputer: sax";
        result.innerText = "Result: Spelare vann";
        spelaresumma++;
      }
    } else if (event.target.id == "paper") {
      spelare = event.target.innerText;
      const elem = document.createElement("h1");
      document.body.appendChild(elem);
      player.innerText =  (`${namn}`+":"+ spelare );

      if (randomNumber == 0) {
        computer.innerText = "Cpmputer: Sten";
        result.innerText = "Result: Spelare vann";
        spelaresumma++;
        
      } else if (randomNumber == 1) {
        computer.innerText = "Cpmputer: pose";
        result.innerText = "Result: Lika";

      } else if (randomNumber == 2) {
        computer.innerText = "Cpmputer: sax";
        result.innerText = "Result: Dator vann";
        datorsumma++;
      }
    } else if (event.target.id == "sax") {
      spelare = event.target.innerText;
      const eleme = document.createElement("h1");
      document.body.appendChild(eleme);
      player.innerText = (`${namn}`+":"+ spelare );

      if (randomNumber == 0) {
        computer.innerText = "Cpmputer: Sten";
        result.innerText = "Result: Dator vann";
        datorsumma++;

      } else if (randomNumber == 1) {
        computer.innerText = "Computer: pose";
        result.innerText = "Result: spelare vann";
        spelaresumma++;

      } else if (randomNumber == 2) {
        computer.innerText = "Cpmputer: sax";
        result.innerText = "Result: Lika";
      }
    }
    document.querySelectorAll("h2")[0].innerText = `Computer :  ${datorsumma}`;
    document.querySelectorAll("h2")[1].innerText = `${namn} :  ${spelaresumma}`;
    setTimeout(function(){
      if (datorsumma == 3) {
        datorsumma = 0;
        alert(' Dator vann spelet')
        
        location.reload(true);
      } else if (spelaresumma == 3) {
        spelaresumma = 0;
        alert(` ${namn} vann spelet`)
        location.reload(true);
      }

    },20)
    
  }
}
