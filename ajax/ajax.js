$( document ).ready(function() {

    $('#btn').on('click', function(e){
        e.preventDefault();
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        var mail = $('[data-field-mail]').val().trim();
        var message = $('[data-field-message]').val().trim();
        var errormail = $('<div class="alert alert--mail alert-danger" role="alert" data-error-mail>Введите email</div>');
        var errorformatmail = $('<div class="alert alert--mail alert-danger" role="alert" data-error-formatmail>Некорректный email</div>');
        var errortext = $('<div class="alert alert--text alert-danger" role="alert" data-error-message>Введите текст сообщения</div>');   
        
        checking(pattern, mail, errormail, message, errortext, errorformatmail);

    function checking(pattern, mail, errormail, message, errortext, errorformatmail) {
    
        if ( pattern.test( mail ) ) {
        $('[data-error-mail]').fadeOut();
        
        if ( message != '') {
            ajaxForm();
            document.getElementById("ajax_form").reset();
        } else {
            $('[data-error-message]').fadeIn();
            $('[data-field-message]').on('focus', function(){
            $('[data-error-message]').fadeOut();
        });
            
        }
        } else if ( mail == '' ) {
            $('[data-field-mail]').before(errormail);

            $('[data-error-mail]').fadeIn();

            $('[data-field-mail]').on('focus', function(){
                $('[data-error-mail]').fadeOut();
            });

             $('[data-field-message]').on('focus', function(){
                $('[data-error-message]').fadeOut();
            });

        } else {

            $('[data-field-mail]').before(errorformatmail);

            $('[data-error-formatmail]').fadeIn();

            $('[data-field-mail]').on('focus', function(){
                $('[data-error-formatmail]').fadeOut();
            });

            $('[data-field-message]').on('focus', function(){
                $('[data-error-message]').fadeOut();
            });
        }

        if ( message == '') {

            $('[data-field-subject]').after(errortext);

            $('[data-error-message]').fadeIn();
            $('[data-field-mail]').on('focus', function(){
                $('[data-error-formatmail]').fadeOut();
            });
        }
    }

    function popUp(message){
        $('.popup').html('<div class="popup-close"></div>'+message).fadeIn();

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

    function ajaxForm() {
        $.ajax({
            type: "POST",
            url: "ajax/action_ajax_form.php",

            success: function(text){
                popUp(text);
            }
        });
    }

    });

});
