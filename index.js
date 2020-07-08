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


// Busqueda de los productode de la tabla productos

$(document).ready(function(){

  $(document).on('keydown', '.producto', function() {
      
      var id_producto = this.id;
      console.log(id_producto);
      var splitid = id_producto.split('_');
      var index = splitid[1];

      $( '#'+id_producto ).autocomplete({
        source: function( request, response ) {
            $.ajax({
                url: "producto.php",
                type: 'post',
                dataType: "json",
                data: {
                    buscar: request.term,request:1
                },
                success: function( data ) {
                    response( data );
                    console.log(data)
                }
            });
        },
        select: function ( event,ui) {
          $(this).val(ui.item.label); // display the selected text
          var userid = ui.item.value; // selected id to input

          // AJAX
          $.ajax({
              url: 'producto.php',
              type: 'post',
              data: {userid:userid,request:2},
              dataType: 'json',
              success:function(response){
                  
                  var len = response.length;

                  if(len > 0){
                      var id_producto = response[0]['id_producto'];
                      console.log(id_producto)
                      var nombre = response[0]['nombre'];
                      var costoUnitario = response[0]['costoUnitario'];
                  
                      document.getElementById('nombre_'+index).value = nombre;
                      document.getElementById('costoUnitario_'+index).value = costoUnitario;
                      
                  }
                  
              }
          });

          return false;
      }
  });
});

  $('#addmore').click(function(){

    // Get last id 
    var lastname_id = $('.tr_input input[type=text]:nth-child(1)').last().attr('id');
    var split_id = lastname_id.split('_');

    // New index
    var index = Number(split_id[1]) + 1;

    var html = "<tr class='tr_input' taskId='"+index+"' ><td><input type='text' class='producto form-control form-control-sm' id='producto_"+index+"'></td><td><input type='text' class='nombre  form-control form-control-sm' id='nombre_"+index+"'></td><td><input type='text' class='cantidad campoNumerico form-control form-control-sm' id='cantidad_"+index+"'></td><td><input type='text' class='descuento campoNumerico form-control form-control-sm' id='descuento_"+index+"'></td><td><input type='text' class='iva campoNumerico form-control form-control-sm' id='iva_"+index+"'></td><td><input type='text' class='total campoNumerico form-control form-control-sm' id='total_"+index+"'></td><td><input type='text' class='costoUnitario campoNumerico form-control form-control-sm' id='costoUnitario_"+index+"'></td><td><button  class='task-delete btn btn-danger btn-sm' type='button' id='"+index+"'><i class='fa fa-trash-o'></i></button></td></tr>";

    // Append data
    $('.tbody').append(html);
    
});
});


// Borrador de filas

$(document).ready(function(){
  $(document).on('click','.task-delete', function() {
    let element = $(this)[0].parentElement.parentElement;
    //let id = $(element).attr('taskId')
   
    // $.post('delete_product.php',{id},response)
       event.preventDefault();
    $(this).closest(element).remove();
   
})
})

// formulas

// function calcular_total() {

//   var importe_total = 0
//   $('.amt').keyup(function (){
//       $(".amt").each(
//           function(index, value) {
//               importe_total = importe_total + eval($(this).val());
//               console.log(importe_total);
//           }
//       );  
//   });
//   $("#inputTotal").val(importe_total);
// } 
$(document).ready(function(){
  $(document).on('keyup','.multi', function() {

//$('.multi').keyup(function() {
  var id = this.id;
  console.log(id)

  var precio = [];
  var cantidad = [];
 

  $('.precio').each(function(i, obj) {
    precio.push(+obj.value);
  });
  $('.cantidad').each(function(i, obj) {
    cantidad.push(+obj.value);
  });

  var resultado = 0;

  precio.map((o, i) => {
    resultado += o * cantidad[i];
  });

  $("#result").val(resultado);

})
})