(function($) {

  'use strict';

  $.fn.bindWithDelay = function( type, data, fn, timeout, throttle ) {
    if ( $.isFunction( data ) ) {
      throttle = timeout;
      timeout = fn;
      fn = data;
      data = undefined;
    }
    // Allow delayed function to be removed with fn in unbind function
    fn.guid = fn.guid || ($.guid && $.guid++);
    // Bind each separately so that each element has its own delay
    return this.each(function() {
        
      var wait = null;
    
      function cb() {
          var e = $.extend(true, { }, arguments[0]);
          var ctx = this;
          var throttler = function() {
              wait = null;
              fn.apply(ctx, [e]);
            };
          
          if (!throttle) { clearTimeout(wait); wait = null; }
          if (!wait) { wait = setTimeout(throttler, timeout); }
        }
      
      cb.guid = fn.guid;
      $(this).bind(type, data, cb);
    });
  };
})(jQuery);

(function ($, window, document, undefined) {

  'use strict';

  function setHeights() { 
    var h = $(window).height();
    var w = $(window).width();
    $('.staticContainer').css('min-height', h);
    //if (w >= 600) {
    //  $('.staticContainer').css('min-height', h);
    //} else {
    //  $('.staticContainer').removeAttr('style');
    //}
  }

  function gotoSite(e, $this) {
    var changePage = $this.hasClass('changePage');
    if (changePage) {
      e.preventDefault();
      var addressValue = $this.attr('href');
      $('body').addClass('loading');
      setTimeout(function(){
        $('body').html('');
        $('body').removeClass('darkSkin');
        window.location.href = addressValue;
      }, 450);
    }
  }

  $(function () {

  // FireShell

    //FastClick.attach(document.body);

    setHeights();
    
    //var s = skrollr.init();
    //skrollr.menu.init(s, {
    //    animate: true,
    //    easing: 'swing'
    //  });

    $(window).load(function(){
      //s.refresh();
      //alert('jo');
    });

//    $(document).bindWithDelay('mousemove', function( event ) {
//      var percentX = -((0.5 - (event.clientX / $(window).width())) * -2),
//        percentY = -((0.5 - (event.clientY / $(window).height())) * -2),
//        offset1 = 'translate(' +
//          Math.floor(($(window).width() / 300) * percentX) + 'px,' +
//          Math.floor(($(window).height() / 300) * percentY) + 'px) scale(1.075)',
//        offset2 = 'translate(' +
//          Math.floor(($(window).width() / 120) * percentX) + 'px,' +
//          Math.floor(($(window).height() / 120) * percentY) + 'px) scale(1.075)',
//        offset3 = 'translate(' +
//          Math.floor(($(window).width() / 40) * percentX) + 'px,' +
//          Math.floor(($(window).height() / 40) * percentY) + 'px) scale(1.075)',
//        offset1i = 'translate(' + 
//          Math.floor(($(window).width() / 110) * -percentX) + 'px,' + 
//          Math.floor(($(window).height() / 110) * -percentY) + 'px) scale(1.075)';
//
//      $('.offset1').css({
//        '-webkit-transform': offset1,
//        '-moz-transform': offset1,
//        '-o-transform': offset1,
//        'transform': offset1
//      });
//      $('.offset1i').css({
//        '-webkit-transform': offset1i,
//        '-moz-transform': offset1i,
//        '-o-transform': offset1i,
//        'transform': offset1i
//      });
//      $('.offset2').css({
//        '-webkit-transform': offset2,
//        '-moz-transform': offset2,
//        '-o-transform': offset2,
//        'transform': offset2
//      });
//      $('.offset3').css({
//        '-webkit-transform': offset3,
//        '-moz-transform': offset3,
//        '-o-transform': offset3,
//        'transform': offset3
//      });
//
//      console.log(percentX);
//      console.log(percentY);
//    }, 10, true);

    $('form').submit( function(event) {
      var form = this;
      event.preventDefault();
      $('body').addClass('loading');
      setTimeout(function(){ 
          form.submit(event);
        }, 440);
      setTimeout(function(){ 
          $('body').removeClass('darkSkin');
          $('body').html('');
        }, 450);
    });

    //$('input#orderNewsletter').on('click', function(event){
    //  var form = $(this).closest('form');
    //  event.preventDefault();
    //  $('body').addClass('loading');
    //  setTimeout(function(){
    //      form.submit();
    //      $('body').removeClass('darkSkin');
    //      $('body').html('');
    //    }, 450);
    //}); 

    $(window).on('resize', function(){
      //setMainMargin($('.main'));
      setHeights();
    });

    //$(window).on('load', function(){
    //  setTimeout(function(){
    //    $('body').removeClass('loading');
    //  },100);
    //});

    $('a').on('click', function(e) {
      gotoSite(e, $(this));
    });

    $(document).on('click', '.festival_tag', function(){
      $('body').toggleClass('darkSkin');
    });

    $(document).on('click', '.showAgb', function(){
      var past = $(this).html();
      var future = $(this).data('alt');
      $(this).html(future);
      $(this).data('alt', past);
      console.log(past);
      console.log(future);
      $('.agb').slideToggle();
    });

    setTimeout(function(){
      $('body').removeClass('loading');
    },100);


  });

})(jQuery, window, document);
