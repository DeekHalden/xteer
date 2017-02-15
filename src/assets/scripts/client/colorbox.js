$(function() {
    $(".youtube").colorbox({iframe:true, innerWidth:1000, innerHeight:780});
    if($(window).width()<1199) {
        $(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:480});
    }
    if($(window).width()<791) {
       $(".youtube").colorbox({iframe:true, innerWidth:280, innerHeight:240});
    }
})
