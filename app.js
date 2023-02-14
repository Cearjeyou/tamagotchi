const buttonStart = document.getElementById('start');
const lineLife = document.getElementById('progress-life');
const lineSleep = document.getElementById('progress-sleep');
const lineFood = document.getElementById('progress-food');
const buttonSleep = document.getElementById('makeSleep');
const buttonFood = document.getElementById('makeFood');
const imgPets = document.getElementById('pets');

let levelSleep = 100;
let levelFood = 100;
let levelLife = 0.5*levelSleep +0.5*levelFood;

function startGame() {
    let levelSleep = 100;
    let levelFood = 100;
    let levelLife = 0.5*levelSleep +0.5*levelFood;
}

function updateLines() {
    if(levelSleep===0) {
        levelSleep = 0;
    } else {
        levelSleep -= 10;
    }
    if(levelFood===0) {
        levelFood = 0;
    } else {
        levelFood -= 10;
    }
}

buttonSleep.addEventListener('click', (e) => {
    if(levelSleep<100){
    levelSleep += 10;
    levelLife = 0.5*levelSleep + 0.5*levelFood;
    updateStylesLines();
    }
    changeImage();
})

buttonFood.addEventListener('click', () => {
    if(levelFood<100){
    levelFood += 10;
    levelLife = 0.5*levelSleep + 0.5*levelFood;
    updateStylesLines();
    }
    changeImage()
})

function changeImage() {
    if(levelLife===0){
        imgPets.setAttribute("src", "./images/27a97bc268293e8a46473445256fdaf8--google-penguin-penguins.jpg")
    } else if (levelLife>50){
        imgPets.setAttribute("src", "./images/penguin-158551_960_720.png")
    } else if(levelLife<=50) {
        imgPets.setAttribute("src", "./images/penguin-fever-gripe-bed-sick-36500851.jpg")
    }
}



function updateStylesLines() {
    lineLife.style.width = `${levelLife}%`;
    lineSleep.style.width = `${levelSleep}%`;
    lineFood.style.width = `${levelFood}%`;
}

buttonStart.addEventListener('click', (e) => {
    updateStylesLines()
    idInterval = setInterval(() => {
        updateLines()
        levelLife = 0.5*levelSleep + 0.5*levelFood;
        updateStylesLines()
        changeImage()
        console.log("levelLife",levelLife)
        console.log("levelSleep",levelSleep)
        console.log("levelFood",levelFood)
        if (levelLife=== 0) {
            console.log("Hello")
            console.log(levelLife)
            clearInterval(idInterval)
        }
    }, 3000)
})