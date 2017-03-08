function init(){
    solicitar();
    solicitarPrecio();
}
function solicitar(){
    $.ajax({
        url:"http://clientes.geekadvice.pe/api/carrera",
        data:{tipo:1}
        
    }).done(function(_data){
        console.log(_data);
        update(_data);
        
    });
}
function update(_info){
   // console.log(_info.destino);
    //alert(_info.estimado.min);
   $('#imagen').attr({'src':_info.conductor.url});
    console.log($('#imagen'));
    
};

//EL PRECIO DE LA CARRERA
function solicitarPrecio(){
   $.ajax({
        url:"http://clientes.geekadvice.pe/api/estimado",
        data:{tipo:1}
       
    }).done(function(_costo){
        console.log(_costo);
        costoCarrrera(_costo);
       
    }); 
}
function costoCarrrera(_info){
    $('#presio').text('$'+_info.estimado.min);
}