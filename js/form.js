var buttonAdd = document.querySelector('#adicionar-paciente');

buttonAdd.addEventListener('click',function(e){
    e.preventDefault();
    var form = document.querySelector('#form-adicionar');
    var paciente = capturarDatosPaciente(form);
    
    // mensaje error
    var errores = validarPaciente(paciente);
    
    //validar paciente
    if (errores.length > 0){     //si hay un string de caracteres dentro
     exhibirMensajesErrores(errores);
      return;  //es como un break y ya no se imprimen los valores en la tabla
    }

    adicionarPacienteEnLaTabla(paciente);
    form.reset();

    var mensajesErrores = document.querySelector('#mensajes-errores');
    mensajesErrores.innerHTML = '';

  });

// funcion para encapsular funcion crear paciente en la tabla
    function adicionarPacienteEnLaTabla(paciente){
        var pacienteTr = construirTr(paciente);
        var tabla = document.querySelector('#tabla-pacientes');
        tabla.appendChild(pacienteTr);
    };

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
      
   
 function validarPaciente(paciente){
   var errores = [];
   if(!validarPeso(paciente.peso)){
     errores.push("El peso es incorrecto!");
   }

   if(!validarAltura(paciente.altura)){
    errores.push("La altura es incorrecta!");
  }

  // validar vacios
  if(paciente.nombre.length == 0){
    errores.push("El nombre no puede estar vacío :c");
  }
  if(paciente.peso.length == 0){
    errores.push("El peso no puede estar vacío :c");
  }
  if(paciente.altura.length == 0){
    errores.push("La altura no puede estar vacía :c");
  }
  if(paciente.gordura.length == 0){
    errores.push("El % de gordura no puede estar vacío :c");
  }
  return errores;
 }


 function exhibirMensajesErrores(errores){
   var ul = document.querySelector('#mensajes-errores');
   ul.innerHTML= '';

   errores.forEach(function(error){
     var li = document.createElement('li');
     li.textContent = error;
     ul.appendChild(li);

   });
 }

  
       
      
        
        
       
 



    


