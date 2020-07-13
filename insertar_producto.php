<?php
include('db.php');
//$RFC = $_POST['jsonData'];
$conn = getConn();
// $query = "INSERT INTO `testeo` (`id`, `nombre`, `apellido`) VALUES (NULL, 'carlos', 'garcia'), (NULL, 'yeimi', 'garcia');";

// $result = mysqli_query($conn, $query);

if (isset($_POST['producto'])) {
    $producto = $_POST['producto'];
    $nombre = $_POST['nombre'];
    $costoUnitario = $_POST['costoUnitario'];
    $id=$_POST['producto'];
    // $estado = $_POST['estado'];
    // $municipio = $_POST['municipio'];
    // $direccion = $_POST['direccion'];
    // $colonia = $_POST['colonia'];
    // $codigoPostal = $_POST['codigoPostal'];

    $sql = "SELECT `kcveproducto` FROM `producto` WHERE 'onombre' = $id";
    $nom = mysqli_query($conn, $sql);
    echo $nom;
   
    $query = "INSERT INTO `producto` ( `onombre`, `oclave`, `ocostounitario`, `istatus`,`iusrins`) VALUES ('$producto', '$nombre', '$costoUnitario','A','1');";
    $query = "INSERT INTO `factura` ( `kcvedatosfiscales`) VALUES ('');";
    
    $query = "INSERT INTO `detalle` ( `kcvedatosfiscales`) VALUES ('');";

    $result = mysqli_query($conn, $query);
    
    if(!$result){
        die('Query Failed'.mysqli_error($conn));
    }
    echo 'Task added successfully';
}



?>