(function () {
    const menuBtn = document.querySelector(".burger");
    const burgerLinks = document.querySelector(".burger__links");
    const body =document.querySelector("body");
    menuBtn.addEventListener("click", function () {
      menuBtn.classList.toggle("active");
      burgerLinks.classList.toggle("burger__links-active");
      body.classList.toggle("lock");
    });
    burgerLinks.addEventListener("click", function () {
      menuBtn.classList.remove("active");
      burgerLinks.classList.remove("burger__links-active");
      body.classList.remove("lock");
    });
})();