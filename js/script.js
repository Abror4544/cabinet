$(function () {

    $('.mainmenu').hide();
    $('.mainmenuAphorism').hide();


    $('.mainmenuBtn').click(function () {
        $('.mainmenu').fadeIn(500);
        $('.mainmenuTitle').hide(500);
        $('.mainmenuAphorism').fadeIn(500);
        $(this).hide();
    })

    $('.hideMenu').click(function () {
        event.preventDefault();
        $('.mainmenu').fadeOut(500);
        $('.mainmenuTitle').fadeIn(500);
        $('.mainmenuAphorism').fadeOut(500);
        $('.mainmenuBtn').show();
    })

})
