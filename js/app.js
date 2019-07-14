"use strict";

let player = "X";

const App = {
    eventHandler: function() {
        $(document).on('change', '#chooseSymbol', function() {
            App.selectPlayer($(this).val());
        });

        $(document).on('click', '.nav ul li a', function () {
           App.hashAnimate($(this));
        });

        $(document).on('click', 'td', function () {
            App.randomColor($(this));
            App.changePlayer();
        });
    },

    // init: function(){},

    selectPlayer: function(symbol) {
        player = symbol;
    },

    hashAnimate: function (link) {
        var hash = link.attr('href');
        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
        return false;
    },

    randomColor: function (letter) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        //rgb(255, 255, 255)

        letter.css('color', "rgb(" + r + "," + g + "," + b + ")").html(player);

    },

    changePlayer: function () {
        if (player === "X" ){
            player = "O";
        } else {
            player = "X";
        }
    }
};

$(function() {
    // App.init();
    App.eventHandler();
});

