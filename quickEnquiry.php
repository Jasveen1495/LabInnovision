<?php
    $con=mysqli_connect('localhost','root','');
    mysqli_select_db($con,'enquiry') or die("Could not connect to the database");
    $name=$_POST['name'];
    $mob=$_POST['mob'];
    $email=$_POST['email'];
    $msg=$_POST['msg'];
    $query=mysqli_query($con,"INSERT INTO `enquiry`.`details` ( `Name`, `Mobile`, `Email`, `Msg`) VALUES ('$name', '$mob', '$email', '$msg')");
    header("location:contact.html");
?>