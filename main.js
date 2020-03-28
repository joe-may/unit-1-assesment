$( document ).ready(function() {
    console.log("ready!");

var topNumber = 0;


function inputFunct() {
    $('#top').append(topNumber);
}

inputFunct();


var x = $('input').val();
var xNum = parseInt(x);
        console.log(xNum);


$('.plus').on('click',function() {
    var x = $('input').val();
    var xNum = parseInt(x);
    var x = $('input').val();
    topNumber += xNum;
    inputFunct();
});


});