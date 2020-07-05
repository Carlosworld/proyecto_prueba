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
});
// Insertar  los campos a la base de datos

$(document).ready(function() {   
 $("#formID").submit(function(e){
        const dataForm ={
          rfc:$("#username_1"). val(),
          razon:$("#name_1"). val(),
          email:$("#email_1"). val(),
          //formaPago:$("#select"). val(),
          //numCuenta:$("#numeroCuenta"). val(),
          //CFDI:$("#cfdi"). val(),
          //formaPago:$("#metodoPago"). val(),
          
          // Datos opcionales
          estado:$("#cbx_estados"). val(),
          municipio:$("#cbx_municipio"). val(),
          direccion:$("#dir_1"). val(),
          colonia:$("#col_1"). val(),
          codigoPostal:$("#cp_1"). val(),
        }; 

   console.log(dataForm.rfc);
   $.post('insertar.php', dataForm, function(response){
           console.log(response)
     });
    e.preventDefault();
  });
});


// Busqueda de rfc por 

$(document).ready(function(){

  $(document).on('keydown', '.username', function() {
      
      var id = this.id;
      console.log(id);
      var splitid = id.split('_');
      var index = splitid[1];

      $( '#'+id ).autocomplete({
          source: function( request, response ) {
              $.ajax({
                  url: "rfc.php",
                  type: 'post',
                  dataType: "json",
                  data: {
                      search: request.term,request:1
                  },
                  success: function( data ) {
                      response( data );
                  }
              });
          },
          select: function (event, ui) {
              $(this).val(ui.item.label); // display the selected text
              var userid = ui.item.value; // selected id to input

              // AJAX
              $.ajax({
                  url: 'rfc.php',
                  type: 'post',
                  data: {userid:userid,request:2},
                  dataType: 'json',
                  success:function(response){
                      
                      var len = response.length;

                      if(len > 0){
                          var id = response[0]['id'];
                          var name = response[0]['name'];
                          var email = response[0]['email'];
                          var dir = response[0]['dir'];
                          var col = response[0]['col'];
                          var cp = response[0]['cp'];

                          document.getElementById('name_'+index).value = name;
                          document.getElementById('email_'+index).value = email;
                          document.getElementById('dir_'+index).value = dir;
                          document.getElementById('col_'+index).value = col;
                          document.getElementById('cp_'+index).value = cp;

                          
                      }
                      
                  }
              });

              return false;
          }
      });
  });
});
