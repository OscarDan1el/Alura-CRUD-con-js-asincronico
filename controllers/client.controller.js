import { clientServices } from "../service/client-service.js";

console.log(clientServices);

const crearNuevaLinea = (nombre, email, id) => {
    const linea = document.createElement("tr");
     const Contenido = `
             <td class="td" data-td>${nombre}</td>
             <td>${email}</td>
             <td>
               <ul class="table__button-control">
                 <li>
                   <a
                     href="../screens/editar_cliente.html"
                     class="simple-button simple-button--edit"
                     >Editar</a
                   >
                 </li>
                 <li>
                   <button
                     class="simple-button simple-button--delete"
                     type="button" id="${id}"
                   >
                     Eliminar
                   </button>
                 </li>
               </ul>
             </td>
           `;
           linea.innerHTML = Contenido;
           const btn = linea.querySelector("button");
           btn.addEventListener("click", () => {
            const id = btn.id;
            clientServices.eliminarCliente(id).then( respuesta =>{
              console.log(respuesta)
            }).catch(err => alert("ocurrio un error"))
           });
           return linea;
 };
 
 const table = document.querySelector("[data-table]");

 /* clientServices.listaClientes().then((data) => {
    data.forEach((perfil) => {
      const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
      table.appendChild(nuevaLinea);
    });
  }).catch((error)=>alert("ocurrio un error")); */


  /* refcatorizando el codigo */
  clientServices
  .listaClientes()
  .then((data) => {
    data.forEach(( {nombre, email, id} ) => {
      const nuevaLinea = crearNuevaLinea(nombre, email, id);
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("ocurrio un error"));
  

  