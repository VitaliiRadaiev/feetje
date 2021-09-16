{
    let productsSliderBlocks = document.querySelectorAll('.products-slider');
    if (productsSliderBlocks.length) {
        productsSliderBlocks.forEach(block => {
            if (block.classList.contains('products-slider_3-items')) {
                let slider = block.querySelector('.swiper-container');
                if (slider) {

                    let dataSlider = new Swiper(slider, {
                        autoplay: {
                            delay: 4000,
                            disableOnInteraction: false,
                        },
                        speed: 800,
                        loop: true,
                        navigation: {
                            nextEl: block.querySelector('.controlls__btn-next'),
                            prevEl: block.querySelector('.controlls__btn-prev'),
                        },
                        pagination: {
                            el: block.querySelector('.swiper-pagination'),
                            clickable: true,
                        },
                        breakpoints: {
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                                autoHeight: true,
                            },
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 45,
                            },
                            // 992: {
                            //     slidesPerView: 4,
                            //     spaceBetween: 25,
                            // },
                        },

                    });
                }
            } else {
                let slider = block.querySelector('.swiper-container');
                if (slider) {
                    let options = {
                        autoplay: {
                            delay: 4000,
                            disableOnInteraction: false,
                        },
                        speed: 800,
                        loop: true,
                        navigation: {
                            nextEl: block.querySelector('.controlls__btn-next'),
                            prevEl: block.querySelector('.controlls__btn-prev'),
                        },
                        pagination: {
                            el: block.querySelector('.swiper-pagination'),
                            clickable: true,
                        },
                        breakpoints: {
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                                autoHeight: true,
                            },
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                            },
                            992: {
                                slidesPerView: 4,
                                spaceBetween: 25,
                            },
                        },
                    }

                    let dataSlider = new Swiper(slider, options);
                }
            }
        })
    }
}