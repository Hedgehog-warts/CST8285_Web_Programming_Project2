<?php
   $con = mysqli_connect('localhost', 'root', 'abcd1234','webassignment2');
   
   if(mysqli_connect_errno()) {
        $msg = "Database connection failed: ";
        $msg .= mysqli_connect_error();
        $msg .= " (" . mysqli_connect_errno() . ")";
        exit($msg);
    }
   
   $sql = 'SELECT emp_id, emp_name, emp_salary FROM employee';
   $check = "SELECT * FROM package";
   $result = mysqli_query($con, $check);
//    if (mysqli_num_rows($result) > 0) {
//     // OUTPUT DATA OF EACH ROW
//         while($row = mysqli_fetch_assoc($result)) {
//             echo "{$row['meta_id_tag']}";
//             echo "{$row['meta_location']}";

//         }
//     }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" type="text/css" href="./css/style.css">
    <link rel="stylesheet" type="text/css" href="./css/package.css">
    <script src="./js/package-script.js" defer></script>

    <title>Packages</title>
</head>
<body>
    <?php while($row = mysqli_fetch_assoc($result)) {
        echo "<li class='search-packageTitle'";
        echo " id=";
        echo $row['meta_id_tag'];
        echo " name=";
        echo "$row[meta_location]>";     

            echo "<div class='tourPackage'>";
                echo "<div class='heading'>";

                    echo "<h3 class='size'>";
                    echo $row['package_type'];
                    echo "</h3>";

                    echo "<h3 class='price'>";
                    echo $row['package_price'];
                    echo "</h3>";
                echo "</div>";

                echo "<h2>";
                echo $row['package_name'];
                echo "</h2>";

                echo "<p>";
                echo $row['package_description'];
                echo "</p>";
            echo "</div>";
        echo "</li>";
    }?>

</body>
</html>