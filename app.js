const one = document.querySelector(".one")
const two = document.querySelector(".two")

let firstCharacter;

const wordone = document.querySelector(".wordone")
const wordtwo = document.querySelector(".wordtwo")
const btn = document.querySelector(".btn")
btn.style.pointerEvents = "none"

const btnAudio = new Audio("btn.mp3")
one.addEventListener("click",() => {
    two.style.border = "2px solid black"
    one.style.border = "5px solid black"
    wordone.style.display = "block"
    wordtwo.style.display = "none"
    firstCharacter = true
    btn.style.pointerEvents = "auto"
    btnAudio.play()
    
})


two.addEventListener("click",() => {
    one.style.border = "2px solid black"
    two.style.border = "5px solid black"
    wordone.style.display = "none"
    wordtwo.style.display = "block"
    firstCharacter = false
    btn.style.pointerEvents = "auto"
    btnAudio.play()
    
})

btn.addEventListener("click",() => {
    if(firstCharacter){
        window.location.href = "game.html"
    }else{
        window.location.href = "game2.html"
    }
    
})
