/** This script specifically handles the estimates webpage */

var selectedDeviceID;
var selectedDeviceString;
var selectedRepairID;
var selectedRepairString;
var cost;


//I don't have a use for this, but the code is here if I think of a reason to use it.
//Disables the problem list so a user can't select a problem.
function disableProblemList() {
    $('#problemList').prop('disabled', true).trigger("chosen:updated");
}

//launch when a computer is selected. Disables phone list so user can't select a phone
function disablePhoneList() {
    $('#phoneList').prop('disabled', true).trigger("chosen:updated"); //disable phoneList, because the user chose a computer.
    selectedDeviceID = $("#computerList").val(); //set the selected device ID to the computerList value
    selectedDeviceString = $("#computerList option:selected").text(); //set the selected device string (readable by user) to the computerList option name

    //now remove non-applicable options from the list:
    $("#problemList option[value='crackedBack']").remove();
    $('#problemList').trigger("chosen:updated"); //update the problem selection list
}

//launch when phone is selected. Disables computer list so user can't select a computer
function disableComputerList() {
    $('#computerList').prop('disabled', true).trigger("chosen:updated"); //disable computerList, because the user chose a phone.
    selectedDeviceID = $("#phoneList").val(); //set the selected device ID to the phoneList value
    selectedDeviceString = $("#phoneList option:selected").text(); //set the selected device string (readable by user) to the phoneList option name

    //now remove non-applicable options from the list:
    $("#problemList option[value='virus']").remove();
    $("#problemList option[value='OSupgrade']").remove();
    $("#problemList option[value='speedup']").remove();
    $("#problemList option[value='ssd']").remove();
    $('#problemList').trigger("chosen:updated"); //update the problem selection list
}

function updateEstimate() {
    selectedRepairID = $("#problemList").val();
    selectedRepairString = $("#problemList option:selected").text();

    $.ajax({
        type: "GET",
        url: "./data/price-data.json",
        beforeSend: function() {
            //alert("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "text",
        success: function(data) {
            var json = JSON.parse(data);
            cost = (json[selectedDeviceID][selectedRepairID]);
            $('#priceId').html("<strong>Cost: $"+cost+"</strong>");
        }
    });
    $('#info').html("Price for <strong>"+selectedDeviceString+"</strong> with repair: <strong>"+selectedRepairString+"</strong>.");
    //$('#testEx2').append("<h2>Cost: "+cost+"</h2>"); //<-- this doesn't work for some reason, "cost" is undefined?
}

$(document).ready(function() {
    //set these lists to use "chosen"
    $(".phoneList").chosen({width: "200px"});
    $(".computerList").chosen({width: "200px"});
    $(".problemList").chosen();
});