// Ejercicio 1

const image = document.querySelector("#imagen1")

image.addEventListener("click", function cambiaColor(){

    if (image.style.border == "none") {
        image.style.border = "3px solid red"
    } else {
        image.style.border = "none"
    }
})

// Ejercicio 2

const input1 = document.querySelector("#sticker1")
const input2 = document.querySelector("#sticker2")
const input3 = document.querySelector("#sticker3")
const resultado = document.querySelector("#resultado")
const verificador = document.querySelector(".verificador")

verificador.addEventListener("click", function verificar(){
    const a = Number(input1.value)
    const b = Number(input2.value)
    const c = Number(input3.value)
    const total = (a + b + c)

    if (a < 0 || b < 0 || c < 0) {
        resultado.innerHTML = "Por favor introduce un número válido del 0 al 10"
    } else if (total > 10) {
        resultado.innerHTML = "Llevas demasiados stickers"
    } else if (total > 0) {
        resultado.innerHTML = `Te llevas ${total} stickers`
    } else {
        resultado.innerHTML = "No llevas ningun sticker"
    }
})

// Ejercicio 3

const pass1 = document.querySelector("#pass1")
const pass2 = document.querySelector("#pass2")
const pass3 = document.querySelector("#pass3")
const acceso = document.querySelector("#acceso")
const enter = document.querySelector("#enter")

enter.addEventListener("click", function ingresar() {
const d = pass1.value
const e = pass2.value
const f = pass3.value
const password = d + e + f

if (d == 9 && e == 1 && f == 1) {
    acceso.innerHTML = "Password 1 ingresada correctamente"
}else if (d == 7 && e == 1 && f == 4) {
    acceso.innerHTML = "Password2 ingresada correctamente"
} else{
    acceso.innerHTML = "Password incorrecta"
}
})
