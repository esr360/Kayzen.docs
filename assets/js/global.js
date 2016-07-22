
/* Global Scripts
================================================================ */

$(document).ready(function() {

/******************************************************************
Off-Canvas/Mobile Menu
******************************************************************/

$("#app-header .main-nav > ul").clone().appendTo("#off-canvas-nav");

/******************************************************************
Sticky Navigation
******************************************************************/

if (window.matchMedia('(min-width: 940px)').matches) {
    $(".doc-nav").sticky({
        topSpacing : 92,
        bottomSpacing : 100,
        getWidthFrom: '.doc-nav-wrapper'
    });
}

/******************************************************************
Sticky Side Bar
******************************************************************/

if (window.matchMedia('(min-width: 940px)').matches) {
    $(".side-bar").sticky({
        topSpacing : 92,
        bottomSpacing : 100,
        getWidthFrom: '.side-bar-wrapper'
    });
}

/******************************************************************
Smooth Scroll
******************************************************************/

$('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name="' + this.hash.slice(1) +'"]');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 90
            }, 1200);
            return false;
        }
    }
});

/******************************************************************
Scroll to Top
******************************************************************/

$(window).bind("scroll", function() {
    if ($(this).scrollTop() > 350) {
        $(".scroll-top").addClass('active');
    } else {
        $(".scroll-top").stop().removeClass('active');
    }
});


/******************************************************************
Modals
******************************************************************/

$('.modal-image').magnificPopup({ 
	type: 'image',
});

$('.modal-gallery').magnificPopup({ 
	type: 'image',
	delegate: 'a',
	gallery: {
		enabled: true
	},
});

$('.inline-modal').magnificPopup({
	type:'inline',
	midClick: true,
});

/******************************************************************
Tooltip
******************************************************************/

 $('.tooltip').tipr({
    'speed': 300,
    'mode': 'top'
 });

}); // end document.ready


/* Scroll Spy
================================================================ */

$(window).load(function(){

  // http://jsfiddle.net/mekwall/up4nu/

  // Cache selectors
  var lastId,
      topMenu = $(".doc-index > ul"),
      headerHeight = $('.app-header').outerHeight() + 30,
      // All list items
      menuItems = topMenu.find("a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

  // Bind to scroll
  $(window).scroll(function(){
     // Get container scroll position
     var fromTop = $(this).scrollTop() + headerHeight;
     
     // Get id of current scroll item
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     // Get the id of the current element
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";
     
     if (lastId !== id) {
         lastId = id;
         // Set/remove active class
         menuItems
           .parent().removeClass("active")
           .end().filter("[href=#"+id+"]").parent().addClass("active");
     }                   
  });

}); // End window.load