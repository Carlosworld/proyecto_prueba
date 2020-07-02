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
    $('#input').on('keyup', function() {
        if ($('#input').val() == "") {
            $('#select').prop('disabled', false);
        } else {
            $('#select').prop('disabled', true );
        }
    });
    $('#select').on('change', function() {
        if (parseInt($('#select').val()) === 0) {
            $('#input').prop('disabled', false);
        } else {
            $('#input').prop('disabled', true);
        }
    });
})

// buscar rfcs




// Activacion de campos del rfc

// $(document).ready(function() {
  
//   console.log('jQuery is working');

//   // $('#rfc').keyup(function(e) {
//   //  let rfc =$('#rfc').val();
//   //  $.ajax({
//   //    url: 'rfc.php',
//   //    type: 'POST',
//   //    data: {rfc},
//   //    success: function(response) {
//   //      let rfcs = JSON.parse(response);
       
//        $("#rfc").keyup(function(){
//         let rfc =$('#rfc').val();
//         $.ajax({
//               url:'rfc.php',
//             type:'POST',
//             dataType:'json',
//             data:{rfc}
//         })
       
        
//         .done(function(respuesta){
//           console.log(respuesta)
//             $("#rfc").autocomplete(respuesta.nombre);
//             $("#dir").val(respuesta.dir);
//             //$("#materno").val(respuesta.materno);

//             // $( "#rfc" ).autocomplete({
//             //   source: respuesta.nombre
              
//             // });
//         });
//       });
//     });
    



      //  let template = '';

      //  rfcs.forEach(rfcs => {
      //   template += `
      //   <li><a href="#" class="task-item">${rfcs.nombre}</a></li>
      //  ` 
      //  });

      //  $('#conteiner').html(template);

    // Insertar  los campos a la base de datos
    $(document).ready(function() {
    $("#formID").submit(function(e){
         console.log("perron")
        
         var strRfc = $("#rfc"). val();
         console.log("nombre ->", strRfc)

         var strNombre = $("#nombre"). val();
         console.log("apellido ->", strNombre);

          var jsonData=$(this).serializeArray()
         
          console.log(jsonData);

        // var dataForm = $("#formID").serialize();
        // console.log("dataForm ->", dataForm);

     return false;
 });
})