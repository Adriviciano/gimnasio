//Crear la grafica

const labels = [
   'Enero',
   'Febrero',
   'Marzo',
   'Abril',
   'Mayo',
   'Junio',
   'Julio',
   'Agosto',
   'Septiembre',
   'Octubre',
   'Noviembre',
   'Diciembre'
];

const data = {
   labels: labels,
   datasets: [{
      label: '',
      backgroundColor: 'red',
      borderColor: 'black',
      data: [0, 10, 15, 10, 0, 5, 10, 15, 20, 25, 10, 30],
   }]
};

const config = {
   type: 'line',
   data: data,
   options: {}
}

const myChart = new Chart(
   document.getElementById('myChart'),
   config
 );




 //Filtrar

   var filtroDias = false;
   var filtroMeses = false;
   var filtroHoras = false;

   var dias = document.getElementById('dias');
   var meses = document.getElementById('meses');
   var horas = document.getElementById('horas');

dias.onclick = function(){
   if (filtroDias === false){   
      filtroDias = true;
      dias.style.backgroundColor="cyan";
      console.log('Filtro de dias activado'); 
   } else {
      filtroDias = false;
      dias.style.backgroundColor="blueviolet";
      console.log('Filtro de dias desactivado'); 
   }
}

meses.onclick = function(){
   if (filtroMeses === false){   
      filtroMeses = true;
      meses.style.backgroundColor="cyan";
      console.log('Filtro de meses activado'); 
   } else {
      filtroMeses = false;
      meses.style.backgroundColor="blueviolet";
      console.log('Filtro de meses desactivado'); 
   }
}

horas.onclick = function(){
   if (filtroHoras === false){   
      filtroHoras = true;
      horas.style.backgroundColor="cyan";
      console.log('Filtro de horas activado'); 
   } else {
      filtroHoras = false;
      horas.style.backgroundColor="blueviolet";
      console.log('Filtro de horas desactivado'); 
   }
}