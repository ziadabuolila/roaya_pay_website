<?php
    include 'config.php';
    if(isset($_POST['submit'])){
        $email = $_POST['email'];
        $pass = $_POST['pass_1'];
        $select = "SELECT * from register WHERE email = $email";
        if (mysqli_query($conection, $select)) {
        }else {
            echo "Error: " . $enter_to_sql . "<br>" . mysqli_error($conection);
        }            
    }
    $enter_to_sql = "INSERT INTO register (email, pass ,where_from) VALUES ('$email', '$pass','$where_from')";
    if (mysqli_query($conection, $enter_to_sql)) {
        echo "انتظر التحميل";
        header("Location: ../login/login.html");
    }else {
        echo "Error: " . $enter_to_sql . "<br>" . mysqli_error($conection);
    }
?>