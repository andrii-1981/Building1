(function () {
    const slides = [
        `<div class="spots-img-container"><img class="gallery-img" src="img/contact-section/contact-picture-01.png"alt="gallery-img-02"></div>`,
        `<div class="spots-img-container"><img class="gallery-img" src="img/contact-section/contact-picture-02.png"alt="gallery-img-03"></div>`,
        `<div class="spots-img-container"><img class="gallery-img" src="img/contact-section/contact-picture-03.png" alt="gallery-img-04"></div>`,
        `<div class="spots-img-container"><img class="gallery-img" src="img/contact-section/contact-picture-04.png" alt="gallery-img-05"></div>`,
        `<div class="spots-img-container"><img class="gallery-img" src="img/contact-section/contact-picture-05.png" alt="gallery-img-06"></div>`
    ];

    let curSlideInd = 0;

    function renderCarousel(){
        const slideContainer = document.querySelector('.spots-carousel__slides');
        slideContainer.innerHTML = slides[curSlideInd];
        if (window.innerWidth > 850){
            const secondSlideInd = curSlideInd + 1 >= slides.length ? 0 : curSlideInd + 1;
            slideContainer.innerHTML += slides[secondSlideInd];
            if (window.innerWidth > 1000){
                const thirdSlideInd = secondSlideInd + 1 >= slides.length ? 0 : secondSlideInd + 1;
                slideContainer.innerHTML += slides[thirdSlideInd];
            }
        }
    }
   
    function prev(){
        curSlideInd = curSlideInd - 1 < 0 ? slides.length - 1 : curSlideInd - 1;
        renderCarousel();
    }

    function next(){
        curSlideInd = curSlideInd + 1 >= slides.length ? 0 : curSlideInd + 1;
        renderCarousel();
    }

    const prevButton = document.querySelector('.spots-carousel__btn-prev');
    prevButton.addEventListener('click', prev);

    const nextButton = document.querySelector('.spots-carousel__btn-next');
    nextButton.addEventListener('click', next);

    renderCarousel();

    window.addEventListener('resize', renderCarousel);

})();