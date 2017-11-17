
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

let number = document.getElementById('number');

let start = 20;
let end = 968;
let ticks = 20;
let speed = 50;

let randomNumbers = [end]

for (let i = 0; i < ticks - 1; i++) {
    randomNumbers.unshift(
        Math.floor(Math.random() * (end - start + 1) + start)
    );
}

randomNumbers.sort((a, b) => { return a - b });

console.log(randomNumbers.length)

let x = 0;
let interval = setInterval(function () {

    number.innerHTML = randomNumbers.shift();

    if (++x === ticks) {
        window.clearInterval(interval);
    }

}, speed);