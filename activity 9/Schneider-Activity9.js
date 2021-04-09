$(document).ready(function() {
    //preload(['images9/casting1.jpg', 'images9/casting2.jpg', 'images9/casting3.jpg', 'images9/catchrelease.jpg', 'images9/fish.jpg', 'images9/lures.jpg']);

    $('a').first().focus(); /* focus on the first element */

    $("a").each(
        function(index) {
            preload([$(this).attr('href')]); /* preload the href (URL) of image */
        }
    );

// set up the event handlers for each link
    $("a").click(function(){
        event.preventDefault(); // cancel the default action of each link
        $("h2").html($(this).attr('title'));// get the caption for each image
        $("img").attr('src',$(this).attr('href'));// get the image URL for each image
    });

});

function preload(images) {
    $(images).each(function () {
        $('<img/>')[0].src = this;
    });
}