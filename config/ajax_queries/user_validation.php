<?php
include '../config.php';
$email = mysqli_real_escape_string($conn,$_POST['email']);
$password = mysqli_real_escape_string($conn,$_POST['pass']);
if($email != "" && $password != ""){
    $sql = "CALL user_login(\"{$email}\",\"{$password}\");";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_array($result);
    if(!is_null($row))
    {
        echo "success";
    } else{
        echo "fail";
    }
}