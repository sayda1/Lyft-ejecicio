$(document).ready(init);

function init()
{
    var imgPais = $("#imgPais");
    var codigo=$("#codigo");
    var srcLocal=localStorage.getItem('srcImagen');
    
    var paisImg = lista[srcLocal].imagen;
    var paisCode = lista[srcLocal].phone_code;
 
    imgPais.attr('src', paisImg);
    codigo.text(paisCode);
}

function valiNumero(){
    var numero=$('#numero');
    if(numero.val().length>12){
       $('#mensaje').css('color' , 'red').html('Enter only nine digits');
    }else if (numero.val()==""){
        $('#mensaje').html('');
        $('#mensaje').css('color','red').html('Complete this field .');
    }else{
        $('#mensaje').css('color' ,'green').html('Valid.!');
    }
}