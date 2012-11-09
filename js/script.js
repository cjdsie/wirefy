/* There are three styles of Slideshows you can use. #Slider1 offers the ability to have center buttons underneath the images. #Slider2 offers left and right arrows. And finally #Slider3 is the Kitchen sink. Both centered buttons and nav arrows are used. For Development, please delete the Sliders you don't need.*/

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

/* Simple line of code to create a collapsed menu in smaller screen sizes. Originally developed by Jason Weaver http://jasonweaver.name/lab/flexiblenavigation/, FlexNav offers the ability to add submenus to your top-level information for more complex, deeper navigation.*/

$("[role='navigation']").flexNav();


/* FitVids is a standard when it comes to resizing videos through Responsive design. It currently supports inputs from YouTube, Vimeo, Blip.tv, Viddler and Kickstarter. FitVid also offers the ability to add your own vendor as well. */

$(".container").fitVids();
// Custom selector and No-Double-Wrapping Prevention Test
$(".container").fitVids({ customSelector: "iframe[src^='http://socialcam.com']"});