function  initMap(){
    var map = new google.maps.Map(document.getElementById('map'),{
        center: {lat: 50.447914, lng:30.522192},
        scrollwheel:false,
        zoom:15,
        disableDefaultUI: true
    });
};