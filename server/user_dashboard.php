<?php

// Put this file under /Iampp/htdocs
include('DBconfig.php');
 
// Creating connection.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');
 
// decoding the received JSON and store into $obj variable.
$obj = json_decode($json,true);

// Populate username from JSON $obj array and store into $username.
$username = $obj['username'];

// Get id query with unique username.
$Sql_Query = "select id from User where username = '$username' ";
 
// Executing SQL Query.
$get_id = mysqli_fetch_array(mysqli_query($con,$Sql_Query));

if(isset($get_id)){
 
    // Converting the message into JSON format.
    $GetIdJson = json_encode($get_id);
 
    // Echo the message.
    echo $GetIdJson; 
 
}

mysqli_close($con);

?>