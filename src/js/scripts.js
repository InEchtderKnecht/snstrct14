(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    $(document).on('click', '.festival_tag, .category_tag', function(){
      $('body').toggleClass('darkSkin');
    });

    setTimeout(function(){
      $('body').removeClass('loading');
    },100);

  });

})(jQuery, window, document);
