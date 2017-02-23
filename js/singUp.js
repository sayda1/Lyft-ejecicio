function init()
{
    var imgPais = document.getElementById("imgPais");
    var codigo=document.getElementById("codigo");
    
    var srcLocal=localStorage.getItem('srcImagen');
    var codePhone=localStorage.getItem("codePais");
 
    imgPais.src=srcLocal;
    codigo.textContent=codePhone;
}

function valiNumero(){
    var numero=$('#numero');
    if(numero.val().length>12){
       $('#mensaje').css('color' , 'red').html('Enter only nine digits');
    }else if (numero.val()==""){
        $('#mensaje').html('');
        $('#mensaje').css('color' , 'red').html('Complete this field .');
    }else{
        $('#mensaje').css('color' ,'green').html('Valid.!');
    }
}