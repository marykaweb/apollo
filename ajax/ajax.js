$( document ).ready(function() {

    $('#btn').on('click', function(e){
        e.preventDefault();
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        var mail = $('[data-field-mail]').val().trim();
        var message = $('[data-field-message]').val().trim();
        var errormail = $('<div class="error-block"><div class="alert alert-danger alert-mail-hide" role="alert" data-error-mail>Введите email</div></div>');
        var errorformatmail = $('<div class="error-block"><div class="alert alert-danger alert-message-hide" role="alert" data-error-formatmail>Некорректный email</div></div>');
        var errortext = $('<div class="error-block"><div class="alert alert-danger alert-message-hide" role="alert" data-error-message>Введите текст сообщения</div></div>');   
        
        if ( pattern.test( mail ) ) {
            $('[data-error-mail]').fadeOut();
            
            if ( message != '') {
                popUp();
                document.getElementById("ajax_form").reset();
            } else {
                $('[data-error-message]').fadeIn();
                $('[data-field-message]').on('focus', function(){
                $('[data-error-message]').fadeOut();
            });
                
            }
        } else if ( mail == '' ) {
            $('[data-error-mail]').fadeIn();

            $('[data-field-mail]').on('focus', function(){
                $('[data-error-mail]').fadeOut();
                errormail.remove();
            });

             $('[data-field-message]').on('focus', function(){
                $('[data-error-message]').fadeOut();
            });

        } else {
            $('[data-error-formatmail]').fadeIn();

            $('[data-field-mail]').on('focus', function(){
                $('[data-error-formatmail]').fadeOut();
            });

            $('[data-field-message]').on('focus', function(){
                $('[data-error-message]').fadeOut();
            });
        }

        if ( message == '') {
            $('[data-error-message]').fadeIn();
            $('[data-field-mail]').on('focus', function(){
                $('[data-error-formatmail]').fadeOut();
            });
        }      
       
        
    });

    function popUp(){

        $.ajax({
            type: "POST",
            url: "ajax/action_ajax_form.php",

            success: function(text){

            $('.popup').html('<div class="popup-close"></div>'+text).fadeIn();

            $('.popup-close').on('click', function(){
                $('.popup').fadeOut();
            });

            $(document).mouseup(function (e) {
            var popup = $('.popup');
            if (popup.has(e.target).length === 0){
                popup.fadeOut(1000);
            }
            });
            
            }
        });
    }

});
