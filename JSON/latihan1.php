<?php
$mahasiswa =  [ 

    [
    
    "nama" => "muhamad Supriyanto",
    "nim" => 181011400345,
    "email" => "Suprianto@gmail.com"
    
    ], 
    [
    
    "nama" => "irgi fahlevi",
    "nim" => 181011400373,
    "email" => "irgi@gmail.com"

    ] 
];

$data = json_encode($mahasiswa);
echo "$data"
?>