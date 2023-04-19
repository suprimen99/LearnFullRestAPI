<?php
// $mahasiswa =  [ 

//     [
    
//     "nama" => "muhamad Supriyanto",
//     "nim" => 181011400345,
//     "email" => "Suprianto@gmail.com"
    
//     ], 
//     [
    
//     "nama" => "irgi fahlevi",
//     "nim" => 181011400373,
//     "email" => "irgi@gmail.com"

//     ] 
// ];

$dbh = new PDO('mysql:host=localhost;dbname=test', 'root', '');
$db = $dbh->prepare('SELECT * FROM mahasiswa');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);
echo "$data"


?>