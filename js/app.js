function init ()
{
    
    
}
var map;
function initMap() 
{
    var mapConfig={
        center:{
            lat: -16.24573891999999998, lng: -71.53151308
        },
        zoom:10
    };
    
    map = new google.maps.Map(document.getElementById('map'));
   var miLati1={ lat: -16.24573891999999998, lng: -71.53151308};
   var miLati={ lat: 16.24891999999998, lng: -71.5311308};
   var miLati={ lat: 16.245799999998, lng: -71.531308}
  
   var marker = new google.maps.Marker({
    position: miLati1,
    map: map,
    title: 'Helloaki stoy!',
    icon:'img/paloma2.jpg'
  }); 
}

