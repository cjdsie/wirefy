$(document).ready(function(){
   
  	// Slideshow 1
    $("#slider1").responsiveSlides({
      auto: false,
      pager: true,
      nav: true,
      speed: 500,
      namespace: "centered-btns"
    });

    // Slideshow 2
    $("#slider2").responsiveSlides({
      auto: false,
      pager: true,
      nav: true,
      speed: 500,
      namespace: "transparent-btns"
    });

    // Slideshow 3
    $("#slider3").responsiveSlides({
      auto: false,
      pager: false,
      nav: true,
      speed: 500,
      namespace: "large-btns"
    });


 
 });