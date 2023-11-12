document.addEventListener("DOMContentLoaded", function() {
  let email = document.getElementById("InputEmail1");
  const form = document.getElementById("dudas");
  const parrafo = document.getElementById("warnings");

  form.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let entrar = false;
    parrafo.innerHTML = "";

    if (!regexEmail.test(email.value)) {
      warnings += 'El email no es valido <br>';
      console.log("email no valido");
      entrar = true;
    }

    if (entrar) {
      parrafo.innerHTML = warnings;
    }
  });
});

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
