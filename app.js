$(function() {

   const header = $("#header");
   const intro = $("#intro");
   let introH = intro.innerHeight();
   const nav = $("#nav");
   const navToggle = $("#navToggle");


    // -- fixed header 
   $(window).on("scroll resize", function() {
       if( window.pageYOffset > introH ) {
        header.addClass("fixed");
       } else {
        header.removeClass("fixed");
       }
   });


   // -- scroll element
   $("[data-scroll]").on("click", function(event) {
       event.preventDefault();

       let elementId = $(this).data('scroll');
       let elementOffset = $(elementId).offset().top;
       nav.removeClass("show");

       $("html, body").animate({
           scrollTop: elementOffset - 70
       }, 600);
   });


   // -- nav toggle 
   navToggle.on("click", function(event) {
       event.preventDefault();
       nav.toggleClass("show");
   });


   // reviews: https://kenwheeler.github.io/slick/ */
   let slider = $("#reviewsSlider");

   slider.slick({
       infinite: true,
       slidesToShow: 1,
       slidesToScroll: 1,
       fade: true,
       arrows: false,
       dots: true
   });

});
