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
