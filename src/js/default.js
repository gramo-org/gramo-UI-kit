// Default JavaScript Functions and Initiations
$(document).ready(function() {

  $('.toggle-sidebar').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $('.sidebar').toggleClass('sidebar--isOpen');
    $('main').toggleClass('push');
  });

}); // end document ready
