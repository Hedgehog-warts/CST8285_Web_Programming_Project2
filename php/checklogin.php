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
    $pass = $_POST['pass'];

    // check data from database
    $check = "SELECT userPassword, userName FROM userinformation where emailAddress='$email'";
    $result = mysqli_query($con, $check);
    $found = mysqli_num_rows($result);
    
    if ($found == 0) {
        echo "<script>alert('Invalid account. Please check your ID');</script>";
        echo "<script>window.location.href = '../login.html';</script>";
    } else {
        $row = mysqli_fetch_assoc($result);
        if ($pass != $row['userPassword']) {
            echo "<script>alert('Password is wrong. Please check password');</script>";
            echo "<script>window.location.href = '../login.html';</script>";
        } else {
            echo "<script>alert('Welcome, $row[userName]!');</script>";
            echo "<script>window.location.href = '../index.html';</script>";
        }
    }

    // close the connection
    mysqli_close($con);
}
?>