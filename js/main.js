$(document).ready(function () {
  $('.slider').slick({
    lazyLoad: 'ondemand',
    arrows: true,
    dots: true,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
      responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  const _yearElementId = $('#current-year');
  const _fullYear = new Date();
  _yearElementId.text(_fullYear.getFullYear());
});






