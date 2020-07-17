<?php
include('db.php');
//$RFC = $_POST['jsonData'];
$conn = getConn();

$request = $_POST['request'];   // request

// Get username list
if($request == 1){
    $search = $_POST['search'];

    $query = "SELECT * FROM datosfiscales WHERE orfc like'%".$search."%'";
    $result = mysqli_query($conn,$query);

    
    
    while($row = mysqli_fetch_array($result) ){
        $response[] = array("value"=>$row['kcvedatosfiscales'],"label"=>$row['orfc']);
    }

    // encoding array to json format
    echo json_encode($response);
    exit;
}

// Get details
if($request == 2){
    $userid = $_POST['userid'];
    $sql = "SELECT * FROM datosfiscales WHERE kcvedatosfiscales=".$userid;

    $result = mysqli_query($conn,$sql);
    
    $sqlfactura = "SELECT * FROM factura WHERE kcvedatosfiscales=".$userid;

    $factura = mysqli_query($conn,$sqlfactura);

    $users_arr = array();

    while( $row = mysqli_fetch_array($result) ){
        $userid = $row['kcvedatosfiscales'];
        $fullname = $row['orazonsocial'];
        $email = $row['oemail'];
        $dir = $row['odireccion'];
        $col = $row['ocolonia'];
        $cp =$row['ocodigopostal'];

        $users_arr[] = array("id" => $userid, "name" => $fullname,"email" => $email, "dir" =>$dir, "col" =>$col, "cp"=>$cp);
    }

    $sqlfact = "INSERT INTO `factura` (`kcvedatosfiscales`) VALUES ('$userid')";

    $resultfacturas = mysqli_query($conn,$sqlfact);




    // encoding array to json format
    echo json_encode($users_arr);
    exit;
}