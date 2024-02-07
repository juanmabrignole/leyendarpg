// Ejecutar todos los tooltips
$("[rel=tooltip]").tooltip({html:true});


// Boton para ir arriba
// Buscar Boton
let mybutton = document.getElementById("btn-back-to-top");

// Mostrar el boton al scrollear 20px
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// Al hacer clic, ir hacia arriba
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
