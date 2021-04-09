
/** Load the slider and properties */
$(document).ready(function() {
    loadFlickr();
    $(".slider").bxSlider({
        auto: true, //move one slide at a time
        speed: 1000, //4 seconds
        minSlides: 1, //one image at a time
        maxSlides: 1, //one image at a time
        slideWidth: 500,
        adaptiveHeight: true,
        slideMargin: 10,
        captions: false,
        pager: true,
        infiniteLoop: true,
        onSliderLoad: function(currentIndex) {
            $('#pager').html("<strong>"+(currentIndex+1)+" of 6</strong>");
        },
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            $('#pager').html("<strong>"+(newIndex+1)+" of 6</strong>");
        }
    });

});


/** Load flickr */
function loadFlickr() {
    var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?id=185642794@N02&format=json&tags=";
    $.ajax({
        url: flickrAPI,
        dataType: "jsonp", // jsonp
        jsonpCallback: 'jsonFlickrFeed', // add this property
        success: function (result) {
            $.each(result.items, function (i, item) {
                //each URL is the same length. Remove chars after 58 to get rid of "xxx_m.jpg", the _m tag makes the image smaller. Removing it returns a full sized image
                $("#img_"+(i+1)+"").attr("src", item.media.m.substring(0,58)+".jpg");
            });
        },
        error: function (xhr, status, error) {
            console.log(xhr);
            alert("Error: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
            //$("#outputDiv").html("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        }
    });
}


/** Load accordion */
$(document).ready(function() {
    $(function() {
        $('#accordion').accordion({
            active: false, //do not auto-open anything
            collapsible: true //allow user to close an open element
        });
    });
});

