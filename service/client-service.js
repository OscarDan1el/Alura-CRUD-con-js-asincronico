const crearNuevaLinea = (nombre, email) => {
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
                    type="button"
                  >
                    Eliminar
                  </button>
                </li>
              </ul>
            </td>
          `;
          linea.innerHTML = Contenido;
          return linea;
};

const table = document.querySelector("[data-table]");

/* abrir http (metodo, url ) */

/* ----CRUD--- 
CREATE
READ
UPDATE
DELETE
*/

/* METODOS HTTP 
POST
GET
PUT / PATCH
DELETE
*/

/* FETCH API */
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

listaClientes().then((data) => {
  data.forEach((perfil) => {
    const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
    table.appendChild(nuevaLinea);
  });
}).catch((error)=>alert("ocurrio un error"));

