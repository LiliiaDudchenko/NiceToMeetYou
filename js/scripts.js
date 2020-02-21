$('.navigation').on('click', '.mobile_menu', function () {
    $(".navigation ul").slideToggle(400);
});

jQuery(window).resize(function () {
    const windowWidth = $(window).width();
    console.log(windowWidth);
    if (windowWidth > 768) {
        $('.navigation ul').css({
            display: 'flex'
        })
    } else {
        $('.navigation ul').css({
            display: 'none'
        })
    }
});