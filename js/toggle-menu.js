$(document).ready(main);
var contador = 1;
function main() {
    $('.menu-bar').click(function () {
        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });

    $('.menu-item').click(function () {
        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });

    $(window).resize(function () {
        if (window.innerWidth > 960) {
            $("nav").removeAttr("style");
        }
    });
}