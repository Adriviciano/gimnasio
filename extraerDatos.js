window.addEventListener('load', function (event) {
   fetch('https://uji-data-ocupacion-se.s3.eu-west-1.amazonaws.com/status.json').then(function(response) { return response.json(); }).then(function(data) {
     console.log("Ocupacion: " + data.status.ocupation + "/" + data.status.capacityMax);
     console.log("Fecha: " + data.timestamp.substring(8, 10) + "/" + data.timestamp.substring(5, 7) + "/" + data.timestamp.substring(0, 4));
     console.log("Hora: " + data.timestamp.substring(11, 19));
   })
 });