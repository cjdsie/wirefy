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

*//* Other Slideshow Options

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

*//* Simple line of code to create a collapsed menu in smaller screen sizes. Originally developed by Jason Weaver http://jasonweaver.name/lab/flexiblenavigation/, FlexNav offers the ability to add submenus to your top-level information for more complex, deeper navigation.*/$("[role='navigation']").flexNav();$(".container").fitVids();$(".container").fitVids({customSelector:"iframe[src^='http://socialcam.com']"});