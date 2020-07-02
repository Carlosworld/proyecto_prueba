<?php
include('db.php');
$RFC = $_POST['insert'];
$conn = getConn();
$query = "";

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