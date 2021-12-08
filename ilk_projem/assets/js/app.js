"use strict";

function slider(element, options) {

    if(typeof options === "undefined") {
        options = {};
    }

    new Swiper(element, {
        slidesPerView: options.slidesPerView ? options.slidesPerView : 'auto',
        spaceBetween: options.spaceBetween ? options.spaceBetween : 30,
        centeredSlides: options.centeredSlides ? options.centeredSlides : true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    })
}
window.addEventListener('load', function(){
    slider(".swiper-container");
});
