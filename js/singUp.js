function init()
{
    var imgPais = document.getElementById("imgPais");
    var codigo=document.getElementById("codigo");
    
    var srcLocal=localStorage.getItem('srcImagen');
    var codePhone=localStorage.getItem("codePais");
    
    imgPais.src=srcLocal;
    codigo.textContent=codePhone;
}