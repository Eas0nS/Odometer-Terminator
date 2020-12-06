
<?php 

// Put this file under /Iampp/htdocs
include('DBconfig.php');

// Creating connection.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
  
// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');
  
// decoding the received JSON and store into $obj variable.
$obj = json_decode($json,true);
  
// Populate vars from JSON $obj array and store into db.
$userID = $obj['userID'];
$mileage = $obj['mileage'];

$Sql_Query = "update Car set mileage = '$mileage' where userID = '$userID' ";
  
if(mysqli_query($con,$Sql_Query)){ 
    // If the record inserted successfully then show the message.
    $MSG = 'Mileage Updated Successfully' ;
  
    // Converting the message into JSON format.
    $json = json_encode($MSG);

    // Echo the message.
    echo $json ;
} else{

    echo json_encode('Try Again');

}

mysqli_close($con);

?>
