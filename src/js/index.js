const inputs = document.querySelectorAll(".input");
const spanCampoObrigatorio = document.querySelectorAll("span");
const btnEnviar = document.getElementsByClassName("btn-enviar")
const form = document.querySelector(".formulario")

form.addEventListener("submit", (event) => {
    validarInput(event)
})

function validarInput(event){
    event.preventDefault()
    inputs.forEach((input, index) => {
        if(input.value === "") {
            input.classList.add("nao-preenchido")
            spanCampoObrigatorio[index].classList.add("erro-span")
        } else {
            input.classList.remove("nao-preenchido")
            spanCampoObrigatorio[index].classList.remove("erro-span")
            input.classList.add("preenchido")
        }
    })
}