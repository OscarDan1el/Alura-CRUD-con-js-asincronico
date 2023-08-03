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

const listaClientes = () => {
  const promise = new Promise( (resolve,reject) =>
  {
    const http = new XMLHttpRequest();
    http.open("GET","http://localhost:3000/perfil");
    
    http.send();
    
    /* para que nos de respuesta */
    http.onload = () => {
        const response = JSON.parse(http.response);
        if(http.status>= 400){
          reject(response);
        }else{
          resolve(response);
        }
    };
  });
  return promise;
}

listaClientes().then((data) => {
  data.forEach((perfil) => {
    const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
    table.appendChild(nuevaLinea);
  });
}).catch((error)=>alert("ocurrio un error"));





/* 
    Muestra la fecha de hoy es solo muestra
   const http2 = new XMLHttpRequest();
   http2.open("GET","http://localhost:3000/perfil/hoy");
   http2.send();
   http2.onload = () => {
    const data2 = JSON.parse(http2.response);
   } */

/* 
visualiza las acciones 
console.log(http) */