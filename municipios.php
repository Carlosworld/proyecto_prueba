<?php 
require_once 'db.php';

function getMunicipios(){
  $mysqli = getConn();
  $id = $_POST['id'];
  $query = "SELECT kcvemunicipio,rcveestado, municipio.onombre FROM municipio WHERE municipio.rcveestado = $id  ORDER BY municipio.onombre";
  $result = $mysqli->query($query);
  $municipio = '<option value="0">Elige una opción</option>';
  while($row = $result->fetch_array(MYSQLI_ASSOC)){
    $municipio .= "<option value='$row[kcvemunicipio]'>$row[onombre]</option>";
  }
  return $municipio;
}

echo getMunicipios();