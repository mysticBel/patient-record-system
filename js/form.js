var buttonAdd = document.querySelector('#adicionar-paciente');

buttonAdd.addEventListener('click',function(e){
    e.preventDefault();
    var form = document.querySelector('#form-adicionar');
    var paciente = capturarDatosPaciente(form);

    
    //capturando datos del formulario
    function capturarDatosPaciente(form){
        var paciente = {
            nombre: form.nombre.value,
            peso : form.peso.value,
            altura : form.altura.value,
            gordura : form.gordura.value,
            imc : calcularIMC(form.peso.value, form.altura.value)
        }
      return paciente
    }
    
      

      var tabla = document.querySelector("#tabla-pacientes");
    
      // crear los Tds y Tr
      var  pacienteTr = document.createElement('tr');
      var  nombreTd = document.createElement('td');
      var  pesoTd = document.createElement('td');
      var  alturaTd = document.createElement('td');
      var  gorduraTd = document.createElement('td');
      var  imcTd = document.createElement('td');
      

      // asignar los valores de los Tds a la propiedad textContent
        nombreTd.textContent = paciente.nombre;
        pesoTd.textContent = paciente.peso;
        alturaTd.textContent = paciente.altura;
        gorduraTd.textContent = paciente.gordura;
        imcTd.textContent = paciente.imc;
        // imcTd.textContent = calcularIMC(peso, altura);
       
      // Asignando los Tds al Tr y el Tr a la tabla
        pacienteTr.appendChild(nombreTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);
        
        
       
        tabla.appendChild(pacienteTr);


    form.reset();
});


      
  



    


