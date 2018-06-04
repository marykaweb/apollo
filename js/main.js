$(document).ready(function () {

  var carousel = $("#waterwheel-carousel").waterwheelCarousel({
    separation: 330,
    separationMultiplier: 1,
    horizonOffsetMultiplier: 1,
    sizeMultiplier: 1
  });

   $('.slider1-move-left').bind('click', function() {
   carousel.prev();
   return false
 });

 $('.slider1-move-right').bind('click', function() {
   carousel.next();
   return false;
 });

 var carousel2 = $("#waterwheel-carousel-center").waterwheelCarousel({
    separation: 330,
    separationMultiplier: 3,
    horizonOffsetMultiplier: 1,
    sizeMultiplier: 0.6
  });

    $('.slider2-move-left').bind('click', function() {
   carousel2.prev();
   return false
 });

 $('.slider2-move-right').bind('click', function() {
   carousel2.next();
   return false;
 });

});