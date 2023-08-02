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

const http = new XMLHttpRequest();

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
http.open("GET","http://localhost:3000/perfil");
http.send();

/* para que nos de respueesta */
http.onload = () => {
    const data = JSON.parse(http.response);
    console.log(data);
    data.forEach((perfil) => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea);
    });
   /*  const hht */
};



/* 
visualiza las acciones 
console.log(http) */