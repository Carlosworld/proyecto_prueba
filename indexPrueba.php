<?php include("db.php");?>
<?php include('header.php');?> 
<body>
<div class="container p-4">
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
                <tbody>
                    <tr class="tr_input">
                        
                        <td><input type="text" class="producto form-control form-control-sm" id="producto_1"></td>


                        <td><input type="text" class="name form-control form-control-sm" id="name_1"></td>

                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>

                         <!-- <td><input type="text" class="costoUnitario campoNumerico form-control form-control-sm" id="costoUnitario_1"></td>  -->

                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                         <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <td><input type="text" class="campoNumerico form-control form-control-sm"></td>
                        <!-- <td><button class="btn btn-danger btn-sm" type="button"><i class="fa fa-trash-o"></i></button></td> -->
                        <td><input type="text" class="costoUnitario campoNumerico form-control form-control-sm" id="costoUnitario_1"></td>
                    </tr>
                </tbody>
            </table>
            <br>
        <input type='button' value='Add more' id='addmore'>

        </div>
</div>
</body>
</html>

<script type="text/javascript" src="index.js"></script>
<?php include('footer.php');?>  