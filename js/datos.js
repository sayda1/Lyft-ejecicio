$(document).ready(init);
function init(){
    valiNombre();
    valiApellido();
    valiCorreo();
}

//VALIDAR EL NOMBRE
function valiNombre(){ 
    
    var exprecion = /^[a-zA-Z]*$/;
    var nombre=$('#nombre').val();
    if (nombre===""){
        $('#mensaNombre').css('color' , 'red').html('Enter your name.')
    }else if (!exprecion.test(nombre)){  
        $('#mensaNombre').css('color' , 'red').html('Write your name correctly.');
    }else{
        $('#mensaNombre').css('color' , 'green').html('Valid..!');  
        //$('#mensaNombre').empty();
    }
}

//VALIDAR EL APELLIDO
function valiApellido(){
    
    var exprecion = /^[a-zA-Z]*$/;
    var apellido =$('#apellido').val();
    if(apellido===""){
        $('#mensaApellido').css('color' , 'red').html('Enter your last name.');
    }else if (!exprecion.test(apellido)){
        $('#mensaApellido').css('color','red').html('Write your last name correctly.');
    }else{
        $('#mensaApellido').css('color','green').html('Valid..!');
        //$('#mensaApellido').empty();
    }
}
function valiCorreo()
{
    //VALIDAR EL CORREO
    var valiCorreo = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
    var correo=$('#correo').val();
    if(correo===""){
        $('#mensaCorreo').css('color','red').html('Check your email .');
    }else if (!valiCorreo.test(correo)){
        $('#mensaCorreo').empty();
        $('#mensaCorreo').css('color','green').html('lola_tkm@gmail.com');
    }else{
        $('#mensaCorreo').css('color','green').html('Valid.!');
    }   
}  