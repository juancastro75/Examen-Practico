// Paginas de Ayuda
// https://www.w3schools.com/js/js_ajax_http_send.asp
// https://www.w3schools.com/js/js_htmldom_eventlistener.asp
// https://www.lawebdelprogramador.com/codigo/JavaScript/2460-Obtener-el-valor-de-un-input-typetext-de-varias-maneras.html
// https://www.w3schools.com/js/js_json_parse.asp
// https://www.w3schools.com/js/js_htmldom_document.asp
// https://www.w3schools.com/js/js_output.asp

document.getElementById('buscar').addEventListener("click", function()
{
  var input = document.getElementById('inputValue').value;
  if(input != "")
  {
    var APIurl = "http://api.openweathermap.org/data/2.5/weather?q="+ input +",mx&lang=es&units=metric&APPID=df4213973db6154395fbeb327d254342";
    LlamarApi(APIurl);
  }
  else
  {
    alert(" Hay que ingresar una ciudad");
  }
})

function LlamarApi(APIurl)
{
  var request  = new XMLHttpRequest();
  request.open('GET', APIurl, true);
  request.send();
  request.onreadystatechange = function () 
  {
    if (this.readyState == 4 && this.status == 200)
    {
      var dato = this.responseText;
      MostrarDatos(dato);
    }
  }
}
