/*トップに戻る*/

jQuery(function() {
    var appear = false;
    var toppage = $('#top_return');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            if (appear == false) {
                appear = true;
                toppage.stop().animate({
                    'bottom': '50px'
                }, 400);
            }
        } else {
            if (appear) {
                appear = false;
                toppage.stop().animate({
                    'bottom': '-200px'
                }, 400);
            }
        }
    });
    top.click(function() {
        $('body, html').animate({ scrollTop: 0 }, 1000);
        return false;
    });
});