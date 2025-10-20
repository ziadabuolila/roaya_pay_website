<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="img/Roaya.png">
    <link rel="stylesheet" href="css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <title>إستقبال الرسائل</title>
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
                    <th>الاسم الكامل</th>
                    <th>رقم الهاتف</th>
                    <th>البريد الإلكتروني</th>
                    <th>الموضوع</th>
                    <th>الرسالة</th>
                    <th>الوقت</th>
                    <th>الأرسال</th>
                </tr>
            </thead>
            <?php
                include '../php/config.php';
                $select = mysqli_query($conection, "SELECT * FROM visitor");
            ?>
            <tbody id="tableBody">
                <?php
                    $n_1 = 1;
                    while ($row = mysqli_fetch_array(result: $select)) {
                        echo "<tr>";
                            echo "<td>" . $n_1 . "</td>";
                            echo "<td>" . $row['name'] . "</td>";
                            echo "<td>" . $row['phone'] . "</td>";
                            echo "<td>" . $row['email'] . "</td>";
                            echo "<td>" . $row['subject'] . "</td>";
                            echo "<td>" . $row['message'] . "</td>";
                            echo "<td>" . $row['created_at'] . "</td>";
                            echo "<td>" . $row['where_from'] . "</td>";
                        echo "</tr>";
                        $n_1++;
                    }
                ?>
            </tbody>
        </table>
    </div>
    <script src="js/jquery-3.7.0.min.js"></script>
    <script src="js/popper.min.js"></script>
 <script src="https://example.com/fontawesome/v7.0.1/js/fontawesome.js" data-auto-replace-svg="nest"></script>
  <script src="https://example.com/fontawesome/v7.0.1/js/solid.js"></script>
  <script src="https://example.com/fontawesome/v7.0.1/js/brands.js"></script>
    <script src="js/main.js"></script>
</body>
</html>