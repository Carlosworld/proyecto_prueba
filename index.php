<?php include("db.php");?>
<?php include('header.php');?>  


    <div class="container p-4">
        <div class="table-responsive table-bordered">
            <table class="table">
                <thead>
                    <tr>
                        <th colspan="5">Datos de Facturación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><label style="clear: both;display: block;"><span>*</span>RFC</label><input type="text" class="form-control form-control-sm"></td>
                        <td colspan="4"><label style="clear: both;display: block;"><span>*</span>Razón Social</label><input type="text" class="campoExtendido form-control form-control-sm"></td>
                    </tr>
                    <tr>
                        <td><label style="clear: both;display: block;"><span>*</span>Email</label><input type="text" class="form-control form-control-sm"></td>



                        <!-- En este apartado tenemo que bloquear el metodo de pago que no concuerde con la forma de pago que se solicite-->

                       



                        <td><label style="clear: both;display: block;"><span>*</span>Forma de Pago</label><select class="form-control form-control-sm" id="select"><option value="1" selected="" id="1">--Seleccionar--</option><option value="2" id="2">(01) Efectivo</option><option value="0" id="0'">(28) Tarjeta de Débito</option><option value="3" id="3">(02) Cheque</option></select></td>


                        <td><label style="clear: both;display: block;"><span>*</span>Número de Cuenta</label><input type="text" class="form-control form-control-sm" id="input" disabled></td>
                        <td colspan="2"></td>
                    </tr>
                    <tr>
                        <td><label style="clear: both;display: block;"><span>*</span>Uso del CFDI</label><select class="form-control form-control-sm"><option value="undefined" selected="">--Seleccionar Uso de CFDI</option><option value="G01">(G01) Adquisición de mercancias</option><option value="G03">(G03) Gastos en General</option></select></td>


                        <td><label style="clear: both;display: block;"><span>*</span>Método de Pago</label>
                        <select class="form-control form-control-sm"><option value="undefined" selected="">--Seleccionar Forma de Pago--</option><option value="PUE">(PUE) Pago en una sola exhibición</option><option value="PPD">(PPD) Pago en parcialidades o diferido</option></select></td>
                        <td
                            colspan="3"></td>
                    </tr>
                    <tr>
                        <td colspan="5"><strong>Datos Opcionales</strong></td>
                    </tr>
                    <tr>
                        <!-- Se inserto el query para la inserccion de datos de la tabla estados -->
                        <td><label style="clear: both;display: block;">Estado</label><select class="form-control form-control-sm" id = "cbx_estados">
                        <option value="0" selected="">Seleccionar Estado</option> <!--<php $query = "SELECT * FROM estado"; $result = mysqli_query($conn, $query); while ($row = mysqli_fetch_assoc($result)) ?<option value="index.php?id=<php echo $row['id']?>"><php echo $row['onombre'];?></option>';<php } ?>--></select></td>  

                        <!--Se insertan los datos de la tabla municipio -->
                        <td><label style="clear: both;display: block;">Ciudad/Municipio/Delegación</label><select id="cbx_municipio"class="form-control form-control-sm"><option value="" selected="">--Seleccionar--</option></select></td>


                        <td><label style="clear: both;display: block;">Dirección</label><textarea class="form-control form-control-sm"></textarea></td>
                        <td><label style="clear: both;display: block;">Colonia</label><input type="text" class="form-control form-control-sm"></td>
                        <td><label style="clear: both;display: block;">Código Postal</label><input type="text" class="campoNumerico form-control form-control-sm"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="table-responsive table-bordered table-striped" id="tablaConceptos">
            <table class="table">
                <thead>
                    <tr>
                        <th>Clave</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Costo Unitario</th>
                        <th>Descuento</th>
                        <th>IVA</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" class="form-control form-control-sm"></td>
                        <td><input type="text" class="form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><button class="btn btn-danger btn-sm" type="button"><i class="fa fa-trash-o"></i></button></td>
                    </tr>
                    <tr>
                        <td><input type="text" class="form-control form-control-sm"></td>
                        <td><input type="text" class="form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><button class="btn btn-danger btn-sm" type="button"><i class="fa fa-trash-o"></i></button></td>
                    </tr>
                    <tr>
                        <td><input type="text" class="form-control form-control-sm"></td>
                        <td><input type="text" class="form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><button class="btn btn-danger btn-sm" type="button"><i class="fa fa-trash-o"></i></button></td>
                    </tr>
                    <tr>
                        <td><input type="text" class="form-control form-control-sm"></td>
                        <td><input type="text" class="form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><button class="btn btn-danger btn-sm" type="button"><i class="fa fa-trash-o"></i></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div style="text-align: center;"><button class="btn btn-info" id="botonAgregarConcepto" type="button" style="margin: auto;"><i class="fa fa-plus-square-o"></i>&nbsp;Agregar Concepto</button></div>
        <div class="table-responsive" style="width: 300px;float: right;">
            <table class="table">
                <thead>
                    <tr></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Importe</td>
                        <td>$0.00</td>
                    </tr>
                    <tr>
                        <td>Descuento</td>
                        <td>$0.00</td>
                    </tr>
                    <tr>
                        <td>Subtotal</td>
                        <td>$0.00</td>
                    </tr>
                    <tr>
                        <td>IVA</td>
                        <td>$0.00</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>$0.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    


     <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js">
  </script>  
  <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script> -->
   <!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>  -->
  <script type="text/javascript" src="index.js"></script>
  <!-- <script src="assets/js/jquery.min.js"></script> -->
    <!-- <script src="assets/bootstrap/js/bootstrap.min.js"></script> -->
 <?php include('footer.php');?>  
