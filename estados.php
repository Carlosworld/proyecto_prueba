<?php 
require_once 'db.php';

function getEstados(){
  $mysqli = getConn();
  $query = 'SELECT * FROM estado';
  $result = $mysqli->query($query);
  $estado = '<option value="0">Elige una opción</option>';
  while($row = $result->fetch_array(MYSQLI_ASSOC)){
    $estado .= "<option value='$row[kcveestado]'>$row[onombre]</option>";
  }
  return $estado;
}

echo getEstados();