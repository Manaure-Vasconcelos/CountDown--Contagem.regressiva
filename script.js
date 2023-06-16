const horas = document.querySelector('.hora')
const minutos = document.querySelector('.minutos')
const segundos = document.querySelector('.segundos')
const separador = document.querySelector('.separador')
const playBtn = document.querySelector('#playBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const resumeBtn = document.querySelector('#resumeBtn')
const adicionarBtn = document.querySelector('#contagemBtn')
const inputTempo = document.querySelector('.inputTempo')
const txtHora = document.querySelector('#txtHora')
const txtMinuto = document.querySelector('#txtMinuto')
const t = true

adicionarBtn.addEventListener("click", adicionar)
playBtn.addEventListener("click", contagem)

function adicionar() {
    if (t === true) {
        inputTempo.style.display = 'block'
        t = false   
    }
}

function contagem() {
    inputTempo.style.display = 'none'
    playBtn.style.display = 'none'
    pauseBtn.style.display = 'block'
}