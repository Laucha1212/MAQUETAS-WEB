//MENU HAMBURGUESA
document.querySelector('.boton-hamburguesa').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('mostrar');
  });

//DESPLAZAR NAV CON EL SCROLL
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".header_container").classList.remove("ocultar");
    } else {
        document.querySelector(".header_container").classList.add("ocultar");
    }
    prevScrollpos = currentScrollPos;
}

//BOTON VER MAS Y VER MENOS DE LAS MAQUETAS
document.getElementById("miBoton").addEventListener("click", function() {
   document.getElementById("desplegable").classList.toggle("oculto");
});


const boton = document.getElementById("miBoton");
const contenedor = document.getElementById("desplegable");
boton.addEventListener("click", function() {
  contenedor.classList.toggle("visible");
  if (contenedor.classList.contains("visible")) {
    boton.textContent = "Ver menos";
  } else {
    boton.textContent = "Ver más";
  }
});
