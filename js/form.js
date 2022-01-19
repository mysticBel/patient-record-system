var buttonAdd = document.querySelector('#adicionar-paciente');

buttonAdd.addEventListener('click',function(e){
    e.preventDefault();

    var form = document.querySelector('#adicionar-paciente');
    var pacienteData = capturarDatosPaciente(form);

    adicionarPaciente(pacienteData);
    form.reset();
});


// función para capturar datos del formulario


function capturarDatosPaciente(form){
   var paciente = {
       nombre: form.nombre.value,
       peso: form.peso.value,
       altura: form.altura.value,
       gordura: form.gordura.value,
       imc: calcularIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

