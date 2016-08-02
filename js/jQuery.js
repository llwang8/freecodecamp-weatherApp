

var myDate = new Date();
var displayDate = myDate.getFullYear() + '.' + eval(myDate.getMonth() + 1)+ '.' + myDate.getDate() + ' ' + formatAMPM(myDate);
//console.log(displayDate);

$(document).ready(function(){
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=08540,us&units=imperial&appid=c3a2b88d0195ab9136f72c2270320a91",
        function(json){
        var html = "";
        var tempF = parseFloat(json.main.temp).toFixed(1);
        var tempC = (parseFloat(json.main.temp - 32) * 5/9).toFixed(1);

        var htmlTemp = "<div id='f' class='weather' style='display:block;'><img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png'>";
        htmlTemp += tempF + " &#8457;&nbsp;&nbsp;&nbsp;<button id='changeTempF' onClick='toggleTemp()' class='bt bt-primary bt-temp' >To &#8451;</button><br></div>";

        htmlTemp += "<div id='c' class='weather' style='display:none;'><img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png'>";
        htmlTemp += tempC + " &#8451;&nbsp;&nbsp;&nbsp;<button id='changeTempC' onClick='toggleTemp()' class='bt bt-primary bt-temp' >To &#8457;</button><br></div>";

        htmlTemp += "<div class='datetime'>" + json.weather[0].main + "</div>";
        htmlTemp += "<div class='datetime'><p>Get at:  " + displayDate + "</p></div>";

         $(".message").html(htmlTemp);

        var html2 = "";
        html2 = "<table><tr><td>Wind<td><td>" + json.wind.speed + " m/s<td></tr>";
        html2 += "<tr><td>Cloudiness<td><td>" + json.weather[0].description + "<td></tr>";
        html2 += "<tr><td>Pressure<td><td>" + json.main.pressure + " hpa<td></tr>";
        html2 += "<tr><td>Humidity<td><td>" + json.main.humidity + " %<td></tr>";
        html2 += "<tr><td>Geo coords<td><td>[" + json.coord.lon + ", " + json.coord.lat + "]<td></tr></table>";

        $(".table").html(html2);

    });
});

function formatAMPM(date) { // This is to display 12 hour format
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function toggleTemp() {

    $("#changeTempF").click(function() {
          $("#f").hide();
          $("#c").show();
    });
    $("#changeTempC").click(function() {
          $("#f").show();
          $("#c").hide();
    });
}



