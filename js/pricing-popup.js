(function() {
    const pricingPopupWindow = document.querySelector(".pricing-popup-window");
    const trigger = document.querySelector(".trigger");
    const closeButton = document.querySelector(".close-button-popup");
    
    function toggleModal(ev) {
        pricingPopupWindow.classList.toggle("show-modal");
        ev.stopPropagation();
    }
    
    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    pricingPopupWindow.addEventListener("click", toggleModal);
})();