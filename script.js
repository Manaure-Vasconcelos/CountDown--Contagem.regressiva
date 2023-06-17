const horasEl = document.querySelector('#horas')
const minutosEl = document.querySelector('#minutos')
const segundosEl = document.querySelector('#segundos')
const separadorEl = document.querySelector('#separador')
const playBtn = document.querySelector('#playBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const resumeBtn = document.querySelector('#resumeBtn')
const adicionarBtn = document.querySelector('#contagemBtn')
const inputTempo = document.querySelector('.inputTempo')
const txtHora = document.querySelector('#txtHora')
const txtMinuto = document.querySelector('#txtMinuto')

const t = true
let interval
let horas = 0
let minutos =0
let segundos = 60
let millisegundos = 1000
let pausado = false

adicionarBtn.addEventListener("click", adicionar)
playBtn.addEventListener("click", contagem)

function adicionar() {
    if (t === true) {
        inputTempo.style.display = 'block'
        t = false   
    }
}

function contagem() {
    horas = Number(txtHora.value)
    minutos = Number(txtMinuto.value)
    interval = setInterval(() => {
        if (!pausado){
            millisegundos -= 10

            if (millisegundos === 0) {
                segundos--
                millisegundos = 1000
            }
            if (segundos === 0){
                minutos--
                segundos = 60
            }

        }
        horasEl.innerHTML = horas
        minutosEl.innerHTML = minutos
        segundosEl.innerHTML = segundos
    }, 10)



    inputTempo.style.display = 'none'
    playBtn.style.display = 'none'
    pauseBtn.style.display = 'block'
}