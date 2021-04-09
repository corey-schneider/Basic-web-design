/** This script handles our estimates webpage */

function disableProblemList() {
    $('#problemList').prop('disabled', true).trigger("chosen:updated");
}

//launch when a computer is selected
function disablePhoneList() {
    $('#phoneList').prop('disabled', true).trigger("chosen:updated");
}

//launch when phone is selected
function disableComputerList() {
    $('#computerList').prop('disabled', true).trigger("chosen:updated");
}
$(document).ready(function() {
    $(function () {
        $(".phoneList").chosen({width: "200px"});
        $(".computerList").chosen({width: "200px"});
        $(".problemList").chosen();
    });
});