if ($(window).innerWidth() < 1189) {
    var nav = $('.nav');
    var body = $(document.body);
    var button = $('.toggle-button');
    var drawer = $('.main-container');

    nav.addClass('nav--right');
    button.css('display', 'block');
    button.on('click', function() {

        button.toggleClass('toggle-button--active');
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
            button.toggleClass('toggle-button--active');
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
    var selectBox = $(".languages .select:first");
    // console.log(selectBoxit);
    selectBox.selectBoxIt();

}


var path = window.location.pathname;
var page = path.split("/").pop();
console.log(page);
var elements = document.getElementsByClassName('nav__element');
if (page == 'contacts.html' && $(window).width() > 1199) {
    var currency = $('.footer-wrapper .footer .currency.item span').clone(true);
    $('.languages').remove();
    $('.right-logo').replaceWith(currency).addClass('item');
   


}
if (page == 'delivery.html' && $(window).width() > 1199) {
    $('.languages').remove();

}
// for (var i = 0; i < elements.length; i++) {
//     var a = elements[i].childNodes[0].href;
//     elements[i].childNodes[0].classList.remove('active');
//     if (a.substring(a.lastIndexOf('/')) === '/' + page) {
//         elements[i].childNodes[0].classList.add('active');
//     }
// }