var countitem=0;

$(document).ready(function() { //
    $('.gallery_list li').each(function(index, element){ //
        ++countitem; //
    }); //5
    $('.gallery_photo').css('width', 1480*countitem);	 //
    $('.button_next').click(function() {	 //
        var sl = $('.gallery_wrapper').scrollLeft(); //
        var newsl = Number(sl)+Number(1500); //
        $('.gallery_wrapper').animate( {scrollLeft: newsl}, 'slow'); //
    });
    $('.button_prev').click(function() {	 //
        var sl = $('.gallery_wrapper').scrollLeft(); //
        var newsl = sl-1480; //
        $('.gallery_wrapper').animate( {scrollLeft: newsl}, 'slow'); //
    });
});