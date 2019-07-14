"use strict";

let player = "X";

function selectPlayer() {
    $('#chooseSymbol').change(function () {
        let selectedSymbol = $('#chooseSymbol option:selected').val();
        if (selectedSymbol === "X") {
            player = "X";
        } else {
            player = "O";
        }
    })
}

function changePlayer(){
    if(player === "X" ){
        player = "O";
    } else {
        player = "X";
    }
}
    $("td").on('click', function () {
        if($(this).html() === ""){
            $(this).css("color", randomColor()).html(player);
            changePlayer();
        }
    });


function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    //rgb(255, 255, 255)
    return "rgb(" + r + "," + g + "," + b + ")";
}


$( document ).ready(function() {
    selectPlayer();
});