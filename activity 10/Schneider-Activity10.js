$(document).ready(function() {

    $("a").each(
        function(index) {
            preload([$(this).attr('href')]); /* preload the href (URL) of image */
        }
    );

    $('a[href$=".jpg"]').click(function() { //only do this if we have .jpg in the href
        event.preventDefault(); // cancel the default action of each link

        var directory = $(this).attr('href'); //cache the href of where we're at; this doesn't pass below.
        var title = $(this).attr('title'); //same as above, cache it

        //header h2 fade out and in:
        $("h2").fadeOut(1000, function () {
            $("h2").html(title).fadeIn(1000);// set the caption for each image
        });

        //image fade out and in:
        $("#image").fadeOut(1000, function () {
            $(this).attr('src', directory).fadeIn(1000); //set the new image, fade it in
        });
    });

}); // end ready

function preload(images) {
    $(images).each(function () {
        $('<img/>')[0].src = this;
    });
}