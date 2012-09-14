var mediaCheck = function( options ) {
  var mq,
      matchMedia = window.matchMedia !== undefined;
      
  mqChange = function( mq, options ) {
    if ( mq.matches ) {
      if ( typeof options.entry === "function" ) {
        options.entry();
      }
    } else if ( typeof options.exit === "function" ) {
      options.exit();
    }
  };
  
  if ( matchMedia ) {
    // Has matchMedia support
    createListener = function() {

      mq = window.matchMedia( options.media );
      mq.addListener( function() {
        mqChange( mq, options );
      });
      mqChange( mq, options );
    };
    createListener();
    
  } else {
    // capture the current pageWidth
    var pageWidth = window.outerWidth;

    // No matchMedia support
    var mmListener = function() {
      var parts = options.media.match( /\((.*)-.*:\s*(.*)\)/ ),
          constraint = parts[ 1 ],
          value = parseInt( parts[ 2 ], 10 ),
          fakeMatchMedia = {};

      // scope this to width changes to prevent small-screen scrolling (browser chrome off-screen) from
      //   triggering a change
      if (pageWidth != window.outerWidth) {
        fakeMatchMedia.matches = constraint === "max" && value > window.outerWidth ||
                                 constraint === "min" && value < window.outerWidth;
        mqChange( fakeMatchMedia, options );
        
        // reset pageWidth
        pageWidth = window.outerWidth;
      }
    };

    window.addEventListener( "resize", mmListener);
    mmListener();
  }
};