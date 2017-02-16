function init ()
{
    
    
}

function initMap() 
{
    var myLatLng = {lat: -25.363, lng: 131.044};
    var  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center:myLatLng
  });
    
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!',
    icon:img/paloma.jpg
  }); 
}

