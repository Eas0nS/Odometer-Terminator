<?php

// Put this file under /Iampp/htdocs
include('DBconfig.php');
 
// Creating connection.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');
 
// decoding the received JSON and store into $obj variable.
$obj = json_decode($json,true);
 
$id = $obj['id'];
$username = $obj['username']; 
$email = $obj['email'];
$phone = $obj['phone'];
$address = $obj['address'];
$city = $obj['city'];
$zip = $obj['zip'];

$Sql_Query = "update User set username = '$username', email = '$email',
             phone = '$phone', address = '$address', city = '$city',
             zip = '$zip' where id = '$id' ";
 
if(mysqli_query($con,$Sql_Query)){
  
    // If the record updated successfully then show the message.
    $MSG = 'Personal Account Updated Successfully' ;

    // Converting the message into JSON format.
    $json = json_encode($MSG);

    echo $json;

} else{

    echo json_encode('Try Again');

}

mysqli_close($con);

?>