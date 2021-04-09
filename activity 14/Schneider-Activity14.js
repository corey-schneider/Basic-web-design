$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "team.json",
        beforeSend: function() {
            $("#team").append("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "text",
        success: function(data) {
            var json = JSON.parse(data);
            //alert(json.teammembers.length+" -- "+(json.teammembers[1].name));
            $('#team').html("");
            for(var i = 0; i < json.teammembers.length; i++) {
                $('#team').append("<h3>" +
                    json.teammembers[i].name + "</h3>" +
                    json.teammembers[i].title + "<br>" +
                    json.teammembers[i].bio + "<br>");
            }
        }
    });
});