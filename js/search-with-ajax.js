var btnSearch = document.querySelector('#buscar-paciente');
btnSearch.addEventListener('click', function(){
    console.log('buscando pacientes...');
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://alura-es-cursos.github.io/api-pacientes/pacientes.json');
    xhr.addEventListener('load', function(){
        console.log(xhr.responseText);
        respuesta = xhr.responseText;
        console.log(respuesta);
        console.log(typeof respuesta);

        // convertir de string a objeto
        var pacientes = JSON.parse(respuesta);
        console.log(pacientes);
        console.log(typeof pacientes);

        // añadiendo pacientes  a la tabla 
        pacientes.forEach(function(paciente){
            adicionarPacienteEnLaTabla(paciente);
            console.log(paciente);
        });

    })
    xhr.send();
});