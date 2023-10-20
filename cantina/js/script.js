var swiperRecomendados = new Swiper('.slider-recomendados', {
    slidesPerView: 4,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: false,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next-recomendados',
      prevEl: '.swiper-button-prev-recomendados',
    },
    on: {
      resize: function () {
        swiperRecomendados.changeDirection(getDirection());
      },
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
        },
        1700: {
            slidesPerView: 4,
        },
    },
});
var swiperBebidas = new Swiper('.slider-bebidas', {
    slidesPerView: 4,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: false,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next-bebidas',
      prevEl: '.swiper-button-prev-bebidas',
    },
    on: {
      resize: function () {
        swiperBebidas.changeDirection(getDirection());
      },
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
        },
        1700: {
            slidesPerView: 4,
        },
    },
});
var swiperLanches = new Swiper('.slider-lanches', {
    slidesPerView: 4,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: false,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next-lanches',
      prevEl: '.swiper-button-prev-lanches',
    },
    on: {
      resize: function () {
        swiperLanches.changeDirection(getDirection());
      },
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
        },
        1700: {
            slidesPerView: 4,
        },
    },
});
var swiperDoces = new Swiper('.slider-doces', {
    slidesPerView: 4,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: false,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next-doces',
      prevEl: '.swiper-button-prev-doces',
    },
    on: {
      resize: function () {
        swiperDoces.changeDirection(getDirection());
      },
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
        },
        1700: {
            slidesPerView: 4,
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}