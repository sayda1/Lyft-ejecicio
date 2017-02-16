function init ()
{
    
    
}
var map;
function initMap() 
{
    var myLatLng = [
        {lat: -25.363, lng: 131.044 , },
        {lat: 825.363, lng: -131.044},
    ]
    for (var i in map){
    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center:myLatLng
   });
    }
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!',
    icon:'img/paloma2.jpg'
  }); 
}

/*
function init ()
{
    
    
}
var map;
function initMap() 
{
    var myLatLng = {lat: -25.363, lng: 131.044};
    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center:myLatLng
  });
    
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!',
    icon:'img/paloma2.jpg'
  }); 
}

*/