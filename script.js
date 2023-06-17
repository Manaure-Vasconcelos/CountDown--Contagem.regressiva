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
const resetBtn = document.querySelector('#resetBtn')

let interval
let horas = 0
let minutos = 0
let segundos = 0
let millisegundos = 1000
let pausado = false

adicionarBtn.addEventListener("click", adicionar)
playBtn.addEventListener("click", contagem)
pauseBtn.addEventListener("click", pausar)
resumeBtn.addEventListener("click", retomar)
resetBtn.addEventListener("click", resetar)


function adicionar() {
    if (pausado === !true) 
        inputTempo.style.display = 'block' 
        txtHora.focus()
}

function contagem() {
    horas = Number(txtHora.value)
    minutos = Number(txtMinuto.value)
    if(horas === 0 && minutos === 0 && segundos === 0){
        alert("Preencha o campo corretamente.")
    } else {
        interval = setInterval(() => {
            if (!pausado){
                millisegundos -= 10

                if (millisegundos === 0){
                    segundos--
                    millisegundos = 1000
                }
                if (minutos === 0 && segundos === 0){
                    resetar()
                    alert("FIM")
                } else if(segundos === 0){
                    minutos--
                    segundos = 59
                }
            }
            horasEl.innerHTML = formatTempo(horas)
            minutosEl.innerHTML = formatTempo(minutos)
            segundosEl.innerHTML = formatTempo(segundos)
        }, 10)

        inputTempo.style.display = 'none'
        playBtn.style.display = 'none'
        adicionarBtn.style.display = 'none'
        pauseBtn.style.display = 'block'
        resetBtn.style.display = 'block'
    }}
function pausar(){
    pausado = true
    pauseBtn.style.display = 'none'
    resumeBtn.style.display = 'block'
}
function retomar(){
    pausado = false
    pauseBtn.style.display = 'block'
    resumeBtn.style.display = 'none'
}

function resetar(){
    clearInterval(interval)
    horas = 0
    minutos = 0
    segundos = 0
    millisegundos = 1000

    horasEl.innerHTML = "00"
    minutosEl.innerHTML = "00"
    segundosEl.innerHTML = "00"
    txtHora.value = ''
    txtMinuto.value = ''

    playBtn.style.display = 'block'
    adicionarBtn.style.display = 'block'
    pauseBtn.style.display = 'none'
    resumeBtn.style.display = 'none'
    resetBtn.style.display = 'none'
}

function formatTempo(T){
    return T < 10 ? `0${T}` : T
}