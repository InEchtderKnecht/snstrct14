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
    if (w >= 600) {
      $('.vvkContainer').css('min-height', h);
    } else {
      $('.vvkContainer').removeAttr('style');
    }
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

    FastClick.attach(document.body);

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

    $(document).bindWithDelay('mousemove', function( event ) {
      var percentX = -((0.5 - (event.clientX / $(window).width())) * -2),
        percentY = -((0.5 - (event.clientY / $(window).height())) * -2),
        offset1 = 'translate(' +
          Math.floor(($(window).width() / 110) * percentX) + 'px,' +
          Math.floor(($(window).height() / 110) * percentY) + 'px) scale(1.075)',
        offset2 = 'translate(' + 
          Math.floor(($(window).width() / 110) * -percentX) + 'px,' + 
          Math.floor(($(window).height() / 130) * percentY) + 'px) scale(1.075)',
        rotate1 = 'rotate(' + 
          Math.floor(($(window).width() / 170) * percentX * -percentY) + 'deg)';
      //  offsetTwo = 'translate(' + Math.floor(($(window).width() / 40) * percentX) + 'px,' + Math.floor(($(window).height() / 40) * percentY) + 'px) scale(1.06)',
      //  offsetThree = 'translate(' + Math.floor(($(window).width() / 200) * percentX) + 'px,' + Math.floor(($(window).height() / 100) * percentY) + 'px) scale(1.02)'
//

      $('.offset1').css({
        '-webkit-transform': offset1,
        '-moz-transform': offset1,
        '-o-transform': offset1,
        'transform': offset1
      });
      $('.offset2').css({
        '-webkit-transform': offset2,
        '-moz-transform': offset2,
        '-o-transform': offset2,
        'transform': offset2
      });
      //$illu.find('.layerOne > img').css({
      //  '-webkit-transform': offsetOne,
      //  '-moz-transform': offsetOne,
      //  '-o-transform': offsetOne,
      //  'transform': offsetOne
      //});
      //$illu.find('.layerTwo > img').css({
      //  '-webkit-transform': offsetTwo,
      //  '-moz-transform': offsetTwo,
      //  '-o-transform': offsetTwo,
      //  'transform': offsetTwo
      //});
      //$illu.find('.layerThree > img').css({
      //  '-webkit-transform': offsetThree,
      //  '-moz-transform': offsetThree,
      //  '-o-transform': offsetThree,
      //  'transform': offsetThree
      //});
      console.log(percentX);
      console.log(percentY);
    }, 10, true);

    //$('form').submit( function(event) {
    //  var form = this;
    //  event.preventDefault();
    //  $('body').addClass('loading');
    //  setTimeout(function(){ 
    //      form.submit(event);
    //    }, 450);
    //});

    $('input#orderNewsletter').on('click', function(event){
      var form = $(this).closest('form');
      event.preventDefault();
      $('body').addClass('loading');
      setTimeout(function(){
          $('body').html('');
          $('body').removeClass('darkSkin');
          form.submit();
        }, 450);
    }); 

    $(window).on('resize', function(){
      //setMainMargin($('.main'));
      setHeights();
    });

    $(window).on('load', function(){
      setTimeout(function(){
        $('body').removeClass('loading');
      },100);
    });

    $('a').on('click', function(e) {
      gotoSite(e, $(this));
    });

    $(document).on('click', '.festival_tag', function(){
      $('body').toggleClass('darkSkin');
      //$('.svgContainer').addClass('fadeOut');
      //setTimeout(function(){
      //  $('.svgContainer').removeClass('fadeOut');
      //}, 600);
      //setTimeout(function(){
      //  $('body').toggleClass('darkSkin');
      //}, 400);
    });


  });

})(jQuery, window, document);
