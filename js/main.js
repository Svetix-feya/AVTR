$(function(){
$('.desing-slider').slick({
    dots: false,
    slidesToShow: 4, 
    variableWidth: true,
    prevArrow: '<img src="/images/Arrow-left.svg" alt="" class="arrow arrow-left">',
    nextArrow: '<img src="/images/Arrow-right.svg" alt="" class="arrow arrow-right">',
    responsive: [
        {
            breckpoint: 361,
            settings: {
                variableWidth: false,
                slidesToShow: 1,
            }
        }
    ]
});
});