<!-- Assignement 2 Group 7_Doyoung Kim -->

<?php  

// database connection code
if(isset($_POST['email']))
{
    // $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
    $con = mysqli_connect('localhost', 'root', 'abcd1234','webassignment2');

    // check connection
    if(mysqli_connect_errno()) {
        $msg = "Database connection failed: ";
        $msg .= mysqli_connect_error();
        $msg .= " (" . mysqli_connect_errno() . ")";
        exit($msg);
    }

    // define variables by using global variables
    $email = $_POST['email'];
    $userName = $_POST['login'];
    $password = $_POST['pass'];
    $province = $_POST['Sort1'];
    $concept = $_POST['Sort2'];

    // Create Table if not exists
    $table = "CREATE TABLE IF NOT EXISTS userinformation
        (id INT AUTO_INCREMENT PRIMARY KEY,
        emailAddress VARCHAR(50) NOT NULL,
        userName VARCHAR(30) NOT NULL,
        userPassword VARCHAR(30) NOT NULL,
        preferredProvince VARCHAR(20) NOT NULL,
        travelConcept VARCHAR(50) NOT NULL)
        ENGINE=INNODB;";
    $createTable = mysqli_query($con, $table);

    // check data from database and insert SQL code
    $check = "SELECT userPassword FROM userinformation where emailAddress='$email'";
    $result = mysqli_query($con, $check);
    $found = mysqli_num_rows($result);

    if ($found > 0) {
        echo "<script>alert('We already have this account. Please use another account.');</script>";
        echo "<script>window.location.href = '../signup.html';</script>";
    } else {
        $sql = "INSERT INTO userinformation (emailAddress, userName, userPassword, preferredProvince, travelConcept)
            VALUES ('$email', '$userName', '$password', '$province', '$concept')";
        $rs = mysqli_query($con, $sql);
        echo "<form action='../welcome.php' method='post' id='welcome' name='welcome'>";
        echo "<input type='text' name='welcomename' value=$_POST[login]>";
        echo "</form>";
        echo "<script type='text/javascript'>";
        echo "document.getElementById('welcome').submit();";
        echo "</script>";
    }    
     
    // close the connection
    mysqli_close($con);
}
?>