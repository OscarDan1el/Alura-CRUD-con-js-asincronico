import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");
/* recibe 2 parametros */
formulario.addEventListener("submit", (evento) =>{
    /* le decimos que no queremos que el formulario funcione como deberia */
    evento.preventDefault();
    const  nombre =document.querySelector("[data-nombre]").value;
    const  email =document.querySelector("[data-email]").value;
    console.log(nombre, "-", email);
    clientServices
        .crearCliente(nombre,email)
        .then (respuesta =>{
         window.location.href = "/screens/registro_completado.html"
    })
    .catch(err => console.log(err));/* catch se usa en  caso de existir un error */
});