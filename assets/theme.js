// Show header on scroll up or top of the page
var header = $('#store--header');
var headerHeight = header.outerHeight(true);
var currentDistance = window.pageYOffset;

if(currentDistance == 0) {
    header.removeClass('sticky headHide');
} else {
    header.addClass('headHide').removeClass('sticky');
}

document.onscrollend = event => {
    currentDistance = window.pageYOffset;
}

$(window).scroll(function(){
    var newScroll = window.pageYOffset;

    if (newScroll < currentDistance) {
        header.addClass('sticky').removeClass('headHide');
    } else if(newScroll > currentDistance + 100) {
        header.addClass('headHide').removeClass('sticky');
    }
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