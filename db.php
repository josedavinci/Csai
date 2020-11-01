<?php
header('Content-type: application/json');

$mysqli = new mysqli("localhost", "id15220347_jmarinoflor", "MWMjNdXsXWM)?2KB", "id15220347_csaidb");
 
$resultado = $mysqli->query("SELECT * FROM `Tarjetas`");

//$resultado->fetch_array(MYSQLI_ASSOC);

$resultado->fetch_all(MYSQLI_ASSOC);

$json = '[{"id":"example","comments":"example"}';

foreach($resultado as $service){
    
   $json = $json . ',{"id":"'.$service['id'].'","comments":"'. $service['comments'] . '"}';
}

$json = $json . ']';

echo $json;
   

?>