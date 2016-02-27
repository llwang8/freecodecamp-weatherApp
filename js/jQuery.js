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
            //json.forEach(function(val){
                //var keys = Object.keys(val);

                html += "<div class='icon text-center weather'><img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png'>"
                html += json.main.temp; + "</div>"
                html += "<div class='weather'>" + json.weather[0].description + "<br><br></div>"
                html += "<div class='datetime'><p>Get at:  " + displayDate + "</p></div>"
            //});

        $(".message").html(html);

        });
    });

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