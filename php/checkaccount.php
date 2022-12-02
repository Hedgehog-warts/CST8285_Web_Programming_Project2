<?php  

// database connection code
if(isset($_POST['email']))
{
    // $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
    $con = mysqli_connect('localhost', 'root', 'abcd1234','webassignment2');

    if(mysqli_connect_errno()) {
        $msg = "Database connection failed: ";
        $msg .= mysqli_connect_error();
        $msg .= " (" . mysqli_connect_errno() . ")";
        exit($msg);
    }

    // get the post records
    $email = $_POST['email'];
    $pass = $_POST['pass'];

    // check overlapping data
    $check = "SELECT userPassword FROM userinformation where emailAddress='$email'";
    $result = mysqli_query($con, $check);
    $found = mysqli_num_rows($result);
    
    if ($found == 0) {
        echo "<script>alert('Invalid account. Please check your ID');</script>";
    } else {
        $row = mysqli_fetch_assoc($result);
        if ($pass != $row['userPassword']) {
            echo "<script>alert('Password is wrong. Please check password');</script>";
        } else {
            $delete = "DELETE FROM userinformation where emailAddress='$email'";
            $deleteQuery = mysqli_query($con, $delete);
            echo "<script>alert('Your account is deleted. See you again!');</script>";

        }
    }
    echo "<script>window.location.href = '../signoff.html';</script>";
}
?>