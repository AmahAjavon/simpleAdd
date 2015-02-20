'use strict'

$(document).ready(init);

function init() {
    $("#add").click(function() {
    var firstnumber = $("#firstnumber").val();
    var secondnumber = $("#secondnumber").val();
    var total = parseInt(firstnumber) + parseInt(secondnumber);
    alert(total);
    console.log(firstnumber, secondnumber);
    $("#total").val(total);
});
}
