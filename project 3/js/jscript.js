
/** Load the slider and properties */
$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true, //move one slide at a time
        speed: 1000, //4 seconds
        minSlides: 1, //one image at a time
        maxSlides: 1, //one image at a time
        slideWidth: 500,
        adaptiveHeight: true,
        slideMargin: 10,
        captions: true,
        pager: true,
        onSliderLoad: function(currentIndex) {
            $('#pager').html("<strong>"+(currentIndex+1)+" of 6</strong>");
        },
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            $('#pager').html("<strong>"+(newIndex+1)+" of 6</strong>");
        }
    });

    //$('#pager').html("<strong>1 of 5</strong>");
});

/** Load accordion */
$(document).ready(function() {
    $(function() {
        $('#accordion').accordion({
            active: false, //do not auto-open anything
            collapsible: true //allow user to close an open element
        });
    });
});

