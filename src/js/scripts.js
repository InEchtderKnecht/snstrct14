(function ($, window, document, undefined) {

  'use strict';

  $(function () {

  // FireShell

    FastClick.attach(document.body);
    
    //var s = skrollr.init();
    //skrollr.menu.init(s, {
    //    animate: true,
    //    easing: 'swing'
    //  });

    $(window).load(function(){
      //s.refresh();
    });

    $(window).on('resize', function(){
      //setMainMargin($('.main'));
    });

    //$('.svg').each(function(i, element) {
    //  var watcher = scrollMonitor.create( element, -150 );
    //  watcher.lock();
    //  watcher.stateChange(function() {
    //    if (this.isAboveViewport) {
    //      $(element).addClass('state1');
    //    } else {
    //      $(element).removeClass('state1');
    //    }
    //  });
    //});


  });

})(jQuery, window, document);

