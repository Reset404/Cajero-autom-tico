const mostrarContraseña = document.getElementById("ojo-btn");
const password = document.getElementById("password")
const submit = document.getElementById("submit")
const username = document.getElementById("username")
let seleccion;
// LISTA DE USUARIOS REGISTRADOS

let usuarios = [
    {nombre: "John Batista Fernandez", saldo: 200, correo: "john-221@hotmail.com", contraseña: 1234},
    {nombre: "Mario Antonio Campos Casanova", saldo: 290, correo: "mariocass@gmail.com", contraseña: 1111},
    {nombre: "Esther Noviera Cruz", saldo: 67, correo: "ENC-rain@hotmail.com", contraseña: 3547}
];
let usuariosCopy = usuarios;
submit.addEventListener("click",(e)=>{
    if (document.forms[0].checkValidity()) {
        // Evitar el envío predeterminado solo si la validación pasa
        e.preventDefault();
        // Resto de la lógica de procesamiento del formulario
        let a;
        let b;
        for(let i=0; i < usuarios.length ; i++){
            if(usuarios[i].correo == username.value && usuarios[i].contraseña == password.value){
                seleccion = i;
                // Convertir el número a una cadena y almacenarla en localStorage
                a = usuarios[i].correo;
                b = usuarios[i].contraseña;
                window.location.href = "home.html"
            } else if (i==usuarios.length-1){
                if(a != username.value || b != password.value){
                    alert("Datos de acceso incorrectos")
                }
            }
        }
    }
})

submit.addEventListener("click",()=>{
    localStorage.setItem('seleccion', seleccion);
    console.log(seleccion)
})


// 

// EVENTO: MOSTRAR CONTRASEÑA
mostrarContraseña.addEventListener("click", ()=>{
    if(password.type == "password"){
        password.type = "text"
    } else {
        password.type = "password"
    }
})

// MANDAR LOS DATOS 1
   // Convertir el array a una cadena JSON
var arrayJson = JSON.stringify(usuariosCopy);
    // Almacenar la cadena JSON en localStorage
localStorage.setItem('usuariosCopy', arrayJson);
