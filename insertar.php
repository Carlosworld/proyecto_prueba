<?php
include('db.php');
//$RFC = $_POST['jsonData'];
$conn = getConn();
// $query = "INSERT INTO `testeo` (`id`, `nombre`, `apellido`) VALUES (NULL, 'carlos', 'garcia'), (NULL, 'yeimi', 'garcia');";

// $result = mysqli_query($conn, $query);

if (isset($_POST['rfc'])) {
    $rfc = $_POST['rfc'];
    $razon = $_POST['razon'];
    $email = $_POST['email'];
    $estado = $_POST['estado'];
    $municipio = $_POST['municipio'];
    $direccion = $_POST['direccion'];
    $colonia = $_POST['colonia'];
    $codigoPostal = $_POST['codigoPostal'];


   
    $query = "INSERT INTO `datosfiscales` ( `orfc`, `orazonsocial`, `rcveestado`, `rcvemunicipio`, `odireccion`, `ocolonia`, `ocodigopostal`, `oemail`, `istatus`) VALUES ('$rfc', '$razon', '$estado', '$municipio', ' $direccion', '$colonia', '$codigoPostal', '$email', 'A');";
    $result = mysqli_query($conn, $query);
    
    if(!$result){
        die('Query Failed'.mysqli_error($conn));
    }
    echo 'Task added successfully';
}



// $json = array();
// while ($row = mysqli_fetch_array($result)) {
//     $json[] = array(
//     'nombre' => $row['orazonsocial'],
//     'dir' => $row['odireccion']
//     );
// }

// $jsonstring = json_encode($json);
// echo $jsonstring;

?>