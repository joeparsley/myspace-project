$(document).ready(function() {
  var windowWidth = $(window).width();
  var firstRun = true;
  var now;
  var then = Date.now();


  function resize() {
    var width = $('.hero').width();
    $('.hero').height(width/3);
  }

  function navModify() {
    var liWidths = [];
    var classNames = [];
    var containerWidth = $('.content-nav .wrapper').width();
    var totalWidth = 0;
    var listItem;

    for (var i = 1; i <= 22; i++) {
      classNames.push(i);
    }

    for (var i = 0; i < classNames.length; i++) {
      liWidths.push($('.' + classNames[i].toString()).width());
    }

    liWidths = liWidths.map(function(width) {
      return (parseFloat(width) + 30);
    });


    if ($(window).width() < windowWidth || firstRun === true) {
      console.log('decreased in size');
      firstRun = false;
      for (var i = 0; i < liWidths.length; i++) {
        if (totalWidth + liWidths[i] > containerWidth) {
          $('.' + (i + 1)).appendTo($('.hidden-nav'));
          // totalWidth -= liWidths[i];
        } else {
          totalWidth += liWidths[i];
        }
      }
      windowWidth = $(window).width();
    }


    if ($(window).width() > windowWidth) {
      console.log('increased in size');
      firstRun = false;
      $('.hidden-nav li').each(function(i) {
        if (totalWidth - $(this).width() < containerWidth) {
          $('.' + (i + 1)).appendTo($('.visible-nav'));
          totalWidth += $(this).width();
        } else {
          totalWidth
        }
      });
      windowWidth = $(window).width();
    }


    totalWidth = 0;
  }

  navModify();
  resize();

  $(window).on('resize', function() {
    resize();

    now = Date.now();
    if (now - then > 1) {
      navModify();
      then = now;
    }

    $('.card-image img').each(function(index) {
      $(this).attr('src', 'img/cards/600x600(' + index + ').jpg');
      $(this).height($(this).width() / 2);
    });
  });

  $('.card-image img').each(function(index) {
    $(this).attr('src', 'img/cards/600x600(' + index + ').jpg');
    $(this).height($(this).width() / 2);
  });


























  // var expanded = false;
  // var navHeight = $('.content-nav').height();
  // $('.content-nav a').click(function() {
  //   if (!expanded) {
  //     $('.content-nav .wrapper').css('overflow', 'scroll');
  //     $('.content-nav').animate({height: '380px'}, 1000);
  //     expanded = true;
  //   } else {
  //     $('.content-nav').animate({height: navHeight}, 1000);
  //     expanded = false;
  //   }
  // });
  // var i = 2;
  // setInterval(function() {
  //   $('.main-square img').attr('src', 'img/hero/hero' + i +'.jpg');
  //   i++;
  //   if (i === 5) {
  //     i = 1;
  //   }
  // },3000);
});
//
// var counter = 1;
// $('imgselector').each(function() {
//   $(this).attr('src', 'path/600x600(' + counter + ').jpg');
//   counter++;
// });
