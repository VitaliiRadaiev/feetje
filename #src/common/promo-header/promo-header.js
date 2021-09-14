{
    let promoHeader = document.querySelector('.promo-header');
    if(promoHeader) {
        let bgSlider = promoHeader.querySelector('.promo-header__bg');
        let textSlider = promoHeader.querySelector('.promo-header__text-slider');

        let DataBgSlider = new Swiper(bgSlider, {
            effect: 'fade',
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            //loop: true,
            preloadImages: false,
            lazy: {
            	loadPrevNext: true,
            },
        });

        let DataTextSlider = new Swiper(textSlider, {
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            speed: 800,
            //loop: true,
            pagination: {
            	el: textSlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
        });

        DataTextSlider.controller.control = DataBgSlider;

    }
}