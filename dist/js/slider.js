let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                    
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        }
        if (slider.classList.contains('_gallery')) {
            //slider.data('LightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) {}

if (document.querySelector('.about-slider')) {
    let aboutSlider = new Swiper('.about-slider__body', {
        
        observer: true,
        observeParents:true,
        slidesPerView: 4,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
        loop: true,
        spaceBetween:30,
        // pagination: {
        //     el: '.mainslider__dotts',
        //     clickable: true,
        // },

        breakpoints: {
            320: {
                slidesPerView: 2,

            },
            480: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
        },

        navigation: {
            nextEl: '.arrowNext',
            prevEl: '.arrowPrev'

        },
        on: {
            lazyImageReady: function () {
                ibg();
            },
        }
    
    });  


    
     //let aboutSliderImages = document.querySelectorAll('.about-slider__img');
    // let mainsliderDotts = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet');
    
    // for (let index = 0; index < mainsliderImages.length; index++) {
    //     const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
    //     mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')";
       
    // }
    
    };
if (document.querySelector('.slider-brands')) {
    let aboutSlider = new Swiper('.slider-brands__body', {
        
        observer: true,
        observeParents:true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
        loop: true,
        pagination: {
            el: '.slider-brands__dotts',
            clickable: true,
        },

        // navigation: {
        //     nextEL: '.about-slider__arrowNext',
        //     prevEL: '.about-slider__arrowPrev',

        // },
        on: {
            lazyImageReady: function () {
                ibg();
            },
        }
    
    });  


    
     //let aboutSliderImages = document.querySelectorAll('.about-slider__img');
    // let mainsliderDotts = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet');
    
    // for (let index = 0; index < mainsliderImages.length; index++) {
    //     const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
    //     mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')";
       
    // }
    
    };