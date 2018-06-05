$(document).ready(function () {

  var carousel = $("#waterwheel-carousel").waterwheelCarousel({
    separation: 330,
    separationMultiplier: 1,
    horizonOffsetMultiplier: 0,
    sizeMultiplier: 1,
    speed: 500,
    startingItem: 1,
    opacityMultiplier: 0
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
    sizeMultiplier: 0.6,
    speed: 300
  });

    $('.slider2-move-left').bind('click', function() {
   carousel2.prev();
   return false
 });

 $('.slider2-move-right').bind('click', function() {
   carousel2.next();
   return false;
 });
// slide
$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
	});
});