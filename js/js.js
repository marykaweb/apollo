    $('.menu').hover(function(){ // задаем функцию при наведении курсора на элемент
        $('.navigation li').css({
            "display": "block",
            "float": "left"
        });
        $('.navigation li a').css({
            "padding-top": "10px"
        })
    }, function() { // задаем функцию, которая срабатывает, когда указатель выходит из элемента
        $('.navigation li').css("display", "none") // задаем цвет заднего фона
    });