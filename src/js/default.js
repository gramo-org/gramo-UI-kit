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

  $('.tabs__nav').each(function() {
    // For each set of tabs, we want to keep track of
    // which tab is active and its associated content
    var $active, $content, $links = $(this).find('a');

    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = $($links.filter('[href="' + location.hash + '"]')[0] ||
      $links[0]);
    $active.parent().addClass('tabs__nav__item--active');

    $content = $($active[0].hash);

    // Hide the remaining content
    $links.not($active).each(function() {
      $(this.hash).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a', function(e) {
      // Make the old tab inactive.
      $active.parent().removeClass('tabs__nav__item--active');
      $content.hide();

      // Update the variables with the new link and content
      $active = $(this);
      $content = $(this.hash);

      // Make the tab active.
      $active.parent().addClass('tabs__nav__item--active');
      $content.show();

      // Prevent the anchor's default click action
      e.preventDefault();
    });
  });

}); // end document ready
