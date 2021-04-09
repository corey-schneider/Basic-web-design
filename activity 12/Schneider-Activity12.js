$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true, //2. move one slide at a time
        randomStart: true, //1. first image is random
        speed: 3000, //3 seconds
        minSlides: 1, //one image at a time
        maxSlides: 1, //one image at a time
        slideWidth: 250,
        slideMargin: 10,
        captions: true,
        pager: true,
        onSliderLoad: function(currentIndex) {
            $('#pager').html("<strong>"+(currentIndex+1)+" of 5</strong>");
        },
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            $('#pager').html("<strong>"+(newIndex+1)+" of 5</strong>");
        }
    });
    //$('#pager').html("<strong>1 of 5</strong>");

});