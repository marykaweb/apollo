$( document ).ready(function() {

    $('#btn').on('click', function(e){
        e.preventDefault();

        popUp();
    });

    function popUp(){

        $.ajax({
            type: "POST",
            url: "ajax/action_ajax_form.php",

            success: function(text){
            console.log(text);

            $('.popup').html('<div class="popup-close"></div>'+text).fadeIn();

            $('.popup-close').on('click', function(){
                $('.popup').fadeOut();
            });
            
            text = "";

            }
        });
    }

});
