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


const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}` , {
    method: "Delete"
  });
}

/* funcion detalle cliente */
/* como estamos solicitando la informacion no necesitamos especificarle 
el metodo, ya que viene por defecto */
const detalleCliente = (id) =>{
  return fetch(`http://localhost:3000/perfil/${id}`)
  .then(respuesta => respuesta.json())
}

/* exportar  */
export const clientServices ={
listaClientes,
crearCliente,
eliminarCliente,
detalleCliente,
};

