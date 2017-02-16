$('.item-card .button, .item-card .select').click(prevent);
function prevent() {
    $(".item-card").on("click", ".button, .select", function(event) {
        event.preventDefault();
    });
}