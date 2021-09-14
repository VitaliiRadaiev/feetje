{
    let instSlider = document.querySelector('.instagram__slider');
    if(instSlider) {
        let dataSlider = new Swiper(instSlider, {
            
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
            },
        
            slidesPerView: 'auto',
            spaceBetween: 20,
            speed: 5000,
            loop: true,
           // preloadImages: false,
            lazy: {
            	loadPrevNext: true,
            },
            watchSlidesVisibility: true,
        });
    }
}