/* se encarga de hacer la comunicacion entre el servidor */

/* FETCH API */
const listaClientes = () => 
fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());



/* exportar  */
export const clientServices ={
listaClientes
};

