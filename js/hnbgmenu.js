$(".hnbg_btn").click(function() {
    $(this).toggleClass('active');
    $('.header_menu').toggleClass('active');
});

/*リンク先をクリックしたらメニュー閉じる*/
$(function() {
    $('.header_hummenu_list_menu_link').on('click', function(event) {
        $('#header_hummenu_back_input').prop('checked', false);
    });
});