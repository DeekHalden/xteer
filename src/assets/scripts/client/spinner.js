$('.checkout-item-card__order-quantity, .element__quantity, .form-control--number').on('change input', function() {
    console.log(this);
    var value = $(this).val();
    if (value > 999) {
        $(this).val(999);
    } else if ($(this).val().indexOf('e') != -1 ) {
        $(this).val('');
    } else if ( $(this).val() < 0) {
        $(this).val('0');
    }
});

$('.controls .up').on('click', function() {
    var element = $(this).parent().parent().find($('.checkout-item-card__order-quantity'));
    element.val(function(i, oldval) {
        return parseInt(oldval, 10) + 1;
    });
});
$('.controls .down').on('click', function() {
    var element = $(this).parent().parent().find($('.checkout-item-card__order-quantity'));
    if(element.val() ==0){
        return
    }
    element.val(function(i, oldval) {
        
        return parseInt(oldval, 10) - 1;
    });
});