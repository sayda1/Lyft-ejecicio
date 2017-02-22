function validar(){
    
    var nombre=$('#nombre');
    if (nombre.val===""){
        alert("Ya cargue....!!!");
    }
}






















/*function validar(){
    var valiNombre = /^[a-zA-Z]*$/;
    var valiCorreo = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var mensaNombre=document.getElementById("mensaNombre");
    var mensaApellido=document.getElementById("mensaApellido");
    var mensaCorreo=document.getElementById("mensaCorreo");
    // validacion del nombre
    if(nombre===""){
        mensaNombre.innerHTML="You must fill this field."
    }else if (!valiNombre.test(nombre))
    {
        mensaNombre.innerHTML="";
        mensaNombre.innerHTML="Enter your name correctly."
    }else{
        if(nombre.toLowerCase())
        {   
           mensaNombre.innerHTML=""; document.getElementById("nombre").value=nombre.charAt(0).toUpperCase()+nombre.slice(1);
        }else{
          mensaNombre.innerHTML="";
        }  
    }
    //validacion del apellido
    if (apellido===""){
        mensaApellido.innerHTML="You must fill this field.";
    }else if (!valiNombre.test(apellido))
    {
        mensaApellido.innerHTML="";
       mensaApellido.innerHTML="Enter your lastname correctly.";
    }else{
        if(apellido.toLowerCase())
        {    
           mensaApellido.innerHTML=""; document.getElementById("apellido").value=apellido.charAt(0).toUpperCase()+apellido.slice(1);
        }else{
          mensaApellido.innerHTML="";
        }  
    }
   // validacion del correo
    if(correo.value===""){
        mensaCorreo.innerHTML="You must fill this field."
    }else if (!valiCorreo.test(correo)){
        mensaCorreo.innerHTML="";
        mensaCorreo.innerHTML="Check your email."
    }else{
       mensaCorreo.innerHTML="";
    }
*/