'use strict';
$(document).ready(function() {
  // Toggle sidebar
  $('.toggle-sidebar').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $('.sidebar').toggleClass('sidebar--isOpen');
    $('main').toggleClass('push');
  });


  //Fix contentHeader to top of viewport when scrolling
  var contentHeader = $('.content-header--fixed');
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      contentHeader.css('top', '0');
    } else {
      contentHeader.css('top', 'auto');
    }
  });

}); // end document ready
