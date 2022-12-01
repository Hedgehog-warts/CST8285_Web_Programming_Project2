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

    // check overlapping data
    $check = "SELECT id FROM subscription where subscription_email=\"$email\"";
    $result = mysqli_query($con, $check);
    $found = mysqli_num_rows($result);
    if ($found == 0) {
        $sql = "INSERT INTO subscription (subscription_email) VALUES ('$email')";
        $rs = mysqli_query($con, $sql); 
    } 
}
?>

<html>
    <body>  
    </body>
    <?php 
    echo "<script>
    alert('Thank you for subscribing GitTour! we will send you our events and promotions soon.');
    window.location.href='../blog.html';
    </script>";?>
</html>
