$(function(){
    $('.menu-btn').on('click',function()){
        $('.menu-list').toggleClass('menu-list-active')

    });

$('.heroes-slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes-slider-text',
    prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-left.png" alt="prew"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-right.png" alt="next"></button>',
});
$('.heroes-slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes-slider-img',
    fade: true,
    arrows: false
});
})

