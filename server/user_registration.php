
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
$username = $obj['username'];
$password = $obj['password'];
$email = $obj['email'];
$phone = $obj['phone'];
$address = $obj['address'];
$city = $obj['city'];
$zip = $obj['zip'];

// Checking username is empty or not
$username = trim($username);

// Checking username is already exist or not using SQL query.
$CheckSQL = "SELECT * FROM User WHERE username='$username'";
 
// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));

if (isset($username) === true && $username === ''){

    $UsernameEmptyMSG = 'Username Is Empty, Please Try Again !!!';
  
    // Converting the message into JSON format.
    $UsernameEmptyJson = json_encode($UsernameEmptyMSG);

    // Echo the message.
    echo $UsernameEmptyJson; 
    
} else if (isset($password) === true && $password === ''){

    $PasswordEmptyMSG = 'Password Is Empty, Please Try Again !!!';
  
    // Converting the message into JSON format.
    $PasswordEmptyJson = json_encode($PasswordEmptyMSG);

    // Echo the message.
    echo $PasswordEmptyJson; 

} else if (isset($check)){
 
    $UsernameExistMSG = 'Username Already Exist, Please Try Again !!!';
  
    // Converting the message into JSON format.
    $UsernameExistJson = json_encode($UsernameExistMSG);

    // Echo the message.
    echo $UsernameExistJson ; 

} else{
    // Creating SQL query and insert the record into MySQL database table.
    $Sql_Query = "insert into User (username,password,email,phone,address,city,zip) values 
        ('$username','$password','$email','$phone','$address','$city','$zip')";
  
    if(mysqli_query($con,$Sql_Query)){
  
        // If the record inserted successfully then show the message.
        $MSG = 'User Registered Successfully' ;
  
        // Converting the message into JSON format.
        $json = json_encode($MSG);
  
        // Echo the message.
        echo $json ;
    } else{

        echo 'Try Again';
  
    }
}

mysqli_close($con);

?>
