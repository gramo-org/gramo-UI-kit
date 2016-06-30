'use strict';
$(document).ready(function() {
  // Toggle sidebar
  $('.toggle-sidebar a').click(function(e) {
    e.preventDefault();
    $('.toggle-sidebar').toggleClass('open');
    $('.sidebar').toggleClass('sidebar--is-expanded');
    $('main').toggleClass('pull');
  });

  //Reset sidebar when window is < or > 768px
  // var $window = $(window);
  //
  // function checkWidth() {
  //   if ($window.width() < 768) {
  //     $('.toggle-sidebar').removeClass('open');
  //     $('.sidebar').addClass('sidebar--is-collapsed');
  //     $('main').addClass('pull');
  //
  //   } else if ($window.width() > 768) {
  //     $('.toggle-sidebar').addClass('open');
  //     $('.sidebar').removeClass('sidebar--is-collapsed');
  //     $('main').removeClass('pull');
  //   }
  // }
  //
  // // Execute on load
  // checkWidth();
  // // Bind event listener
  // // $(window).resize(checkWidth);


  //Fix contentHeader to top of viewport when scrolling
  var contentHeader = $('.content-header--fixed');
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      contentHeader.css('top', '3rem');
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
      // e.preventDefault();
    });
  });

//searchable list
  $('.searchable-list__heading').on('click', function () {
    $(this).parent().toggleClass('searchable-list--open');
  });

  //table hover edit buttons
  function appendElements(target, elements) {
    $(target).each(function(){
      $(this).append(elements);
    });
    }
  var tableCell = $('td.table__cell--action');
  var buttons =
    '<div class="btn-group btn-group--hover"><button class="btn btn--success btn--small">Kommenter</button><button class="btn btn--secondary btn--small">Ignorer</button></div>';
  appendElements(tableCell, buttons);
  var button = '<div class="btn-group btn-group--hover"><a class="btn btn--success btn--small">Se detaljer</a></div>';
  var tableSummaryCell = $('.table-summary__cell--action');
  appendElements(tableSummaryCell, button);
  var actions = '<div class="btn-group btn-group--hover"><a href="searchA-2.html" class="btn btn--secondary btn--small"><i class="fa fa-thumb-tack"></i></a><a href="searchA-2.html" class="btn btn--secondary btn--small"><i class="fa fa-share-square-o"></i></a></div>';
  var tableSuccessCell = $('.fake-table__row--success .fake-table__cell--action');
  appendElements(tableSuccessCell, actions);

  //Expand table rows
  $('.fake-table__toggle-row').click(function(){
    $(this).closest('.fake-table__row').toggleClass('fake-table__row--expanded').siblings().removeClass('fake-table__row--expanded');
    // .siblings().removeClass('fake-table__row--expanded')
    // $(this).find('i').toggleClass('icon--chevron-right icon--chevron-down');
  });

  //Toggle Vertical nav
  $('.vertical__nav__item--has-children > a').click(function(e){
    e.preventDefault();
    $(this).parent().toggleClass('vertical__nav__item--is-expanded');
  })

  //Button select
  $('.btn-select .btn').click(function(e){
    e.preventDefault();
    $(this).parent().toggleClass('btn-select--active');
  });
  $('.btn-select ul a').click(function(e){
    e.preventDefault();
    $(this).closest('.btn-select').removeClass('btn-select--active');
    $('.btn-select .btn > span').text($(this).text());
  });

  //smooth scroll
  // Get the height of the header
  var headerHeight = $(".site-header").height();

  // Attach the click event
  $('a[href*=#]').bind("click", function(e) {
      e.preventDefault();

      var target = $(this).attr("href"); //Get the target
      var scrollToPosition = $(target).offset().top;

      $('html,body').animate({ 'scrollTop': scrollToPosition }, 600, function(){
          window.location.hash = "" + target;
          // This hash change will jump the page to the top of the div with the same id
          // so we need to force the page to back to the end of the animation
          $('html').animate({ 'scrollTop': scrollToPosition }, 0);
      });
  });

  //Search function
  $('#filter').bind('keyup change', function(){
    // Retrieve the input field text and reset the count to zero
    var filter = $(this).val(), count = 0;
    //Show search clear button
    $('.search__clear').show();

    // Loop through sections with an ID
    $('section[id]').each(function(){

        // If a section does not contain the text phrase fade it out
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).fadeOut();

        // Show the section if the phrase matches and increase the count by 1
      } else {
            $(this).show();
            count++;
        }
    });

    if ( $(this).val().length === 0 ) {
      $('.search__clear').hide();
    }

    // Update the count
    // var numberItems = count;
    // $("#filter-count").text("Number of items = "+count);
    });

    //Clear search form
    $('.search__clear').click(function(){
      $(this).prev('input').val('');
      $('section[id]').show();
      $(this).hide();
     });


    //Scroll spy
    function scrollSpy(menu) {
      $(document).on('scroll', onScroll);
      function onScroll(event){
      var scrollPos = $(document).scrollTop();
        $(menu).each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr('href'));

            if (refElement.length) {
              var elementTop = refElement.position().top - 30;
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
    }
    scrollSpy('.page-contents a, .vertical__nav a');

// Make fake-table__wrapper--sidebar sticky



}); // end document ready

//Affix page contents to top of viewport
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var menuWidth = $('.page-contents--sticky').parent().innerWidth() - 50 + 'px';
  if (scroll >= 50) {
    $('.page-contents--sticky , .fake-table__wrapper--sidebar').addClass('affix');
    $('.page-contents--sticky').width(menuWidth);
  } else {
    $('.page-contents--sticky , .fake-table__wrapper--sidebar').removeClass('affix');
    $('.page-contents--sticky').css('width','auto');
  }
});
