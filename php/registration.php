<form action="../welcome.php" method="post" id="welcome" name="welcome">
    <input type="text" name="welcomename" value=<?php echo "$_POST[login]";?>>
</form>
<script type="text/javascript">
    document.getElementById('welcome').submit();
</script>
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
    $userName = $_POST['login'];
    $password = $_POST['pass'];
    $province = $_POST['Sort1'];
    $concept = $_POST['Sort2'];

    // database insert SQL code
    

    $sql = "INSERT INTO userinformation (emailAddress, userName, userPassword, preferredProvince, travelConcept)
            VALUES ('$email', '$userName', '$password', '$province', '$concept')";
    
    
    // insert in database 
    $rs = mysqli_query($con, $sql);
    if($rs) {
        echo "Contact Records Inserted";
    } else {
        echo "Are you a genuine visitor?";
    }
     
}
?>