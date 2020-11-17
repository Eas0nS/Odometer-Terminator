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
$brand = $obj['brand']; 
$model = $obj['model'];
$color = $obj['color'];

$Sql_Query = "update Car set brand = '$brand', model = '$model',
             color = '$color' where userID = '$userID' ";
 
if(mysqli_query($con,$Sql_Query)){
  
    // If the record updated successfully then show the message.
    $MSG = 'Car Status Updated Successfully' ;

    // Converting the message into JSON format.
    $json = json_encode($MSG);

    echo $json;

} else{

    echo json_encode('Try Again');

}

mysqli_close($con);

?>