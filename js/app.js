var map;
function initMap() {
    
    var ubicacion1={ lat: -16.457389199999998, lng: -71.5315308};
    var ubicacion2={ lat: -16.45738919999998, lng: -71.537808};
    var ubicacion3={ lat: -16.45738919999598, lng: -71.525728};
    var ubicacion4={ lat: -16.451119959008, lng: -71.52728};
    
    map = new google.maps.Map(document.getElementById('map'),{center:ubicacion1,zoom: 14 });
    
    //marcador de ubicacion uno 
    var marcador1 =new google.maps.Marker({ 
        position:ubicacion1, 
        map: map, 
        title:'Hola peru.!!',     
        icon:'img/icono3.png'}
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
        icon:'img/icono2.jpg'
    });
    //console.log(marcador3);
    var marcador4 =new google.maps.Marker({ 
        position:ubicacion4, 
        map: map,title: 'hola..yuju!!!', 
        icon:'img/carito.jpg'
    });
}
$(document).ready(init);
var lista =[
    {"imagen":'img/carito.jpg' , "tipo":'Line' , "minutos":' 3 <br> min' ,"texto":'Shared, 2 riders max'},
    {"imagen":'img/icono.png' , "tipo":'Lyft' , "minutos":' 3 <br> min',"texto":'4 seats'},
    {"imagen":'img/carrito3.png' , "tipo":'Plus' , "minutos":' 4 <br> min',"texto":'6 seats'},
    {"imagen":'img/carrito4.jpg' , "tipo":'Premiun' , "minutos":'3 <br> min',"texto":'High-end, 4 seats'}
]
function init(){
    var carga='';
    for (var i in lista){
        var html='<ul class="list-inline lista" id="'+i+'">'+
            '<li><img src="'+lista[i].imagen+'"alt=""></img></li>'+
            '<li class="tipo"><h3 class="titulo">'+lista[i].tipo+'</h3><p class="texto">'+lista[i].texto+'</p></li>'+
            '<li class="minuto"><p>'+lista[i].minutos+'</p></li>'+
        '</ul>';
        carga+=html;
    }
    $('#lista_card').html(carga);
    var listaUl=$('ul');
    listaUl.each(function (){
       $(this).click(onPedido); 
    })
}
function onPedido(evt){
    localStorage.setItem('srcImagen',evt.currentTarget.id);
}
$('#buton-app').click(function(){
    location.href="requeset.html"
});