mock = [
    {
        "nombre": "Unbranded Cotton Shoes",
        "descripcion": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "precio": "15.00",
        "urlImagen": "http://loremflickr.com/640/450/technics",
        "id": "4"
    },
    {
        "nombre": "Modern Frozen Chair",
        "descripcion": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "precio": "300.00",
        "urlImagen": "http://loremflickr.com/630/480/technics",
        "id": "5"
    },
    {
        "nombre": "Oriental Rubber Car",
        "descripcion": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "precio": "80.00",
        "urlImagen": "http://loremflickr.com/600/433/technics",
        "id": "6"
    },
    {
        "nombre": "Awesome Plastic Bacon",
        "descripcion": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "precio": "144.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "7"
    },
    {
        "nombre": "Recycled Metal Ball",
        "descripcion": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "precio": "800.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "8"
    },
    {
        "nombre": "Handcrafted Concrete Towels",
        "descripcion": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "precio": "605.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "9"
    },
    {
        "nombre": "Handmade Bronze Salad",
        "descripcion": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "precio": "566.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "11"
    },
    {
        "nombre": "Bespoke Bronze Keyboard",
        "descripcion": "The Football Is Good For Training And Recreational Purposes",
        "precio": "587.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "12"
    },
    {
        "nombre": "Awesome Cotton Gloves",
        "descripcion": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "precio": "391.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "13"
    },
    {
        "nombre": "Handmade Concrete Bacon",
        "descripcion": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "precio": "306.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "14"
    }
]
// Copia el array de "mock"
const copiaMock = mock.map((articulo) => {
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

// Obtén los contenedores
const cardContainer = document.getElementById("container_designs_visible");
const hiddenContainer = document.getElementById("container_designs_hidden");
const verMasBtn = document.getElementById("verMasBtn");

// Agrega los primeros 3 elementos al contenedor principal y el resto al hidden
cardContainer.innerHTML = copiaMock.slice(0, 3).join("");
hiddenContainer.innerHTML = copiaMock.slice(3).join("");

// Muestra el resto de los elementos ocultos bajo el boton VER MAS
verMasBtn.addEventListener("click", function() {
    // Muestra los elementos ocultos
    hiddenContainer.classList.remove("oculto");
    // Oculta el botón "Ver Más"
    verMasBtn.style.display = "none";
});


//////////////////////      MODAL      //////////////////////

// Escucha el clic en el botón "Abrir Modal"
document.querySelectorAll('.open-modal').forEach((button) => {
    button.addEventListener('click', function () {
        const itemId = this.getAttribute('data-item-id');
        const modal = document.getElementById('myModal1');
        
        // Obtén información del elemento
        const itemData = mock.find((item) => item.id == itemId);

        // Actualiza el contenido del modal de manera segura
        updateModalContent(itemData);
        const modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();
    });
});

// Obtén el botón de cierre del modal
const cerrarModalButton = document.querySelector('.btn-close');

// Agrega un evento 'click' al botón de cierre para llamar a la función
cerrarModalButton.addEventListener('click', restaurarBodyYBackdrop);
function restaurarBodyYBackdrop() {

    // Elimina las clases del modal-backdrop si existen
    const modalBackdrop = document.querySelector('.modal-backdrop');
    if (modalBackdrop) {
        modalBackdrop.classList.remove('fade', 'show', 'modal-backdrop');
    }

    // Obtén una referencia al modal
    var bodyElement = document.body;
    // Cambia la propiedad 'overflow'
    bodyElement.style = 'overflow: auto !important;';

}


// Función para actualizar el contenido del modal
function updateModalContent(itemData) {
    document.getElementById('modal-title').textContent = `${itemData.nombre}`;
    // document.getElementById('modal-nombre').textContent = itemData.nombre;
    document.getElementById('modal-descripcion').textContent = itemData.descripcion;
    document.getElementById('modal-precio').textContent = `${itemData.precio}`;
    document.getElementById('modal-imagen').src = itemData.urlImagen;
}
