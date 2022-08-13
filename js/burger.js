let menuBtn = document.querySelector('.burger');
let burgerLinks = document.querySelector('.burger__links');
let linksActive = document.querySelector('.burger__links');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active')
    burgerLinks.classList.toggle('burger__links-active')
});
linksActive.addEventListener('click', function () {
    menuBtn.classList.remove('active')
    burgerLinks.classList.remove('burger__links-active')
});
