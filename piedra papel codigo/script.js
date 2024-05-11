function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.left === "-250px") {
    menu.style.left = "0";
  } else {
    menu.style.left = "-250px";
  }
}

function showCircle() {
  var circle = document.getElementById("circle");
  circle.style.display = "block";
}

function hideCircle() {
  var circle = document.getElementById("circle");
  circle.style.display = "none";
}


document.getElementById("infoLink").addEventListener("click", function(event) {
  event.preventDefault(); // Evita que el enlace redirija a otra página
  
  var informacionOculta = document.getElementById("informacionOculta");
  
  // Si el contenido está oculto, muéstralo; si está visible, ocúltalo
  if (informacionOculta.style.display === "none") {
    informacionOculta.style.display = "block";
  } else {
    informacionOculta.style.display = "none";
  }
});



 $(document).ready(function() {
        // Variable para guardar la posición de desplazamiento anterior
        var lastScrollTop = 0;

        // Función para manejar el evento de desplazamiento
        $(window).scroll(function() {
            var currentScroll = $(this).scrollTop();

            // Verificamos si el desplazamiento es hacia abajo y si el menú no está oculto
            if (currentScroll > lastScrollTop && $('#menu').css('top') !== '-100px') {
                $('#menu').stop().animate({ top: '-900px' }, 300); // Ocultamos el menú con animación
            } else if (currentScroll < lastScrollTop && $('#menu').css('top') === '-900px') {
                $('#menu').stop().animate({ top: '0' }, 300); // Mostramos el menú con animación
            }

            lastScrollTop = currentScroll;
        });
    });

