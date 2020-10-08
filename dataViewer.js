// Paginas de Ayuda
// https://es.stackoverflow.com/questions/255152/llamar-una-funcion-js-de-otro-archivo-js
// https://www.w3schools.com/js/js_htmldom_document.asp
// https://openweathermap.org/weather-conditions
// https://openweathermap.org/current
// https://www.w3schools.com/js/js_json_objects.asp

function MostrarDatos(dato)
{
    var datos = JSON.parse(dato);

    var name = document.getElementById('name');
    var desc = document.getElementById('desc');
    var temp = document.getElementById('temp');
    var temp_min = document.getElementById('temp_min');
    var temp_max = document.getElementById('temp_max');
    var icon = document.getElementById('icon');

    var nameValue = datos.name;
    var descValue = datos.weather[0].description;// el 0 es la posición del arreglo en el JSON
    var tempValue = datos.main.temp;
    var tempMinValue = datos.main.temp_min;
    var tempMaxValue = datos.main.temp_max;
    var iconValue = " http://openweathermap.org/img/wn/"+ datos.weather[0].icon +"@2x.png";

    name.innerHTML = nameValue;
    desc.innerHTML = descValue;
    temp.innerHTML = tempValue + '°C';
    temp_min.innerHTML = 'MIN <br>'+ tempMinValue +'°C';
    temp_max.innerHTML = 'MAX <br>'+ tempMaxValue +'°C';
    icon.innerHTML = "<img  src='"+ iconValue +"' />";
     document.getElementById('inputValue').value = "";
}
