$(document).ready(function() {
  function resize() {
    var width = $('.hero').width();
    $('.hero').height(width/3);
  }

  resize();

  $(window).on('resize', function() {
    resize();

    $('.card-image img').each(function(index) {
      $(this).attr('src', 'img/cards/600x600(' + index + ').jpg');
      $(this).height($(this).width() / 2);
    });
  });

  $('.card-image img').each(function(index) {
    $(this).attr('src', 'img/cards/600x600(' + index + ').jpg');
    $(this).height($(this).width() / 2);
  });

  var expanded = false;
  var navHeight = $('.content-nav').height();
  $('.down-triangle, .up-triangle').click(function() {
    if (!expanded) {
      $('.content-nav .wrapper').css('overflow', 'auto');
      $('.content-nav').css('height', 'auto');
      expanded = true;
      $('.down-triangle').hide();
      $('.up-triangle').show();
    } else {
      $('.content-nav').css('height', '80px');
      $('.content-nav .wrapper').css('overflow', 'hidden');
      expanded = false;
      $('.down-triangle').show();
      $('.up-triangle').hide();
    }
  });

  var carouselInfo = {
    '1': {
      src: 'img/hero/hero1.jpg',
      caption: "'Wonder Woman' scored record-breaking opening weekend"
    },
    '2': {
      src: 'img/hero/hero2.jpg',
      caption: 'Nine Inch Nails to release new EP soon'
    },
    '3': {
      src: 'img/hero/hero3.jpg',
      caption: 'New Kanye West tracks deaturing Migos and A$AP Rocky leak online'
    },
    '4': {
      src: 'img/hero/hero4.jpg',
      caption: 'Watch Pharrell and Miley Cyrus perform "happy" at the Manchester'
    }
  };

  //TO-DO CAROUSEL
  var i = 2;
  setInterval(function() {
    $('.main-square img').attr('src', carouselInfo[i.toString()].src);
    $('.main-square h2').html(carouselInfo[i.toString()].caption);
    i++;
    if (i === 5) {
      i = 1;
    }
  },5000);
});
