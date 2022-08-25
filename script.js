//Entrega Final Morales
let carrito = [];//[] significa array vacio
if (localStorage.getItem("carrito") != null) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}
let lista = document.getElementById("milista");

//llamada a renderizar
renderizarProductos();

function renderizarProductos() {
    for (const producto of productos) {
        lista.innerHTML += `<li class="col-sm-3 list-group-item">
            <h3> ID: ${producto.id} </h3>
            <img src=${producto.foto} width="260" height="200">
            <p> Producto: ${producto.nombre}</p>
            <p><strong> $ ${producto.precio} </strong></p>
            <button class='btn btn-danger' id='btn${producto.id}'>Comprar</button>
        </li>`;
    }

    //eventos boton
    productos.forEach(producto => {
        //evento para cada boton
        document.getElementById(`btn${producto.id}`).addEventListener('click', function () {
            agregarAlCarrito(producto);
        });
    });

}
//funcion agregar al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.log(carrito);
    //agrego una fila nueva a la tabla "tablabody"
    document.getElementById("tablabody").innerHTML += `
    <tr>
      <td>${producto.id}</td>
      <td>${producto.nombre}</td>
      <td>$ ${producto.precio}</td>
    </tr>
    `;
    alert("Prodcuto: " + producto.nombre + " agregado al carrito!");
    localStorage.setItem("Carrito", JSON.stringify(carrito));
}

