$('.off-canvas-toggle').on('click', function(e) {
  e.preventDefault();
  $('.off-canvas-wrap').toggleClass('open-menu');
});

$('.exit-off-canvas').on('click', function(e) {
  e.preventDefault();
  $('.off-canvas-wrap').removeClass('open-menu');
});
