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

    $(document).on('click', '.festival_tag', function(){
      $('.svgContainer').addClass('fadeOut');
      setTimeout(function(){
        $('.svgContainer').removeClass('fadeOut');
      }, 600);
      setTimeout(function(){
        $('body').toggleClass('darkSkin');
      }, 400);

      //$('body').toggleClass('darkSkin');
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

