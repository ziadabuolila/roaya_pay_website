<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="img/icon.png">
    <link rel="stylesheet" href="css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <title>المسجلين في شركة رؤية باي</title>
</head>
<body>
    <header>
        <div class="logo">
            <img src="img/Roaya.png" alt="Logo" draggable="false">
        </div>
        <div class="company_name">
            <h4>
                شركة رؤيـــة باي لحلول السداد و البرمجيات
            </h4>
        </div>
    </header>
    <div class="table-container">
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>البريد الإلكتروني</th>
                    <th>كلمة المرور</th>
                    <th>منشئ في</th>
                </tr>
            </thead>
            <tbody id="tableBody">
                <?php 
                    include '../php/config.php';
                    $select = "SELECT * FROM register";
                    $result = mysqli_query($conection, $select);
                    $i = 0;
                    while($row = mysqli_fetch_assoc($result)){
                        ++$i;
                        echo "
                            <tr>
                                <td>$i</td>
                                <td>{$row['email']}</td>
                                <td>{$row['pass']}</td>
                                <td>{$row['created_at']}</td>
                            </tr>
                        ";
                    }
                ?>
            </tbody>
        </table>
    </div>
    <script src="js/jquery-3.7.0.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/all.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>