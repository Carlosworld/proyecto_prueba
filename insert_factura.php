<?php
include('db.php');
//$RFC = $_POST['jsonData'];
$conn = getConn();

$request = $_POST['request'];   // request

if($request == 2){
    $userid = $_POST['userid'];
   
 $sql = "INSERT INTO `factura` (`kcvedatosfiscales`) VALUES ('$userid')";

    $result = mysqli_query($conn,$sql);




    // encoding array to json format
    echo json_encode($users_arr);
    exit;
}


?>