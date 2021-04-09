$(document).ready(function(){
    //URL of our flickr account
    var flickrUrl = "https://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";


    $.getJSON(flickrUrl, function(data) {
        var html = "";
        $.each(data.items, function(i, item) {
            //sets html to <a href (url)>, adds the lightbox property and a caption with the title of the image currently displayed
            //then it appends the image to the page so we can physically see it and click on it to open a lightbox
            html += '<a href="' + item.media.m + '" data-lightbox="image" data-title="Title: '+item.title+'"><img src="' + item.media.m + '">';
        });
        $("#new_building").html(html); //add the HTML to the new_building tag
    });

});
