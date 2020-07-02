<?php include("db.php");?>
<?php include('header.php');?>  


<div class="container p-4">
    <div class="table-responsive container-fluid">
        <form id="formID" name="emp" method="post">
            <table class="table" >
                    <thead>
                        <tr>
                            <th colspan="5">Datos de Facturación</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><label style="clear: both;display: block;" for="rfc"><span>*</span>RFC</label>
                            <input type="text" class="form-control form-control-sm" id="rfc" name="nombre_j">
                            
                            </td>

                            <td colspan="4"><label style="clear: both;display: block;"><span>*</span>Razón Social</label><input type="text" class="campoExtendido form-control form-control-sm" id="nombre" name="nombre_o">
                            
                            </td>                 
                      
                        <!-- <button type="submit"></button> -->
                        </tr>
                    </tbody>
            </table>
            <div style="text-align: center;"><button class="btn btn-info" id="botonAgregarConcepto" type="aubmit" style="margin: auto;"><i class="fa fa-plus-square-o"></i>&nbsp;Agregar Concepto</button></div>
        </form>
    </div>
</div>


    
    <script src="https://code.jquery.com/jquery-3.5.0.js"></script>

     <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js">
  </script>  
  <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script> -->
   <!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>  -->
  <script type="text/javascript" src="index.js"></script>
  <!-- <script src="assets/js/jquery.min.js"></script> -->
    <!-- <script src="assets/bootstrap/js/bootstrap.min.js"></script> -->
 <?php include('footer.php');?>  
