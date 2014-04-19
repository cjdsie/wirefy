/* There are three styles of Slideshows you can use. #Slider1 offers the ability to have center buttons underneath the images. #Slider2 offers left and right arrows. And finally #Slider3 is the Kitchen sink. Both centered buttons and nav arrows are used. For Development, please delete the Sliders you don't need.

// Slideshow 1
 $(".rslides").responsiveSlides({
   auto: false,
   pager: true,
   nav: true,
   speed: 500,
   maxwidth: 800,
   namespace: "centered-btns"
 });

 // Slideshow 2
 $(".rslides").responsiveSlides({
   auto: false,
   pager: true,
   nav: true,
   speed: 500,
   maxwidth: 800,
   namespace: "transparent-btns"
 });

 // Slideshow 3
  $(".rslides").responsiveSlides({
    manualControls: '#slider3-pager',
    maxwidth: 540
  });

  // Slideshow 4
  $(".rslides").responsiveSlides({
    auto: false,
    pager: false,
    nav: true,
    speed: 500,
    namespace: "callbacks",
    before: function () {
      $('.events').append("<li>before event fired.</li>");
    },
    after: function () {
      $('.events').append("<li>after event fired.</li>");
    }
  });

*/

/* Other Slideshow Options */

$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});


/* Responsive navigation responsive-nav.js 1.0.23 by @viljamis */

var nav = responsiveNav(".nav-collapse", { // Selector
  animate: true, // Boolean: Use CSS3 transitions, true or false
  transition: 400, // Integer: Speed of the transition, in milliseconds
  label: "Menu", // String: Label for the navigation toggle
  insert: "after", // String: Insert the toggle before or after the navigation
  customToggle: "", // Selector: Specify the ID of a custom toggle
  openPos: "relative", // String: Position of the opened nav, relative or static
  jsClass: "js", // String: 'JS enabled' class which is added to <html> el
  init: function(){}, // Function: Init callback
  open: function(){}, // Function: Open callback
  close: function(){} // Function: Close callback
});

/* FitVids is a standard when it comes to resizing videos through Responsive design. It currently supports inputs from YouTube, Vimeo, Blip.tv, Viddler and Kickstarter. FitVid also offers the ability to add your own vendor as well. */ 

$(".container").fitVids();
// Custom selector and No-Double-Wrapping Prevention Test
$(".container").fitVids({ customSelector: "iframe[src^='http://socialcam.com']"});