(function() {
    const pricingPopupWindow = document.querySelector(".pricing-popup-window");
    const popup = document.querySelector(".pricing-popup")
    const openPopupBtn = document.querySelector(".open-popup");
    const closeBtnPopup = document.querySelector(".close-button-popup");
    

    function openPopup(el) {
        pricingPopupWindow.classList.toggle("show-modal");
        el.stopPropagation();
    }
    
    openPopupBtn.addEventListener("click", openPopup);
    closeBtnPopup.addEventListener("click", openPopup);
    pricingPopupWindow.addEventListener("click", openPopup);
})();


