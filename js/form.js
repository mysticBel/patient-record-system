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

        function construirTd(dato, clase) {
        var td = document.createElement('td');
        td.classList.add(clase);
        td.textContent = dato
        return td;
        }

        pacienteTr.appendChild(construirTd(paciente.nombre, 'info-nombre'));
        pacienteTr.appendChild(construirTd(paciente.peso, 'info-peso'));
        pacienteTr.appendChild(construirTd(paciente.altura, 'info-altura'));
        pacienteTr.appendChild(construirTd(paciente.gordura, 'info-gordura'));
        pacienteTr.appendChild(construirTd(paciente.imc, 'info-imc'));

      return pacienteTr; 
   }
      
   
 

  
       
      
        
        
       
 



    


