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
    var $active, $content, $links = $(this).find('a');

    $active = $($links.filter('[href="' + location.hash + '"]')[0] ||
      $links[0]);
    $active.addClass('active');

    $content = $($active[0].hash);

    $links.not($active).each(function() {
      $(this.hash).hide();
    });

    $(this).on('click', 'a:not(.tabs__nav__close)', function(e) {
      $active.removeClass('active');
      $content.hide();
      $active = $(this);
      $content = $(this.hash);
      $active.addClass('active');
      $content.show();
    });
  });

  // $('.tabs__nav').each(function() {
  //   var $this = $(this);
  //   if ( $this.offset().left + $this.outerWidth() == $this.parent().offset().left + $this.parent().outerWidth() ) {
  //     console.log('equal');
  //     $this.append('<li class="tabs__nav__overflow"><a href="#">Flere</a><ul></ul></li>');
  //     var lastTab = $this.find('.tabs__nav__overflow').prev('.tabs__nav__item');
  //     $(lastTab).detach();
  //
  //     $this.find('.tabs__nav__overflow > ul').append($(lastTab));
  //   }
  // });
// $(window).resize(checkTabs);

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
  // var tableCell = $('td.table__cell--action');
  // var buttons =
  //   '<div class="btn-group btn-group--hover"><button class="btn btn--primary">Kommenter</button><button class="btn btn--secondary btn--small">Ignorer</button></div>';
  // appendElements(tableCell, buttons);
  var button = '<div class="btn-group btn-group--hover"><a class="btn btn--primary">Se detaljer</a></div>';
  var tableSummaryCell = $('.table-summary__cell--action');
  appendElements(tableSummaryCell, button);
  var actions = '<div class="btn-group btn-group--hover"><a href="searchA-2.html" class="btn btn--secondary"><i class="fa fa-thumb-tack"></i></a><a href="searchA-2.html" class="btn btn--secondary"><i class="fa fa-share-square-o"></i></a></div>';
  var tableSuccessCell = $('.fake-table__row--success .fake-table__cell--action');
  appendElements(tableSuccessCell, actions);
  var addButton = '<div class="btn-group btn-group--hover"><button class="btn btn--primary">Legg til</button></div>';
  var tableDrilldown = $('.drilldown-toggle:not(.dd-close) .table__cell--action');
  appendElements(tableDrilldown, addButton);

  //Expand table rows
  $('.fake-table__toggle-row').click(function(){
    $(this).closest('.fake-table__row').toggleClass('fake-table__row--expanded').siblings().removeClass('fake-table__row--expanded');
    // .siblings().removeClass('fake-table__row--expanded')
    // $(this).find('i').toggleClass('icon--chevron-right icon--chevron-down');
  });
  $('.table__head--expandable').click(function(){
    $(this).toggleClass('table__head--expanded').siblings().removeClass('table__head--expanded');
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
  var headerHeight = $(".toggle-sidebar").height();

  // Attach the click event
  $('.vertical__nav--sub__item > a[href*=#]').bind("click", function(e) {
      e.preventDefault();

      var target = $(this).attr("href"); //Get the target
      var scrollToPosition = $(target).offset().top - headerHeight;

      $('html,body').animate({ 'scrollTop': scrollToPosition }, 600, function(){
          window.location.hash = "" + target;
          // This hash change will jump the page to the top of the div with the same id
          // so we need to force the page to back to the end of the animation
          $('html').animate({ 'scrollTop': scrollToPosition }, 0);
      });
  });

  //Search function (src: http://www.designchemical.com/blog/index.php/jquery/live-text-search-function-using-jquery/)
  $('#filter').bind('keyup change', function(){
    // Retrieve the input field text and reset the count to zero
    var filter = $(this).val(), count = 0;
    //Show search clear button
    $('.search__clear').show();

    // Loop through sections with an ID
    $('section[id], section[id] > h3').each(function(){

        // If a section does not contain the text phrase fade it out
        if ($(this).html().search(new RegExp(filter, "i")) < 0) {
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

     $('h4:contains("Markup")').click(function(e){
       e.preventDefault();
       $(this).next('.highlight').toggleClass('is-visible')
     });
     
     $('.file-upload__toggle').click(function(e){
       e.preventDefault();
       $(this).next('.file-upload__inner').toggleClass('is-visible');
     });
     
     $('.file-upload__header--action a').click(function(e){
       e.preventDefault();
       $(this).closest('.file-upload__inner').removeClass('is-visible');
     });
     
     $('.toggle-comments').click(function(e){
       e.preventDefault();
       $(this).closest('.comments').toggleClass('show-inner');
     });
     
     $('.toggle-changelog').click(function(e){
       e.preventDefault();
       $(this).closest('.changelog').toggleClass('show-inner');
     });
     

    // //Scroll spy
    // function scrollSpy(menu) {
    //   $(document).on('scroll', onScroll);
    //   function onScroll(event){
    //   var scrollPos = $(document).scrollTop();
    //     $(menu).each(function () {
    //         var currLink = $(this);
    //         var refElement = $(currLink.attr('href'));
    //
    //         if (refElement.length) {
    //           var elementTop = refElement.position().top + 40;
    //           var elementHeight = refElement.height();
    //         }
    //         if (elementTop <= scrollPos && elementTop + elementHeight > scrollPos &&  !$('#filter').val() ) {
    //             $('.page-contents a').removeClass('active');
    //             currLink.addClass('active');
    //         }
    //         else{
    //             currLink.removeClass('active');
    //         }
    //     });
    //   }
    // }
    // scrollSpy('.page-contents a, .vertical__nav a');

// Make fake-table__panels__sidebar sticky

$("tr.drilldown-body[data-level=2]").click(function(){
    $(this).addClass("table__row--selected").siblings().removeClass("table__row--selected");
});

$('[aria-controls]').on("click", function(e) {
  e.preventDefault();
  $(this).attr('aria-expanded', function(index, attr) {
    return attr == 'true' ? 'false' : 'true';
    
  });
  $(this).parent().next('nav').toggleClass('nav-visible');
});



$('.form__input--toggle-visibility').click(function(){
  if ($(this).is(':checked')) {
      $(this).parent().prev().find('input[type="password"]').attr('type', 'text');
      $(this).parent().addClass('form__label--toggled');  
    } else {
      $(this).parent().prev().find('input[type="text"]').attr('type', 'password');
      $(this).parent().removeClass('form__label--toggled');
    }
})

$('.statusboard__close').click(function(){
  $(this).parent().toggleClass('statusboard--minimise');
});

$('.site-footer__close').click(function(e){
  e.preventDefault();
  $(this).parent().hide();
})

$('.help__toggle').click(function(e){
  e.preventDefault();
  $(this).parent().toggleClass('help--is-visible');
});

$('.flash-message__close').click(function(e){
  e.preventDefault();
  $(this).parent().remove();
});

$('.form__input--searchable').bind('blur', function(){ 
  $(this).next('.searchable-list').removeClass("searchable-list--open") 
});
$('.form__input--searchable').bind('focus', function(){ 
  $(this).next('.searchable-list').addClass("searchable-list--open") 
});

$('.link--edit').click(function(e){
  e.preventDefault();
  $(this).closest('section').find('.form').find('input, select').not('.locked').prop('disabled', function(i, v) { return !v; });
  $(this).closest('section').find('.form').find('.searchable-list').not('.locked').toggleClass('searchable-list--disabled');
  $(this).toggleClass('link--edit--hidden btn btn--secondary');
  
  if ( $(this).hasClass('link--edit--hidden') ) {
    $(this).text('Avbryt');
    $(this).parent().append('<button class="btn btn--primary">Lagre</button>');
  } else {
    $(this).parent().find('.btn--primary').remove();
    $(this).text('Rediger');
  }
});

}); // end document ready

//Affix page contents to top of viewport
// $(window).scroll(function() {
//   var scroll = $(window).scrollTop();
//   var menuWidth = $('.page-contents--sticky').parent().innerWidth() - 50 + 'px';
//   if (scroll >= 50) {
//     $('.page-contents--sticky , .fake-table__panels__sidebar').addClass('affix');
//     $('.page-contents--sticky').width(menuWidth);
//   } else {
//     $('.page-contents--sticky , .fake-table__panels__sidebar').removeClass('affix');
//     $('.page-contents--sticky').css('width','auto');
//   }
// });
