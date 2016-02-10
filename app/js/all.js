$.fn.deepLoupe = function() {

  return this.each(function() {

    var th = $(this);
        dataImage = th.data('image'),
        dataBackImage = th.data('back-image'),
        dataSize = th.data('size');

    th
      .addClass('deepLoupe')

      .resize(function() {
      th.find(".data-image, .de-loupe img").css({
        "width" : th.width()
      })
    })

      .append("
        <img class='data-image' src='" + dataImage + "'>
        <div class='de-loupe'>
          <img src='" + dataBackImage + "'>
      ")

      .hover(function(){
        th.find('.de-loupe').stop().fadeIn()
      },function(){
        th.find('.de-loupe').stop().fadeOut()
      })

      .find('.data-image').css({
        "width": th.width()
      }).parent().find('.de-loupe').css({
        "width": dataSize,
        "height": dataSize
      })
      .find('img').css({
        'position': 'absolute',
        "width": th.width()
      });

/*====================================
=            OFFSET LOUPE            =
====================================*/


  th.mousemove(function(e) {

    var objPos = {},
        offset = th.offset();

    objPos = {
      left: e.pageX - offset.left -dataSize/1,
      top: e.pageY - offset.top -dataSize/1
    }

    th
    .find('.de-loupe').css({
      'top': objPos['top'],
      'left': objPos['left']
    })

      .find('img').css({
        'top': -objPos['top'],
        'left': -objPos['left'],
        'width': th.width()
      })

  });

/*=====  End of OFFSET LOUPE  ======*/

      $(window).resize(function(){
        $('.deepLoupe').resize();
      });

  });

};