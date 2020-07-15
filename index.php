<?php include("db.php");?>
<?php include('includes/header.php');?>  

<div class="container p-4">
    <div class="table-responsive table-bordered">
        <form id="formID" name="emp" method="post"> 
            <table class="table" >
                <thead>
                    <tr>
                        <th colspan="5">Datos de Facturación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="tr_input">
                        <td><label style="clear: both;display: block;" for="rfc"><span>*</span>RFC</label>
                        <input type="text" class="form-control form-control-sm username" id="username_1" name="rfc" onkeyup="this.value = this.value.toUpperCase();">
                        
                        </td>

                        <td colspan="4"><label style="clear: both;display: block;"><span>*</span>Razón Social</label><input type="text" class="name form-control form-control-sm" id="name_1" name="razon-social">
                        
                        </td>

                    </tr>
                    <tr>
                        <td><label style="clear: both;display: block;"><span>*</span>Email</label>
                        <input type="email" class="email form-control form-control-sm" id="email_1"></td>



                        <!-- En este apartado tenemo que bloquear el metodo de pago que no concuerde con la forma de pago que se solicite-->

                       



                        <td><label style="clear: both;display: block;"><span>*</span>Forma de Pago</label><select class="form-control form-control-sm" id="select" name="forma-pago" required><option value="1" selected="" id="1">--Seleccionar--</option><option value="2" id="2">(01) Efectivo</option><option value="0" id="0'">(28) Tarjeta de Débito</option><option value="3" id="3">(02) Cheque</option></select></td>


                        <td><label style="clear: both;display: block;"><span>*</span>Número de Cuenta</label><input type="text" class="form-control form-control-sm" id="numeroCuenta" name="numero-cuenta" onkeypress="solonumeros(event);" disabled></td>
                        <td colspan="2"></td>
                    </tr>
                    <tr>
                        <td><label style="clear: both;display: block;"><span>*</span>Uso del CFDI</label><select class="form-control form-control-sm" id="cfdi" name="CFDI" required><option value="undefined" selected="">--Seleccionar Uso de CFDI</option><option value="G01">(G01) Adquisición de mercancias</option><option value="G03">(G03) Gastos en General</option></select></td>


                        <td><label style="clear: both;display: block;"><span>*</span>Método de Pago</label>
                        <select class="form-control form-control-sm" id="metodoPago" name="metodo-pago" required><option value="undefined" selected="">--Seleccionar Forma de Pago--</option><option value="PUE">(PUE) Pago en una sola exhibición</option><option value="PPD">(PPD) Pago en parcialidades o diferido</option></select></td>
                        <td
                            colspan="3"></td>
                    </tr>
                    <tr>
                        <td colspan="5"><strong>Datos Opcionales</strong></td>
                    </tr>
                    <tr>
                        <!-- Se inserto el query para la inserccion de datos de la tabla estados -->
                        <td><label style="clear: both;display: block;">Estado</label><select class="form-control form-control-sm" id = "cbx_estados" name="estado">
                        <option value="0" selected="">Seleccionar Estado</option></select></td>  

                        <!--Se insertan los datos de la tabla municipio -->
                        <td><label style="clear: both;display: block;">Ciudad/Municipio/Delegación</label><select id="cbx_municipio" name="municipio"class="form-control form-control-sm"><option value="" selected="">--Seleccionar--</option></select></td>


                        <td><label style="clear: both;display: block;">Dirección</label><textarea class="dir form-control form-control-sm" id="dir_1" name="dir"></textarea></td>


                        <td><label style="clear: both;display: block;">Colonia</label><input type="text" class="col form-control form-control-sm" id="col_1" name="colonia"></td>

                        <td><label style="clear: both;display: block;">Código Postal</label><input type="text" class="cp campoNumerico form-control form-control-sm" id="cp_1" name="codigo-postal" onkeypress="solonumeros(event);"></td>
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
                        <th>Descuento</th>
                        <th>IVA</th>
                        <th>Total</th>
                        <th>Costo Unitario</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody class="tbody">
                    <tr class="filas tr_input " taskId='1'>
                        
                        <td><input type="text" class="producto form-control form-control-sm" id="producto_1"></td>


                        <td><input type="text" class="nombre form-control form-control-sm" id="nombre_1"></td>

                        <td><input type="text" class="monto cantidad_1 campoNumerico form-control form-control-sm" id="cantidad_1"  onkeypress="solonumeros(event);"></td>

                         <!-- <td><input type="text" class="costoUnitario campoNumerico form-control form-control-sm" id="costoUnitario_1"></td>  -->

                        <td><input type="text" class="monto2 descuento_1 campoNumerico form-control form-control-sm"  placeholder="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp%"onkeypress="solonumeros(event);"></td>
                         
                         <td><input type="text" class="monto3 iva_1 campoNumerico form-control form-control-sm"  value="0.16" id="iva_1"  onkeypress="solonumeros(event);" disabled></td>
                        
                        <td><input type="text"  class="monto4 total_1 campoNumerico form-control form-control-sm" id="total_1" onkeypress="solonumeros(event);" disabled></td>
                        
                        <!-- <td><button class="btn btn-danger btn-sm" type="button"><i class="fa fa-trash-o"></i></button></td> -->
                        <td><input type="text" class="monto costoUnitario_1 costoUnitario campoNumerico form-control form-control-sm" id="costoUnitario_1" onkeypress="solonumeros(event);"></td>
                    </tr>
                </tbody>
                <tr>
                    <td><input type="text" class="descuentoGeneral  form-control        form-control-sm"  id="descuentoGeneral" placeholder="descuento   $"   onkeypress="solonumeros(event);"></td>
                </tr>
            </table>
        <!-- <input class="btn btn-" type='button' value='Add more' id='addmore'> -->
        <div class="col p-4">
            <button type="button" class="btn btn-secondary btn-sm" id='addmore'>Agrear producto</button>
        </div>
        
        </div>
</div>
        <div style="text-align: center;"><button class="btn btn-info" id="botonAgregarConcepto" type="submit" style="margin: auto;"><i class="fa fa-plus-square-o"></i>&nbsp;Agregar Concepto</button></div>
        <div class="table-responsive" style="width: 300px;float: right;">
            <table class="table">
                <thead>
                    <tr></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Importe</td>
                        <td><p></p></td>
                    </tr>
                    <tr>
                        <td>Descuento</td>
                        <td><p1></p1></td>
                    </tr>
                    <tr>
                        <td>Subtotal</td>
                        <td><p2></p2></td>
                    </tr>
                    <tr>
                        <td>IVA</td>
                        <td><p3></p3></td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td><p4></p4></td>
                    </tr>
                </tbody>
            </table>
        </form>  
    </div>
</div>


<script type="text/javascript" src="index.js"></script>
<?php include('includes/footer.php');?>  
