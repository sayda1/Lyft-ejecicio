
var map;
function initMap() {
    
    var ubicacion1={ lat: -16.457389199999998, lng: -71.5315308};
    var ubicacion2={ lat: -16.45738919999998, lng: -71.537808};
    var ubicacion3={ lat: -16.45738919999598, lng: -71.525728};

    map = new google.maps.Map(document.getElementById('map'),{center:ubicacion1,zoom: 14 });
    
    //marcador de ubicacion uno 
    var marcador1 =new google.maps.Marker({ 
        position:ubicacion1, 
        map: map, 
        title:'Hola peru.!!',     
        icon:'img/peru.png'}
    ); 
    
  //console.log(marcador1);
    
    //marcador de ubicaion dos
    var marcador2 =new google.maps.Marker({ 
        position:ubicacion2,
        map: map,
        title: ' estoy aqui.!',
        icon:'img/carito.jpg'
    });
    //console.log(marcador2);
    
    //marcador de ubicaion tres
    var marcador3 =new google.maps.Marker({ 
        position:ubicacion3, 
        map: map,title: 'hola..si!!!', 
        icon:'img/persona.jpg'
    });
    //console.log(marcador3);*/
}


