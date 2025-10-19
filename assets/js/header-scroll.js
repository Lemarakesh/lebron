$(document).ready(function() {
  // Function to add/remove the 'scrolled' class to the header
  function checkHeaderScroll() {
    // Check if the user has scrolled more than 50px
    if ($(window).scrollTop() > 50) {
      $('#header').addClass('scrolled');
    } else {
      $('#header').removeClass('scrolled');
    }
  }

  // Run the function on page load
  checkHeaderScroll();

  // Run the function on every scroll event
  $(window).on('scroll', checkHeaderScroll);
});
