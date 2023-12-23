const saldo = document.getElementById("saldo")
const nombre = document.getElementById("nombre")
const depositar = document.getElementById("depositar")
const retirar = document.getElementById("retirar")
let entradaDinero;
let salidaDinero;
//IMPORTAR EL NÚMERO DE OBJECT QUE FUE SELECCIONADO
let seleccion = localStorage.getItem('seleccion');
// Obtener la cadena JSON del localStorage
    var arrayJson = localStorage.getItem('usuariosCopy');
// Convertir la cadena JSON de nuevo a un array
    var usuariosCopy = JSON.parse(arrayJson);
    nombre.textContent = `Hola, ${usuariosCopy[seleccion].nombre}`
    saldo.textContent = `$${usuariosCopy[seleccion].saldo}`

    depositar.addEventListener("click",()=>{
        entradaDinero = parseInt(prompt("Ingresa la cantidad a ingresar"))
        if( usuariosCopy[seleccion].saldo + entradaDinero >= 990){
            alert("La cuenta no puede almacenar más de $990")
        } else {
            usuariosCopy[seleccion].saldo = usuariosCopy[seleccion].saldo + entradaDinero;  
        }
        console.log(usuariosCopy[seleccion].saldo)
        saldo.textContent = `$${usuariosCopy[seleccion].saldo}`
    })

    retirar.addEventListener("click",()=>{
        salidaDinero = parseInt(prompt("Ingresa la cantidad de dinero a retirar"))
        if( usuariosCopy[seleccion].saldo - salidaDinero <= 10){
            alert("La cuenta no tener menos de $10")
        } else {
            usuariosCopy[seleccion].saldo = usuariosCopy[seleccion].saldo - salidaDinero;  
        }
        console.log(usuariosCopy[seleccion].saldo)
        saldo.textContent = `$${usuariosCopy[seleccion].saldo}`
    })