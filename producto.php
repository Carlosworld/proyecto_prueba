<?php
include('db.php');
//$RFC = $_POST['jsonData'];
$conn = getConn();

$request = $_POST['request'];   // request

// Get username list
if($request == 1){
    $search = $_POST['buscar'];

    $query = "SELECT * FROM producto WHERE oclave like'%".$search."%'";
    $result = mysqli_query($conn,$query);
    
    while($row = mysqli_fetch_array($result) ){
        $response[] = array("value"=>$row['kcveproducto'],"label"=>$row['oclave']);
    }

    // encoding array to json format
    echo json_encode($response);
    exit;
}

// Get details
if($request == 2){
    $userid = $_POST['userid'];
    $sql = "SELECT * FROM producto WHERE kcveproducto=".$userid;

    $result = mysqli_query($conn,$sql);

    $users_arr = array();

    while( $row = mysqli_fetch_array($result) ){
        $userid = $row['kcveproducto'];
        $fullname = $row['onombre'];
        $costoUnitario = $row['ocostounitario'];
       
        $users_arr[] = array("id" => $userid, "nombre" => $fullname,"costoUnitario" => $costoUnitario);
    }

    // encoding array to json format
    echo json_encode($users_arr);
    exit;
}