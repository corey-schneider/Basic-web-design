$(document).ready(function() {

    $('a[title$="toobin"]').click(function() {
        replaceSpeaker('./json_files/toobin.json');
    });
    $('a[title$="sorkin"]').click(function() {
        replaceSpeaker('./json_files/sorkin.json');
    });
    $('a[title$="chua"]').click(function() {
        replaceSpeaker('./json_files/chua.json');
    });
    $('a[title$="sampson"]').click(function() {
        replaceSpeaker('./json_files/sampson.json');
    });

}); // end ready

function replaceSpeaker(source) {
    var request = new XMLHttpRequest();

    request.open('GET', source);
    request.responseType = 'text'; // get a string
    request.send();

    request.onload = function() {
        var jsonText = request.response; // get the string from the response
        var jsonData = JSON.parse(jsonText); // convert it to an object
        $("main h1").html(jsonData.speakers[0].title); //change title
        $("main h2").html(jsonData.speakers[0].month+"<br>"+jsonData.speakers[0].speaker); //change month and speaker name
        $("main p").html(jsonData.speakers[0].text); //change paragraph
        $("main img").attr("src", jsonData.speakers[0].image); //change image
    }
}
