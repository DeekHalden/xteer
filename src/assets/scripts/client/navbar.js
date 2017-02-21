if ($(window).innerWidth() < 1189) {
    var nav = $('.nav');
    var body = $(document.body);
    var button = $('.toggle-button');
    var drawer = $('.main-container');

    nav.addClass('nav--right');
    button.css('display', 'block');
    button.on('click', function() {
        button.toggleClass('active');
        nav.toggleClass('active');
        drawer.toggleClass('active');
        // nav.toggleClass('active');
    });
    body.on('click', function(event) {
        if (drawer[0].classList.contains('active')) {
            var target = event.target;
            if (target === nav || nav[0].contains(target)) {
                return
            }
            button.toggleClass('active');
            nav.toggleClass('active');
            drawer.toggleClass('active');
        }
    })

    var languages = $('.languages');
    var li = $('<li class="item"></li>');
    var ul = $('.nav');
    li.append(languages);
    ul.prepend(li);
    $('.footer-navigation').hide();
}