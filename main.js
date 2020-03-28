

$( document ).ready(function() {
    console.log("ready!");



/////////////////////////
var topNumber = 0;
var x = $('input').val();
var xNum = parseInt(x);
        console.log(xNum);

////////////////////////


function inputFunct() {
    $('.top').append("<p>" + topNumber + "</p>");
}

inputFunct();



$('input').on('click',function() {
    $('p').first().remove();
});

$('.plus').on('click',function() {
    var x = $('input').val();
    var xNum = parseInt(x);
    var x = $('input').val();
    topNumber += xNum;
    inputFunct();
    blackNums();
});

$('.minus').on('click',function() {
    var x = $('input').val();
    var xNum = parseInt(x);
    var x = $('input').val();
    topNumber -= xNum;
    inputFunct();
    redNums();
    blackNums();
});

function redNums() {
    if(topNumber < 0) {
        $('.top').css("color", "red");  
    } else {
       return; 
    }
}

function blackNums() {
    if(topNumber > 0) {
        $('.top').css("color", "black");  
    } else {
       return; 
    }
}
/////////////////////////


});

