<?php
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Content-Type");
	header("Content-Type: application/json");
     $data = json_decode(file_get_contents("php://input"));
echo "Я получил следующие данные $data->num";
?>
