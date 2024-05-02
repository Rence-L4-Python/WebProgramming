<?php
$Firstname=$_POST['Firstname'];
$Lastname=$_POST['Lastname'];
$Email=$_POST['Email'];
$gender=$_POST['gender'];

//DATABASE CONNECTION
$conn=new mysqli('localhost','root','566','test');
if($conn->connect_error){
    die('Connection Failed:' . $conn->connect_error);
}
else{
    $stmt= $conn->prepare("insert into customer(FirstName,LastName,Email,gender) values(?,?,?,?)");
    $stmt->$bind_param("ssss",$Firstname,$Lastname,$Email,$gender);
    $stmt->execute();
    echo "registration successful";
    $stmt->close();
    $conn->close();
}
?>