$(function() {
    $('.top__items').slick({
        arrows: false,
        dots: true,
    });

    let containerEl1 = document.querySelector('.design');
    let containerEl2 = document.querySelector('.products');
    let config = {
        controls: {
            scope: 'local',
        },
    };
    (() => mixitup(containerEl1, config))();
    (() => mixitup(containerEl2, config))();
});

$('.company__items').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    swipeToSlide: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
$('.product-related__items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: '<button type="button" class="product-related__btn product-related__btn--prev"><img src="images/left-arrow.svg" alt="arrow" width="22" height="9"></button>',
    nextArrow: '<button type="button" class="product-related__btn product-related__btn--next"><img src="images/right-arrow.svg" alt="arrow" width="22" height="9"></button>',
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
});
$('.product-details__star').rateYo({
    rating: 5,
    starWidth: '18px',
    starHeight: '18px',
    normalFill: '#d6d6d6',
    ratedFill: '#fc0',
});