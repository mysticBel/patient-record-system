var btnSearch = document.querySelector('#buscar-paciente');
btnSearch.addEventListener('click', function(){
    console.log('buscando pacientes...');
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://alura-es-cursos.github.io/api-pacientes/pacientes.json')
});