document.addEventListener("DOMContentLoaded", function() {
  const hiddenElements = document.querySelectorAll(".hidden");

  function fadeInOnScroll() {
      hiddenElements.forEach((element) => {
          const elementTop = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (elementTop < windowHeight - 50) {
              element.classList.add("show");
          }
      });
  }

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll(); // Run once in case elements are already in view
});
