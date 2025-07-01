<?php
include 'config.php';

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $where_from = $_POST['where_from'];
    $enter_to_sql = "INSERT INTO visitor (name, phone, email, subject, message ,where_from) VALUES ('$name', '$phone', '$email', '$subject', '$message','$where_from')";
    
    if (mysqli_query($conection, $enter_to_sql)) {
        echo "انتظر التحميل";
        header("Location: ../". $where_from);
    }else {
        echo "Error: " . $enter_to_sql . "<br>" . mysqli_error($conection);
    }
};