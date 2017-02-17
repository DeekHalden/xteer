;$(function() {
    $('.table-description').hide();
    $('.text__title--description').addClass('text__title--active');
    $('.text__title--table-description').on('click',function() {
        $(this).addClass('text__title--active');
        $('.text__title--description').removeClass('text__title--active');
        $('.table-description').show();
        $('.description').hide();
    });
    $('.text__title--description').on('click',function() {
        $(this).addClass('text__title--active');
        $('.text__title--table-description').removeClass('text__title--active');
        $('.table-description').hide();
        $('.description').show();
    })
})