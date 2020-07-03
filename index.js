// AJAX JQUERY PARA ESTADOS Y MUNICIPIOS

$(document).ready(function(){
    $.ajax({
      type: 'POST',
      url: 'estados.php'
    })
    .done(function(estado){
      $('#cbx_estados').html(estado)
    })
    .fail(function(){
      alert('Hubo un errror al cargar las listas de estados')
    })
  
    $('#cbx_estados').on('change', function(){
      var id = $('#cbx_estados').val()
      $.ajax({
        type: 'POST',
        url: 'municipios.php',
        data: {'id': id}
      })
      .done(function(municipio){
        $('#cbx_municipio').html(municipio)
       
      })
      .fail(function(){
        alert('Hubo un errror al cargar los vídeos')
      })
    })
  
    // $('#enviar').on('click', function(){
    //   var resultado = 'Lista de reproducción: ' + $('#lista_reproduccion option:selected').text() +
    //   ' Video elegido: ' + $('#videos option:selected').text()
  
    //   $('#resultado1').html(resultado)
    // })
  
  })

//BLOQUEO Y DESBLOQUEO DE ESTADO DE CUENTA

$(document).ready(function() {
    $('#numeroCuenta').on('keyup', function() {
        if ($('#numeroCuenta').val() == "") {
            $('#select').prop('disabled', false);
        } else {
            $('#select').prop('disabled', true );
        }
    });
    $('#select').on('change', function() {
        if (parseInt($('#select').val()) === 0) {
            $('#numeroCuenta').prop('disabled', false);
        } else {
            $('#numeroCuenta').prop('disabled', true);
        }
    });
})

// buscar rfcs


// Insertar  los campos a la base de datos

$(document).ready(function() {   
  $("#formID").submit(function(e){
        const dataForm ={
          rfc:$("#rfc"). val(),
          razon:$("#razonSocial"). val(),
          email:$("#email"). val(),
          //formaPago:$("#select"). val(),
          //numCuenta:$("#numeroCuenta"). val(),
          //CFDI:$("#cfdi"). val(),
          //formaPago:$("#metodoPago"). val(),
          
          // Datos opcionales
          estado:$("#cbx_estados"). val(),
          municipio:$("#cbx_municipio"). val(),
          direccion:$("#dir"). val(),
          colonia:$("#col"). val(),
          codigoPostal:$("#cp"). val(),
        }; 

   console.log(dataForm.rfc);
   $.post('insertar.php', dataForm, function(response){
           console.log(response)
     });
    e.preventDefault();
  });
});