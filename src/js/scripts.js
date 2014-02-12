(function ($, window, document, undefined) {

  'use strict';

  //function setMainMargin($main) {
  //  var wHeight = $(window).height(),
  //    wWidth = $(window).width(),
  //    mainTopPadding = parseInt($main.css('padding-top'), 10),
  //    festivalTag = $main.find('.festival_tag').innerHeight();
  //  console.log(mainTopPadding + festivalTag);
  //  var margin = wHeight - (mainTopPadding * 2 + festivalTag);
  //  if (wWidth < 600) {
  //    //$main.css('margin-top', 'inherit');
  //  } else {
  //    //$main.css('margin-top', margin);
  //  }
  //}

  $(function () {

  // FireShell

    FastClick.attach(document.body);
    
    var s = skrollr.init();
    skrollr.menu.init(s, {
        animate: true,
        easing: 'swing'
      });

    $(window).load(function(){
      //setMainMargin($('.main'));
      s.refresh();
    });

    $(window).on('resize', function(){
      //setMainMargin($('.main'));
    });

    //$(document).on('click','.tag, .nav', function() {
    //  $('body').toggleClass('showMenu');
    //});


  });

})(jQuery, window, document);
