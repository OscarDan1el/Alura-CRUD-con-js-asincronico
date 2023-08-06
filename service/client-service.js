/* se encarga de hacer la comunicacion entre el servidor */

/* FETCH API */
const listaClientes = () => 
fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

/* nueva funcion de crear cliente */
/* debemos definir el metodo si no utilizara get por defecto */
const crearCliente = (nombre,email) => {
    return fetch("http://localhost:3000/perfil",{
        method:"POST",
        /* Encabezados */
        headers:{
            "Content-Type":"application/json"
        },
        /* esto es objeto y va la informacion que queremos enviar */
        body: JSON.stringify({nombre, email, id:uuid.v4()})
    });
};


/* exportar  */
export const clientServices ={
listaClientes,
crearCliente,
};

