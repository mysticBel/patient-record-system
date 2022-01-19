var buttonAdd = document.querySelector('#adicionar-paciente');

buttonAdd.addEventListener('click',function(e){
    e.preventDefault();
    var form = document.querySelector('#form-adicionar');
    var paciente = capturarDatosPaciente(form);
    var pacienteTr= construirTr(paciente); 
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
    form.reset();

  });

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
    
 // crear los Tds y Tr

   function construirTr(paciente){
     var  pacienteTr = document.createElement('tr');
     pacienteTr.classList.add('paciente');

     
        pacienteTr.appendChild(nombreTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);
   }
      
   function construirTd(dato, clase) {
     var td = document.createElement('td');
     td.classList.add(clase);
     td.textContent = dato
     return td;
   }
      var  nombreTd = construirTd(paciente.nombre, 'info-nombre');
      var  pesoTd = construirTd(paciente.peso, 'info-peso');
      var  alturaTd = construirTd(paciente.altura, 'info-altura');
      var  gorduraTd = construirTd(paciente.gordura, 'info-gordura');
      var  imcTd = construirTd(paciente.imc, 'info-imc');
      

  
       
      
        
        
       
 



    


