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

    var html = "<tr class='filas tr_input fila_t' taskId='"+index+"' ><td><input type='text' class='producto form-control form-control-sm' id='producto_"+index+"'></td><td><input type='text' class='nombre  form-control form-control-sm' id='nombre_"+index+"'></td><td><input type='text' class='monto  cantidad_"+index+" campoNumerico form-control form-control-sm' id='cantidad_"+index+"'></td><td><input type='number' class='monto1 descuento_"+index+" campoNumerico form-control form-control-sm' id='descuento_"+index+"' disabled></td><td><input type='text' class='monto2 iva_"+index+" campoNumerico form-control form-control-sm' id='iva_"+index+"' value='0.16'disabled></td><td><input type='text' class='monto4 total_"+index+" campoNumerico form-control form-control-sm' id='total_"+index+"' disabled></td><td><input type='text' class='monto costoUnitario_"+index+" campoNumerico form-control form-control-sm' id='costoUnitario_"+index+"'></td><td><button  class='task-delete btn btn-danger btn-sm' type='button' id='"+index+"'><i class='fa fa-trash-o'></i></button></td></tr>";

    // Append data
    $('.tbody').append(html);
    

   
    
});
});


// Borrador de filas

$(document).ready(function(e){
  $(document).on('click','.task-delete', function() {
    let element = $(this)[0].parentElement.parentElement;
    //let id = $(element).attr('taskId')

    // $.post('delete_product.php',{id},response)
       event.preventDefault();
    $(this).closest(element).remove();
   
})
})



// validaciones
$(document).ready(function () {
  $(".formID").submit(function () {
    var select = $("#select option:selected").val();
    console.log(select)
    if (select == null) {
        $('.error').text("Seleccione una Casa de Apuestas");
        return false;
    } else {
        $('.errors').hide();
        alert('OK');
        return true;
    }
    });

})

//solo numeros
function solonumeros(e)
                    {
         var key = window.event ? e.which : e.keyCode;
                        if(key < 48 || key > 57)
                            e.preventDefault();
                    }
                  
// Formulas del producto

// $(document).ready(function(){
//   $(document).on('change','.filas', function() {
   
    
//     let id = $(this).attr('taskId')
//     // console.log('-->',id);
   
//     let ivaElement = $(this).find('.iva_'+id)
//     let ivaVal = ivaElement.val()
    
//     let cantiElement = $(this).find('.cantidad_'+id)
//     let cantiVal = cantiElement.val()
    
//     let descElement = $('.descuentoGeneral')
//     let descVal = descElement.val()
 
//     console.log('valor del decuento',descVal);
    

//     let costoUniElement = $(this).find('.costoUnitario_'+id)
//     let costoUniVal = costoUniElement.val()
    
//     //cantidades
//     let totalCantidad = cantiVal * costoUniVal;
    
//     // descuento
    
//     // total
//     let total = totalCantidad;
    
//     // iva
//     let iva_result = ivaVal * total
//     let total1 =total + iva_result
//    totalDescuetoGeneral = total1 - descVal
//     //total mas iva
//     $('.total_'+id).val(totalDescuetoGeneral.toFixed(2))

// })
// })


// Importe
$(document).ready(function(){
  function actualizarTabla() {
    var cantidades = [];
    var precios = [];
    var descuentos = [];
    var ivas = [];


    var preciosTotal = [];
    // var descuentosTotal = [];
    //var ivaResult =[];

    var total = 0;
    // var totalDescuento = 0;
    //var iva = 0;

    $(".filas").each(function(index) {
        let id = $(this).attr('taskId')
        console.log(id);
        
        var cantidad = Number($(this).find('.cantidad_'+id).val());
        cantidades.push(cantidad);
        let cantiVal = cantidad;

        var precio = Number($(this).find('.costoUnitario_'+id).val());
        precios.push(precio);
         let costoUniVal = precio;

         var descuento = Number($(this).find('.descuento_'+id).val());
         descuentos.push(descuento);

         var ivaTotal = Number($(this).find('.iva_'+id).val());
         //ivas.push(ivaTotal);
         let ivaVal = ivaTotal;

        // calculo de el decuento
       
        
        // let decuentoVal = descuento;
        // let totalDes = decuentoVal 

        // var total_descuento = totalDes;
        // descuentosTotal.push(total_descuento);
        // $(this).find('.descuentoTotal').text(total_descuento+' $');
        // totalDescuento += total_descuento;

        var total_unitario = cantidad * precio;
        preciosTotal.push(total_unitario);
        $(this).find('.precioTotal').text(total_unitario+' $');
        total += total_unitario;

        // Calculo del subtotal

        Subtotal = total ;
        
        // Calculo del iva
        
        iva = ivaVal * total

        // Calculo del total

        total_todo = Subtotal + iva;
        

        // var total_iva = iva_valor;
        // ivaResult.push(total_iva);
        // $(this).find('.ivaTotal').text(total_iva+' $');
        // iva += total_iva;

    });
    
  
    console.log(total);
    $("p").text(''+total.toFixed(2)+' $');

    // console.log(totalDescuento.toFixed(2));
    // $("p1").text(''+totalDescuento.toFixed(2)+' $');

    console.log(Subtotal.toFixed(2));
    $("p2").text(''+Subtotal.toFixed(2)+' $');

    console.log(iva.toFixed(2));
    $("p3").text(''+iva.toFixed(2)+' $');

    console.log(total_todo.toFixed(2));
    $("p4").text(''+total_todo.toFixed(2)+' $');
}

actualizarTabla();

$(".table").on('change', function() {
    actualizarTabla();
});
})

// Descuento General
$(document).ready(function(){
  function actualizarTabla() {
 
    var descuentosTotal = [];

    var totalDescuento = 0;


    $(".filas").each(function(index) {
        let id = $(this).attr('taskId')
        console.log(id);
        let costoUniElement = $(this).find('.costoUnitario_'+id)
        let costoUniVal = costoUniElement.val()

        let cantiElement = $(this).find('.cantidad_'+id)
        let cantiVal = cantiElement.val()

        // var descuento = Number($(this).find('.descuento_'+id).val());
        // descuentos.push(descuento);

        let descElement = $('.descuentoGeneral').val()
        let descVal = descElement
        console.log(descVal);

        // var descuento = Number($(this).find('.descuento_'+id).val());
        //  descuentos.push(descuento);
        
        // calculo de el decuento
        let totalCantidad = cantiVal * costoUniVal;
        let decuentoVal = descVal/100;
        let totalDes = decuentoVal * totalCantidad
        console.log(totalDes);
        
        let total = totalCantidad - totalDes
        // Calculo del subtotal
        $('.total_'+id).val(total.toFixed(2))

        
        $('.descuento_'+id).val(totalDes.toFixed(2))
        // var total_iva = iva_valor;
        // ivaResult.push(total_iva);
        // $(this).find('.ivaTotal').text(total_iva+' $');
        // iva += total_iva;
        

        var total_descuento = totalDes;
        descuentosTotal.push(total_descuento);
        $(this).find('.descuentoTotal').text(total_descuento+' $');
        totalDescuento += total_descuento;

        console.log(totalDescuento.toFixed(2));
    $("p1").text(''+totalDescuento.toFixed(2)+' $');


    });
    
  
    

    // console.log(totalDescuento.toFixed(2));
    // $("p1").text(''+totalDescuento.toFixed(2)+' $');

}

actualizarTabla();

$(".table").on('change', function() {
    actualizarTabla();
});
})
