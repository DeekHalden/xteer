$('.dropdown .item').on('click',function() {
        
        $(this).siblings().children().removeClass('links-wrapper--block');
        $(this).children().toggleClass('links-wrapper--block');
});

$('.filter .close-btn').on('click',function() {
    console.log($(this).parent());
    $(this).parent().hide();
});

$('.filter-menu .item').on('click',function() {
    $('.filter-dropdown').show();
})