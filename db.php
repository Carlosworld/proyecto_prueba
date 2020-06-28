<?php
session_start();

$conn = mysqli_connect(
  'localhost',
  'root',
  '',
  'test'
) or die(mysqli_erro($mysqli));

?>
