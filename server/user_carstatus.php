<?php

// Put this file under /Iampp/htdocs
include('DBconfig.php');
 
// Creating connection.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');
 
// decoding the received JSON and store into $obj variable.
$obj = json_decode($json,true);
 
$userID = $obj['userID'];
 
$Sql_Query = "select * from Car where userID = '$userID' ";
 
// Executing SQL Query.
$get_info = mysqli_fetch_array(mysqli_query($con,$Sql_Query));

if(isset($get_info)){

    // Converting the message into JSON format.
    $GetInfoJson = json_encode($get_info);
 
    // Echo the message.
    echo $GetInfoJson; 
 
}

mysqli_close($con);

?>