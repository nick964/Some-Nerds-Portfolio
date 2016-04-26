(function() {
  $(document).ready(function() {
    var animate, i, item, items, len, mobile;
    $(".nav ul li a").click(function() {
      return $('html, body').animate({
        scrollTop: $("#" + ($(this).attr('class'))).offset().top
      }, 1000, 'easeInOutExpo');
    });
    $(".chevron .down").click(function() {
      return $('html, body').animate({
        scrollTop: $("#about").offset().top
      }, 750, 'easeInOutExpo');
    });
    mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if ($("html").hasClass("cssanimations") && !mobile) {
      animate = function(animation) {
        return $(animation[0]).addClass("concealed").viewportChecker({
          classToAdd: "visible animated " + (animation[1].trim()),
          offset: 200
        });
      };
      items = [['#about p', 'fadeInUp'], ['.column', 'fadeInUp'], ['.item', 'fadeInDown'], ['.bar', 'fadeInRight'], ['.paperplane', 'bounceInDown']];
      for (i = 0, len = items.length; i < len; i++) {
        item = items[i];
        animate(item);
      }
    }
    return $("#footer ul li").hover(function() {
      return $(this).find('p').stop(true, true).fadeIn(800);
    }, function() {
      return $(this).find('p').stop(true, true).fadeOut(800);
    });
  });

}).call(this);
