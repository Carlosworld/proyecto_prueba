<?php

include('db.php');
//$RFC = $_POST['jsonData'];
$conn = getConn();

if(isset($_POST['id'])){
    $query = "DELETE FROM producto WHERE kcveproducto = $id";
    $result = mysqli_querey($conn, $query);
    if(!$result){
        die("Query failed");
    }
    echo "Tasks delete successfull";
}