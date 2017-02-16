$('.dropdown .item').on('click',function() {
        $(this).siblings().children().removeClass('links-wrapper--block');
        $(this).children().toggleClass('links-wrapper--block');
});

$('.dropdown .item').hover(function(){
    var item = $(this);
    var a = setTimeout(function(){
        item.siblings().children().removeClass('links-wrapper--block');
        item.children().toggleClass('links-wrapper--block');
        
    },500);
});



$('.filter .close-btn').on('click',function() {
    
    $(this).parent().css('visibility','hidden');
});

$('.filter-menu .item').on('click',function() {

    $('.filter-dropdown').css('visibility', 'visible');
})