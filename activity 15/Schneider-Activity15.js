$(document).ready(function(){
    $(document).ready(function(){
        var request = new XMLHttpRequest();
        request.open('GET', "team.json");
        request.responseType = 'text'; // get a string
        request.send();
        request.onload = function() {
            var jsonText = request.response; // get the string from the response
            var jsonData = JSON.parse(jsonText); // convert it to an object

            for (var i = 0; i < jsonData.teammembers.length; i++) {
                //pic, full name, title, and bio. <hr>, do the next.

                $('#team').append($('<img>', {id: 'Picture of '+jsonData.teammembers[i].full_name, src: jsonData.teammembers[i].image})); //put in image
                $("#team").append("<br><h3>" + jsonData.teammembers[i].full_name + "</h3>" +
                    "<h3>"+jsonData.teammembers[i].title + "</h3>" +
                    "<p>"+jsonData.teammembers[i].tag_line + "</p>"); //change paragraph
            }
        }

    });
});