function formatAMPM(date) { // This is to display 12 hour format like you asked
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

var myDate = new Date();
var displayDate = myDate.getFullYear() + '.' + myDate.getMonth()+ '.' + myDate.getDate() + ' ' + formatAMPM(myDate);
//console.log(displayDate);

$(document).ready(function(){
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=08540,us&units=imperial&appid=c3a2b88d0195ab9136f72c2270320a91",
        function(json){
        var html = "";
        var tempC = parseFloat(json.main.temp).toFixed(2);
        var tempF = (parseFloat(json.main.temp) * 9/5 + 32).toFixed(2);

        var htmlTemp = "<div id='f' class='icon weather' style='display:block;'><img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png'>";
        htmlTemp += tempF + " &#8457;&nbsp;&nbsp;&nbsp;<button id='changeTempF' onClick='toggleTemp()' class='bt bt-primary bt-temp' >To &#8451;</button><br></div>";

        htmlTemp += "<div id='c' class='icon weather' style='display:none;'><img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png'>";
        htmlTemp += tempC + " &#8451;&nbsp;&nbsp;&nbsp;<button id='changeTempC' onClick='toggleTemp()' class='bt bt-primary bt-temp' >To &#8457;</button><br></div>";

        htmlTemp += "<div class='datetime'>" + json.weather[0].main + "</div>";
        htmlTemp += "<div class='datetime'><p>Get at:  " + displayDate + "</p></div>";

         $(".message").html(htmlTemp);

        var html2 = "";
        html2 = "<table><tr><td>Wind<td><td>" + json.wind.speed + " m/s<td></tr>";
        html2 += "<tr><td>Cloudiness<td><td>" + json.weather[0].description + "<td></tr>";
        html2 += "<tr><td>Pressure<td><td>" + json.main.pressure + " npa<td></tr>";
        html2 += "<tr><td>Humidity<td><td>" + json.main.humidity + " %<td></tr>";
        html2 += "<tr><td>Geo coords<td><td>[" + json.coord.lon + ", " + json.coord.lat + "]<td></tr></table>";

        $(".table").html(html2);

    });
});

function toggleTemp() {
    var f = document.getElementById("f");
    var c = document.getElementByID("c");

    f.style.display = (f.style.display === "block" ? "none" : "block");
    c.style.display = (c.style.display === "block" ? "none" : "block");

}

/*


     document.getElementById("f").display = "none";
        document.getElementByID("c").display = "block";
    });
    $("#changeTempC").click(function(){
        document.getElementById("f").display = "block";
        document.getElementByID("c").display = "none";
    });


<script type="text/javascript">
$(document).ready(function(){
  $("#changeTempF").click(function() {
        $("#f").hide();
        $("#c").show();
    });
    $("#changeTempC").click(function(){
        $("#f").show();
        $("#c").hide();
    });
});
*/

//google map api with openWeather map layer
/*
   var geoJSON;
   var request;
   var gettingData = false;
+  var openWeatherMapKey = "ABC..."

   function initialize() {
     var mapOptions = {
 @@ -84,7 +85,7 @@
                         + eastLng + "," + southLat + "," //right bottom
                         + map.getZoom()
                         + "&cluster=yes&format=json"
-                        + "&APPID=" + YOUR_OPENWEATHERMAP_KEY;
+                        + "&APPID=" + openWeatherMapKey;
     request = new XMLHttpRequest();
     request.onload = proccessResults;
     request.open("get", requestString, true);

*/

//http://api.openweathermap.org/data/2.5/weather?zip=08540,us&appid=c3a2b88d0195ab9136f72c2270320a91