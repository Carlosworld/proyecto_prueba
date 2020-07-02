<?php
include('db.php');
$RFC = $_POST['rfc'];
$conn = getConn();
$query = "SELECT * FROM `datosfiscales` WHERE `orfc` LIKE '$RFC%'";

$result = mysqli_query($conn, $query);
if(!$result){
    die('Query Failed'.mysqli_error($conn));
}

$json = array();
while ($row = mysqli_fetch_array($result)) {
    $json[] = array(
    'nombre' => $row['orazonsocial'],
    'dir' => $row['odireccion']
    );
}

$jsonstring = json_encode($json);
echo $jsonstring;

?>