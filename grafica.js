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
      data: [0, 5, 10, 15, 0, 10, 15, 10, 20, 25, 10, 30],
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
      dias.classList.remove('btn-outline-warning');
      dias.classList.add('btn-outline-success');
      console.log('Filtro de dias activado'); 
   } else {
      filtroDias = false;
      dias.classList.remove('btn-outline-success');
      dias.classList.add('btn-outline-warning');
      console.log('Filtro de dias desactivado'); 
   }
}

meses.onclick = function(){
   if (filtroMeses === false){   
      filtroMeses = true;
      meses.classList.remove('btn-outline-warning');
      meses.classList.add('btn-outline-success');
      console.log('Filtro de meses activado'); 
   } else {
      filtroMeses = false;
      meses.classList.remove('btn-outline-success');
      meses.classList.add('btn-outline-warning');
      console.log('Filtro de meses desactivado'); 
   }
}

horas.onclick = function(){
   if (filtroHoras === false){   
      filtroHoras = true;
      horas.classList.remove('btn-outline-warning');
      horas.classList.add('btn-outline-success');
      console.log('Filtro de horas activado'); 
   } else {
      filtroHoras = false;
      horas.classList.remove('btn-outline-success');
      horas.classList.add('btn-outline-warning');
      console.log('Filtro de horas desactivado'); 
   }
}
document.getElementsByClassName('texto')[0].onclick = function(){
   console.clear();
}