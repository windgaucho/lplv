menu_focus = function(element, i) {
  if ($(element).hasClass('active')) {
    if (i == 6) {
      if ($('.navbar').hasClass('inv') == false)
        return;
    } else {
      return;
    }
  }

  if (i == 1 || i == 6)
    $('.navbar').removeClass('inv');
  else
    $('.navbar').addClass('inv');

  $('.nav > li').removeClass('active');
  $(element).addClass('active');

  var icon = $(element).find('.icono');

  var left_pos = icon.offset().left - $('.nav').offset().left;
  var el_width = icon.width() + $(element).find('.text').width() + 10;

  $('.menu-barra').stop(false, false).animate({
      left: left_pos,
      width: el_width
    },
    1500,
    'easeInOutQuart'
  );
}

$(function() {
  var pause = 10;
  $(document).scroll(function(e) {
    delay(function() {

        var tops = [];

        $('.story').each(function(index, element) {
          tops.push($(element).offset().top - 200);
        });

        var scroll_top = $(this).scrollTop();

        var lis = $('.nav > li');

        for (var i = tops.length - 1; i >= 0; i--) {
          if (scroll_top >= tops[i]) {
            menu_focus(lis[i], i + 1);
            break;
          }
        }
      },
      pause);
  });
  $(document).scroll();
});

var delay = (function() {
  var timer = 0;
  return function(callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();
