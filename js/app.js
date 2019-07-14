"use strict";

let player = "X";

function changePlayer(){
  /*player változó értéke alapján beállítjuk a player változó értékét a másik játékos szimbólumára*/
    if(player === "X" ){
        player = "O";
    } else {
        player = "X";
    }
}

$("td").click(function(){
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