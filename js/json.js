
var lista = [
  {"nombre":"Albania", "phone_code": 355},   
  {"nombre":"Alemania","phone_code": 49},  
  { "nombre":"Algeria","phone_code": 213},
  { "nombre":"Bahamas",  "phone_code": "1 242" },  
  {"nombre": "Bahrein", "phone_code": 973 },  
  { "nombre": "Bangladesh",  "phone_code": 880 },  
  {"nombre": "Barbados","phone_code": "1 246"},
  { "nombre": "Belice", "phone_code": 501},
  { "nombre": "Benín", "phone_code": 229 },
  
  {"nombre": "Cabo Verde",  "phone_code": 238 },
  {"nombre": "Camboya", "phone_code": 855},
  {"nombre": "sCamerún","phone_code": 237},
  {"nombre": "Canadá","phone_code": 1}
];
/* var htmlLista = document.getElementById("lista-paises");

for (var i = 0; i < lista.length; i++) {
    var object = lista[i];
    for (var x in object) {
        var html =object[x];
    }
    htmlLista.innerHTML=html;
}*/


    var htmlLista = document.getElementById("lista-paises");
    for (var i in lista)
    {
        var html ='<li>'+lista[i].nombre+'<li>';
        htmlLista.innerHTML+=html;
    }


