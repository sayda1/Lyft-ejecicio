function init(){
    solicitar();
    tipoDeAuto();
}
function solicitar(){
    $.ajax({
        url:"http://clientes.geekadvice.pe/api/estimado",
        data:{tipo:1}
    }).done(function(_data){
        //alert('ya funciona..!!');
        console.log(_data);
        update(_data);
    });
}
function update(_info){
    //alert(_info.destino);
    console.log(_info.destino);
    //alert(_info.estimado.min);
    $('#presio').text(_info.estimado.moneda+_info.estimado.min+'-'+_info.estimado.max);
    $('#lugar').text(_info.origen);
    $('#destino').text(_info.destino);
};

function tipoDeAuto(){
    var imgCarro=$('#img-carro');
    var tipoCarro=$('#tipo');
    var textoCard=$('#texto');
    
    var local=localStorage.getItem('srcImagen');
    var img =lista[local].imagen;
    var cardTipo =lista[local].tipo;
    var cardTexto=lista[local].texto;
    
    imgCarro.attr('src', img);
    tipoCarro.text(cardTipo);
    textoCard.text(cardTexto);
}
$('button').click(function(){
    location.href ="paymet.html";
});
