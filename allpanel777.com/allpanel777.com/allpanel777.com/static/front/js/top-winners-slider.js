/**
 * Top Winners Slider Configuration
 * Adds sliding functionality to the Top Winners section
 */
$(document).ready(function() {
  // Initialize the top winners slider
  $('.top-winners-list-container .slick-slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  // Add navigation buttons
  $('.top-winners-list-container').append(
    '<div class="slider-navigation">' +
    '<button class="prev-btn"><i class="fas fa-chevron-left"></i></button>' +
    '<button class="next-btn"><i class="fas fa-chevron-right"></i></button>' +
    '</div>'
  );

  // Custom navigation
  $('.top-winners-list-container .prev-btn').on('click', function() {
    $('.top-winners-list-container .slick-slider').slick('slickPrev');
  });

  $('.top-winners-list-container .next-btn').on('click', function() {
    $('.top-winners-list-container .slick-slider').slick('slickNext');
  });
}); 