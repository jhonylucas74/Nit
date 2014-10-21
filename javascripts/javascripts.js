$(document).ready(function() {
        var tamanhoJanela = $(window).width();
        $(".nav-toggle").remove();

            $('.nav').css('left', '-225px').addClass('side-fechado');
            $('.nav').append( "<div class='nav-toggle'><img src='imagens/ic_reorder_white_48dp.png' ></div>" );

            menu();
});



function menu() {
        $('.nav-toggle').click(function() {
            if($(".nav").hasClass("side-fechado")) {
                $('.nav').animate({
                    left: "0px",
                }, 100, function() {
                    $(".nav").removeClass("side-fechado");
                });
            }
            else {
                $('.nav').animate({
                    left: "-225px",
                }, 100, function() {
                    $(".nav").addClass("side-fechado");
                });
            }
        });
    }

