///////////////////////////////////////////////////////////////////////////////////////
//ORDENAMIENTO DE PRODUCTOS SEGUN FILTRO/EVENTO CHANGE EN EL SELECT
// Obtén el elemento select
var selectElement = document.getElementById('filtroPrecios');
var ordenamiento = null;
// Define la función que se ejecutará cuando cambie el select
    function changeOnSelect() {
            // Obtiene el valor seleccionado
            var valorSeleccionado = selectElement.value;
            
            // Actualiza la dirección de ordenamiento en función del valor seleccionado
            if (valorSeleccionado === "opcion2") {
                ordenamiento = "ascendente"; // Ordenar de menor a mayor
            } else if (valorSeleccionado === "opcion3") {
                ordenamiento = "descendente"; // Ordenar de mayor a menor
            } else {
                ordenamiento = null; // No hay cambio en el ordenamiento
            }

        

            // Llama a una función para ordenar y actualizar la vista
            ordenarProductos();
        }

        // Función para ordenar los productos según la dirección seleccionada
        function ordenarProductos() {
        if (ordenamiento === "ascendente") {
            // Ordenar el arreglo "mock" por precio de menor a mayor
            mock.sort((a, b) => parseFloat(a.precio) - parseFloat(b.precio));
        } else if (ordenamiento === "descendente") {
            // Ordenar el arreglo "mock" por precio de mayor a menor
            mock.sort((a, b) => parseFloat(b.precio) - parseFloat(a.precio));
        } else{}

        // Generar nuevamente los elementos HTML con el arreglo ordenado
        const copiaMockOrdenada = mock.map((articulo) => {
            return `
            <div class="design card btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal1">
    <button class="articles open-modal" data-item-id="${articulo.id}">
            <img src="${articulo.urlImagen}"></img>
            <div class="info-card">
                <h5>${articulo.nombre}</h5>
                <h6>${articulo.precio}</h6>
            </div>
        </button>
    </div>`;
        });

  // Insertar los elementos ordenados en el contenedor "view"
  cardContainer.innerHTML = copiaMockOrdenada.join('');
}


// Agrega un "event listener" para el evento "change"
selectElement.addEventListener('change', changeOnSelect);


// Llama a la función para mostrar inicialmente los productos sin ordenar
ordenarProductos();



//////////////////////////////////////////////////////////////////////////////
//BUSCADOR CON INPUT

// Obtén el elemento de entrada de búsqueda
const searchInput = document.getElementById('searchInput');

// Agrega un evento de escucha al input para detectar cambios
searchInput.addEventListener('input', function() {
  // Obtiene el término de búsqueda ingresado por el usuario
  const searchTerm = searchInput.value.toLowerCase();

  // Filtra los productos que coinciden con el término de búsqueda
  const productosFiltrados = mock.filter(producto => {
    // Convierte el nombre del producto a minúsculas para hacer una búsqueda insensible a mayúsculas
    const nombreEnMinusculas = producto.nombre.toLowerCase();
    // Comprueba si el término de búsqueda está contenido en el nombre del producto
    return nombreEnMinusculas.includes(searchTerm);
  });

  // Llama a una función para mostrar los productos filtrados en la vista
  mostrarProductos(productosFiltrados);
});

// Función para mostrar los productos en la vista
function mostrarProductos(productos) {
  // Genera elementos HTML para los productos en "productos" y actualiza el contenido en el contenedor "view"
  const copiaProductos = productos.map(producto => {
    return `
    <div class="design card btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal1">
    <button class="articles open-modal" data-item-id="${producto.id}">
            <img src="${producto.urlImagen}"></img>
            <div class="info-card">
                <h5>${producto.nombre}</h5>
                <h6>${producto.precio}</h6>
            </div>
        </button>
    </div>`;
  });

  // Inserta los elementos generados en el contenedor "view"
  cardContainer.innerHTML = copiaProductos.join('');
}