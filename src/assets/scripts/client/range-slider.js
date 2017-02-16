;$(function() {
    // $('#price').on('change',function(event,ui) {
    //     var val = $(this).val();
    //     console.log($(this).val());
    //     $('#slider_price').slider("values", 0, val);
    // });

    // $('#price2').change(function() {
    //     var val2 = $(this).val();
    //     $('#slider_price').slider("values", 1, val2);
    // });



    $("#slider_price").slider({
        range: true,
        //orientation: "vertical",
        min: 7200,
        step: 1,
        max: 8700,
        values: [7200, 8700],
        slide: function(event, ui) {
            //$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            $('#price').val(ui.values[0]);
            $('#price2').val(ui.values[1]);
        },
        change: function(event, ui) {
            console.log($('#price').val());
            console.log($('#price2').val());
        }
    });
    //$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    //" - $" + $( "#slider-range" ).slider( "values", 1 ) );
    $('#price').val($('#slider_price').slider("values", 0));
    $('#price2').val($('#slider_price').slider("values", 1));
});