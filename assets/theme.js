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

// Show Mobile Menu
var menuTrigger = $('.header--icon-link-menu'),
    menu = $('.header--nav-wrapper'),
    menuCloseBtn = $('.close-navigation'),
    headerOverlay = $('.header--overlay');

var headerClassesToAdd = {
    headerOpen: 'open',
    overlayOpen: 'active',
}

// Function to open the menu
function openMenu(trigger) {
    trigger.on('click', () => {
        menu.addClass(headerClassesToAdd.headerOpen);
        headerOverlay.addClass(headerClassesToAdd.overlayOpen);
    });
}

// Function to close the menu
function closeMenu(trigger) {
    trigger.on('click', () => {
        menu.removeClass(headerClassesToAdd.headerOpen);
        headerOverlay.removeClass(headerClassesToAdd.overlayOpen);
    });
}

openMenu(menuTrigger);
closeMenu(headerOverlay);
closeMenu(menuCloseBtn);

// Show Accordion Items on click
var accordionItem = $('.accordion--item');

var accordionClassesToAdd = {
    accordionOpen: 'open'
}

accordionItem.on('click', () => {
    if($(this).hasClass(accordionClassesToAdd.accordionOpen)) {
        $(this).removeClass(accordionClassesToAdd.accordionOpen);
    } else {
        accordionItem.removeClass(accordionClassesToAdd.accordionOpen);
        $(this).addClass(accordionClassesToAdd.accordionOpen);
    }
});