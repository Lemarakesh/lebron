$(document).ready(function() {
  // Create and append the lightbox HTML to the body
  const lightboxHtml = '<div id="lightbox-overlay" class="lightbox-overlay"><span class="lightbox-close">&times;</span><img id="lightbox-image" class="lightbox-image" src="" alt="Lightbox image"></div>';
  $('body').append(lightboxHtml);

  const $lightboxOverlay = $('#lightbox-overlay');
  const $lightboxImage = $('#lightbox-image');
  const $closeButton = $('.lightbox-close');

  // Open lightbox when a gallery image is clicked
  $('.gallery-grid img').on('click', function() {
    const imgSrc = $(this).attr('src');
    const imgAlt = $(this).attr('alt');
    $lightboxImage.attr('src', imgSrc).attr('alt', imgAlt);
    $lightboxOverlay.fadeIn();
  });

  // Function to close the lightbox
  function closeLightbox() {
    $lightboxOverlay.fadeOut();
  }

  // Close lightbox when the close button is clicked
  $closeButton.on('click', closeLightbox);

  // Close lightbox when clicking on the overlay background
  $lightboxOverlay.on('click', function(e) {
    if (e.target === this) {
      closeLightbox();
    }
  });

  // Close lightbox with the Escape key
  $(document).on('keyup', function(e) {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
});