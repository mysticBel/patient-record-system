var pacientes = document.querySelectorAll('.paciente');
console.log(pacientes);

var tabla = document.querySelector('#tabla-pacientes');
tabla.addEventListener('click', function(e){
    console.log(e.target);
    e.target.parentNode.classList.add('fadeOut');
    setTimeout(function(){
        e.target.parentNode.remove();
    }, 500);
    
    
})



// Escucho un evento por cada paciente , hago un loop
// pacientes.forEach(function(paciente){
//     paciente.addEventListener('click', function(){
//         console.log('diste click remove')
//         this.remove();
//     });
// });






