$(function(){

    var url = window.location.pathname, 
        urlRegExp = new RegExp(url == '/' ? window.location.origin + '/?$' : url.replace(/\/$/,'')); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
        // now grab every link from the navigation
        $('.nav a').each(function(){
            // and test its normalized href against the url pathname regexp
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('active');
            } else{
	           $(this).removeClass('active');
            }
        });

});

var nav = responsiveNav(".nav-collapse", { // Selector
  animate: true, // Boolean: Use CSS3 transitions, true or false
  transition: 400, // Integer: Speed of the transition, in milliseconds
  label: "Menu", // String: Label for the navigation toggle
  insert: "after", // String: Insert the toggle before or after the navigation
  customToggle: "#toggle", // Selector: Specify the ID of a custom toggle
  openPos: "relative", // String: Position of the opened nav, relative or static
  jsClass: "js", // String: 'JS enabled' class which is added to <html> el
  init: function(){}, // Function: Init callback
  open: function(){}, // Function: Open callback
  close: function(){} // Function: Close callback
});



// Basic FitVids Test
        $(".headings").fitVids();
        // Custom selector and No-Double-Wrapping Prevention Test
        $(".headings").fitVids({ customSelector: "iframe[src^='http://socialcam.com']"});


		// Can also be used with $(document).ready()
		$(window).load(function() {
		  $('.flexslider').flexslider({
		    animation: "slide"
		  });
		});


/* Responsive Slideshow flexslider by woothemes */
// Can also be used with $(document).ready()
$(document).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});


/* Responsive navigation responsive-nav.js 1.0.23 by @viljamis

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
*/

/* FitVids is a standard when it comes to resizing videos through Responsive design. It currently supports inputs from YouTube, Vimeo, Blip.tv, Viddler and Kickstarter. FitVid also offers the ability to add your own vendor as well. 

$(".container").fitVids();
// Custom selector and No-Double-Wrapping Prevention Test
$(".container").fitVids({ customSelector: "iframe[src^='http://socialcam.com']"});*/