var pacientes = document.querySelectorAll('.paciente');
console.log(pacientes);

pacientes.forEach(function(paciente){
    paciente.addEventListener('click', function(){
        console.log('diste click remove')
        this.remove();
    });
});


// Escucho un evento por cada paciente , hago un loop




