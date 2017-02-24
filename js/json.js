$(document).ready(init);

var lista = [
  {"nombre":"Albania", "phone_code": "355", "imagen":'img-paises/AL.png', "letra":'A<br>B'},   
  {"nombre":"Alemania","phone_code": "49" , "imagen": 'img-paises/DE.png',"letra":'C<br>D'},  
  { "nombre":"Algeria","phone_code": "213","imagen": 'img-paises/AF.png',"letra":'E<br>F'},
    
  { "nombre":"Bahamas",  "phone_code": "1 242","imagen": 'img-paises/BA.png',"letra":'G<br>H' },  
  {"nombre": "Bahrein", "phone_code":" 973 ","imagen": 'img-paises/BH.png',"letra":'I<br>J'},  
  { "nombre": "Bangladesh",  "phone_code": "880 ","imagen": 'img-paises/BD.png',"letra":'K<br>M'},  
  {"nombre": "Barbados","phone_code": "1 246","imagen": 'img-paises/BB.png',"letra":'N<br>N'},
  { "nombre": "Belice", "phone_code": "501","imagen": 'img-paises/BZ.png',"letra":'O<br>P'},
  { "nombre": "Benín", "phone_code": "229" ,"imagen": 'img-paises/BJ.png',"letra":'Q<br>R'},
  
  {"nombre": "Cabo Verde",  "phone_code": "238 ","imagen": 'img-paises/CV.png',"letra":'S<br>T' },
  {"nombre": "Camboya", "phone_code": "855","imagen": 'img-paises/CN.png',"letra":'U<br>V'},
  {"nombre": "sCamerún","phone_code": "237","imagen": 'img-paises/CM.png',"letra":'W<br>X'},
  {"nombre": "Canadá","phone_code": "1","imagen": 'img-paises/CA.png',"letra":'Y<br>Z'},
  {"nombre": "Perù","phone_code": "+51","imagen": 'img-paises/PE.png',"letra":'A<br>E'}
    
];


function init(){
    var carga='';
    for (var i in lista)
    {
        var html='<li id="'+i+'"><img src="'+lista[i].imagen+'"alt="" class="imagen">'+lista[i].nombre+'</img><span class="codigo">'+lista[i].phone_code+'</span>'+
        '<span class="span">'+lista[i].letra+'</span><li>';
        carga+=html;
    }
    $("#lista-paises").html(carga);
    
    var list=$('li');
    list.each(function(){
        $(this).click(onClick);
    });
}

function onClick(evt){
    
    localStorage.setItem('srcImagen', evt.currentTarget.id);
    location.href = "singUp.html";
    //console.log(code);
    //evt.preventDefault();
}





