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
        navigation: {
            nextE1: '.swiper-button-next',
            prevE1: '.swiper-button-prew',
        },
        breakpoints: {
            1024: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        }
    })
}
window.addEventListener('load', function(){
    slider(".swiper-container");
});
