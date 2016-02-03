'use strict';
$(document).ready(function() {
  // Toggle sidebar
  $('.toggle-sidebar').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $('.sidebar').toggleClass('sidebar--is-open');
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
    $active.addClass('active');

    $content = $($active[0].hash);

    // Hide the remaining content
    $links.not($active).each(function() {
      $(this.hash).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a', function(e) {
      // Make the old tab inactive.
      $active.removeClass('active');
      $content.hide();

      // Update the variables with the new link and content
      $active = $(this);
      $content = $(this.hash);

      // Make the tab active.
      $active.addClass('active');
      $content.show();

      // Prevent the anchor's default click action
      e.preventDefault();
    });
  });

//searchable list
  $('.searchable-list__heading').on('click', function () {
    $(this).parent().toggleClass('searchable-list--open');
  });

  //table hover edit
  var buttons =
    '<div class="btn-group btn-group--hover"><button class="btn btn--success btn--small">Kommenter</button><button class="btn btn--success btn--small">Ignorer</button></div>';
  $('td.action').append(buttons);




  //smooth scroll
  // Get the height of the header
  var headerHeight = $(".site-header").height();

  // Attach the click event
  $('a[href*=#]').bind("click", function(e) {
      e.preventDefault();

      var target = $(this).attr("href"); //Get the target
      var scrollToPosition = $(target).offset().top;// - headerHeight;

      $('html,body').animate({ 'scrollTop': scrollToPosition }, 600, function(){
          window.location.hash = "" + target;
          // This hash change will jump the page to the top of the div with the same id
          // so we need to force the page to back to the end of the animation
          $('html').animate({ 'scrollTop': scrollToPosition }, 0);
      });
  });

  //Search function
  $('#filter').keyup(function(){
    // Retrieve the input field text and reset the count to zero
    var filter = $(this).val(), count = 0;

    // Loop through sections with an ID
    $('section[id]').each(function(){

        // If the list item does not contain the text phrase fade it out
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).fadeOut();

        // Show the list item if the phrase matches and increase the count by 1
        } else {
            $(this).show();
            count++;
        }
    });

    // Update the count
    var numberItems = count;
    $("#filter-count").text("Number of items = "+count);
    });

    //Scroll spy
    $(document).on('scroll', onScroll);
    function onScroll(event){
    var scrollPos = $(document).scrollTop();
      $('.page-contents a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr('href'));
          var headerHeight = $(".site-header").height();
          if (refElement.length) {
            var elementTop = refElement.position().top - headerHeight;
            var elementHeight = refElement.height();
          }
          if (elementTop <= scrollPos && elementTop + elementHeight > scrollPos &&  !$('#filter').val() ) {
              $('.page-contents a').removeClass('active');
              currLink.addClass('active');
          }
          else{
              currLink.removeClass('active');
          }
      });
    }

}); // end document ready

//Affix page contents to top of viewport
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var menuWidth = $('.page-contents--sticky').parent().innerWidth() - 50 + 'px';
  if (scroll >= 50) {
    $('.page-contents--sticky').addClass('affix');
    $('.page-contents--sticky').width(menuWidth);
  } else {
    $('.page-contents--sticky').removeClass('affix');
    $('.page-contents--sticky').css('width','auto');
  }
});
