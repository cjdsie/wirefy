$(document).ready(function(){
   
  // Create the dropdown base
  $("<select />").appendTo("nav.main");
  
  // Create default option "Go to..."
  $("<option />", {
     "selected": "selected",
     "value"   : "",
     "text"    : "Go to..."
  }).appendTo("nav.main select");
  
  // Populate dropdown with menu items
  $("nav.main a").each(function() {
   var el = $(this);
   $("<option />", {
       "value"   : el.attr("href"),
       "text"    : el.text()
   }).appendTo("nav.main select");
  });
  
   // To make dropdown actually work
   // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
  $("nav.main select").change(function() {
    window.location = $(this).find("option:selected").val();
  });





$("<select />").appendTo("nav.menu1");

  // Create default option "Go to..."
  $("<option />", {
     "selected": "selected",
     "value"   : "",
     "text"    : "Go to..."
  }).appendTo("nav.menu1 select");

  // Populate dropdown with menu items
  $("nav.menu1 a").each(function() {
   var el = $(this);
   $("<option />", {
       "value"   : el.attr("href"),
       "text"    : el.text()
   }).appendTo("nav.menu1 select");
  });

   // To make dropdown actually work
   // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
  $("nav.menu1 select").change(function() {
    window.location = $(this).find("option:selected").val();
  });


$("[role='navigation']").flexNav();



/* Anchor Link Scroll */

 function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');

  $('.main a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });

  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }



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