$(function() {
  var $test = $('#sidebar');
  
  mediaCheck({
    media: '(min-width: 45em)',
    entry: function() {
      	var offset = $("#sidebar").offset();
	      var topPadding = 15;
	      $(window).scroll(function() {
	          if ($(window).scrollTop() > offset.top) {
	              $("#sidebar").stop().animate({
	                  marginTop: $(window).scrollTop() - offset.top + topPadding
	              });
	          } else {
	              $("#sidebar").stop().animate({marginTop: 0});
	          };
	      });
    }
});

function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');

  $('.content a[href*=#]').each(function() {
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

});

$(".logo h2").lettering();
$("h1.float-up").fitText(1.1, {minFontSize: '36px', maxFontSize: '52px'});

/* Authentic Jobs */
$(function() {
  
  // Remove "uk." for listings from http://authenticjobs.com
  $.get("http://authenticjobs.com/js/jobs_r_single_v2.js", function(data) {  
    
    // Tailor the markup being assembled here to suit your site requirements / semantic preferences
    var listing = "<em>" + data.company + "</em> needs a <a href='" + data.url + "'>" + data.title  + "</a>";
    
    // Replace ".job-listing" with a selector for the container into which the listing will be inserted
    // Append will append the listing into the end of the container element.
    $(".job-listings").append(listing);
    
  }, "jsonp");
  
});



