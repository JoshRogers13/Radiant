// Show header on scroll up or top of the page
var header = $('#store--header');
var lastScrollTop = 0;

$(window).scroll(function(){

    var st = $(this).scrollTop();

    if (st > lastScrollTop ){
        header.removeClass('sticky').addClass('headHide');
    } else if (st == 0) {
        header.removeClass('sticky', 'headHide');
    } else if ( st < lastScrollTop ){
        header.removeClass('headHide').addClass('sticky');
    }

    lastScrollTop = st;

});