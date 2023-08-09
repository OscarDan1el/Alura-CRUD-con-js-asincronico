import { clientServices } from "../service/client-service.js";

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

    console.log(nombre, "---", email);

    clientServices.detalleCliente(id).then((perfil) => {
        nombre.value = perfil.nombre;
        email.value = perfil.email;    
    }); 
}
obtenerInformacion();