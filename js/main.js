

//Validación registro
 

//Validación registro
 document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.form');

  form.addEventListener('submit', function (event) {
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellido");
    var rutPasaporte = document.getElementById("rut");
    var direccion = document.getElementById("dirección");
    var fechaNacimiento = document.getElementById("fecha_nac");
    var telefono = document.getElementById("telefono");
    var correo = document.getElementById("correo");
    var confirmarCorreo = document.getElementById("correo_confirm");
    var contraseña = document.getElementById("pass");
    var confirmarContraseña = document.getElementById("pass_confirm");

     if (!validarCampoNombre(nombre, "Nombre")) {
      event.preventDefault();
    }
    if (!validarCampoNombre(apellidos, "Apellidos")) {
      event.preventDefault();
    }
    if (!validarCampoRutPasaporte(rutPasaporte, "RUT o pasaporte")) {
      event.preventDefault();
    }
    if (!validarCampo(direccion, "Dirección")) {
      event.preventDefault();
    }
    if (!validarCampoFechaNacimiento(fechaNacimiento, "Fecha de nacimiento")) {
      event.preventDefault();
    }
    if (!validarCampo(telefono, "Teléfono")) {
      event.preventDefault();
    }
    if (!validarCampoCorreo(correo, "Correo electrónico")) {
      event.preventDefault();
    }
    if (!validarCampoConfirmarCorreo(correo, confirmarCorreo, "Confirmar correo electrónico")) {
      event.preventDefault();
    }
    if (!validarCampoContraseña(contraseña, "Contraseña")) {
      event.preventDefault();
    }
    if (!validarCampoConfirmarContraseña(contraseña, confirmarContraseña, "Confirmar contraseña")) {
      event.preventDefault();
    }
  });

  function validarCampo(input, nombreCampo) {
    if (input.value.trim() === '') {
      alert('Por favor, complete el campo ' + nombreCampo + '.');
      return false;   
    }

    return true;
    }


  function validarCampoNombre(input, nombreCampo) {
    var regexNombre = /^[A-Za-z\s]+$/;
    if (!regexNombre.test(input.value)) {
      alert('Por favor, ingrese un ' + nombreCampo + ' válido.');
      return false;
    }
    return true;
  }

  function validarCampoRutPasaporte(input, nombreCampo) {
    var regexRutPasaporte = /^([0-9]{1})[.]([0-9]{3})[.]([0-9]{3})[-](0-9K)$/; 
    if (!regexRutPasaporte.test(input.value)) {
      alert('Por favor, ingrese un ' + nombreCampo + ' válido.');
      return false;
    }
    return true;
  }

  function validarCampoFechaNacimiento(input, nombreCampo) {
    var fechaIngresada = new Date(input.value);
    var fechaActual = new Date();
    var edadMinima = 13;

    if (isNaN(fechaIngresada) || fechaIngresada > fechaActual) {
      alert('Por favor, ingrese una ' + nombreCampo + ' válida.');
      return false;
    }

    var edad = fechaActual.getFullYear() - fechaIngresada.getFullYear();
    if (edad < edadMinima) {
      alert('Debe tener al menos ' + edadMinima + ' años.');
      return false;
    }

    return true;
  }

  function validarCampoCorreo(input, nombreCampo) {
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(input.value)) {
      alert('Por favor, ingrese una ' + nombreCampo + ' válida.');
      return false;
    }
    return true;
  }

  function validarCampoContraseña(input, nombreCampo) {
  if (input.value.length < 8) {
    alert('La ' + nombreCampo + ' debe tener al menos 8 caracteres.');
    return false;
  }

  if (!/[A-Z]/.test(input.value)) {
    alert('La ' + nombreCampo + ' debe contener al menos una letra mayúscula.');
    return false;
  }

  if (!/[a-z]/.test(input.value)) {
    alert('La ' + nombreCampo + ' debe contener al menos una letra minúscula.');
    return false;
  }

  if (!/\d/.test(input.value)) {
    alert('La ' + nombreCampo + ' debe contener al menos un número.');
    return false;
  }

  return true;
  }

  function validarCampoConfirmarCorreo(correo, confirmarCorreo, nombreCampo) {
  if (correo.value !== confirmarCorreo.value) {
    alert('La confirmación de correo no coincide.');
    return false;
  }

  return true;
}

function validarCampoConfirmarContraseña(contraseña, confirmarContraseña, nombreCampo) {
  if (contraseña.value !== confirmarContraseña.value) {
    alert('Las contraseñas no coinciden.');
    return false;
  }

  return true;
}


});

  //testimonios carrusel
document.addEventListener("DOMContentLoaded", function () {
  var multipleCardCarousel = document.querySelector("#carouselExampleControls");

  if (window.matchMedia("(min-width: 576px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
      wrap: false,
    });

    var carouselInner = document.querySelector("#carouselExampleControls .carousel-inner");
    var carouselWidth = carouselInner.scrollWidth;
    var cardWidth = document.querySelector("#carouselExampleControls .carousel-item").offsetWidth;
    var scrollPosition = 0;

    document.querySelector("#carouselExampleControls .carousel-control-next").addEventListener("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 3) {
        scrollPosition += cardWidth;
        carouselInner.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    });

    document.querySelector("#carouselExampleControls .carousel-control-prev").addEventListener("click", function () {
      if (scrollPosition > 1) {
        scrollPosition -= cardWidth;
        carouselInner.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    });
  } else {
    multipleCardCarousel.classList.add("slide");
  }
});

