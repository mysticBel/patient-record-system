
var campoFiltro = document.querySelector('#filtrar-tabla');
campoFiltro.addEventListener('input', function(){
    // this.value se refiere al dueño del evento input
    var pacientes = document.querySelectorAll('.paciente');
    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            // realizando comparación 
            var tdNombre = paciente.querySelector('.info-nombre');
            var nombre = tdNombre.textContent;

            //adicionando regex
            var  expresion = new RegExp(this.value, 'i');
            if(!expresion.test(nombre)){
                paciente.classList.add('invisible');
            } else {
                paciente.classList.remove('invisible');
              }

           }
        } else {
            for (var i = 0; i < pacientes.length; i++) {
                var paciente = pacientes[i];
                paciente.classList.remove('invisible');
            }
        }
});
