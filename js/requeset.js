function init(){
    solicitar();
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
$('button').click(function(){
    $(this).css('color' , 'withe')
    location.href ="paymet.html";
})
