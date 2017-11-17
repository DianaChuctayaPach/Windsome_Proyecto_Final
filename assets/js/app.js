
function initMap() {
        var laboratoriaLima = { lat: -12.1191427, lng: -77.0349046 };
    
            var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 15,
                  center: laboratoriaLima
                });
    var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
} 


var a = $(".navbar").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('.navbar').addClass('navbar-scroll');
     
    } else {
        $('.navbar').removeClass('navbar-scroll');
       
    }
});