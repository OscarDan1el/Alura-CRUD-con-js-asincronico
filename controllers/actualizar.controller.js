import { clientServices } from "../service/client-service.js";

const  formulario = document.querySelector("[data-form]");

/* la clase ya viene definida en javaScript */
const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id =  url.searchParams.get("id");

    /* Esto nod redireciona a la vista error */
    if(id == null){
        window.location.href = "/screens/error.html";
    }

    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");


    clientServices.detalleCliente(id).then((perfil) => {
        nombre.value = perfil.nombre;
        email.value = perfil.email;    
    }); 
}
obtenerInformacion();

/* recibe 2 paramatros la accion y una funcion que se ejecuta   */
formulario.addEventListener("submit", (evento) => {
    /* evita que el fomulario hgaa la peticion esto para hacerlo medinate javascript */
    evento.preventDefault();
    const url = new URL(window.location);
    const id =  url.searchParams.get("id");

    /* obtenemos el valor de los input´s */
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    console.log (nombre,email);

    clientServices.actualizarCliente(nombre, email, id).then(()=>{
        window.location.href = "/screens/edicion_concluida.html";
    });
});