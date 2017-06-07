$(document).ready(function() {
  function resize() {
    var width = $('.hero').width();
    $('.hero').height(width/3);
  }
  resize();

  $(window).on('resize', function() {
    resize();
  });
});
