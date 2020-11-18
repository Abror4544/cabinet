$(function () {

    $('.mainmenu').hide();
    $('.mainmenuAphorism').hide();


    $('.mainmenuBtn').click(function (event) {
        event.preventDefault();
        $('.mainmenu').fadeIn(500);
        $('.mainmenuTitle').hide(500);
        $('.mainmenuAphorism').fadeIn(500);
        $(this).hide();
    })

    $('.hideMenu').click(function (event) {
        event.preventDefault();
        $('.mainmenu').fadeOut(500);
        $('.mainmenuTitle').fadeIn(500);
        $('.mainmenuAphorism').fadeOut(500);
        $('.mainmenuBtn').show();
    })

    let link = $('nav ul li #portfolLink, #contactsLink');

    link.on('click', function (e) {
        e.preventDefault();
        
        let selector = $(this).addClass('active').attr('href');
        let target = $(selector);

        $('html, body').animate({ scrollTop: target.offset().top - 70 }, 1000);


    })

})
