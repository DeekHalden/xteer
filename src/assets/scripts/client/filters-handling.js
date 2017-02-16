if($(window).width() < 1199) {
    $('.aside-filters .group').toggle();
    $('.collapse-btn').on('click',function() {
        $('.aside-filters .group').toggle();
    });

    var hiddenElement = $('.group form, .group .price-slider');
    hiddenElement.toggle();

    $('.group .group__title').click(function(e) {
        e.preventDefault();
        $(this)
            .toggleClass('group__title--active')
            .parent()
            .find(hiddenElement)
            .toggle();
    });
}