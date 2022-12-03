<!-- Assignement 2 Group 7_Rong Ran -->
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
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./css/style.css">
    <link rel="stylesheet" type="text/css" href="./css/signup-style.css">
    <script src="./js/login-script.js" defer></script>
    <script src="./js/script.js" defer></script>
    <title>login Page</title>
</head>
<!-- starting body tag -->
<header class="stickyHeaderNav">
    <nav id="headerNav" class="headerNav">
        <div class="companyName">
            <img id="hiddenLogo" src="./img/nav/gittour_logo_transparent.png" alt="gittourlogo"><span
                class="hiddenLogoName"> GitTour</span>
            <img id="headerLogo" src="./img/nav/gittour_logo_transparent.png" alt="gittourlogo"><span
                class="companyLogoName"> GitTour</span>
            <ul class="logoList">
                <a href="index.html">
                    <li class="logoListOption">
                        <p>Home</p>
                    </li>
                </a>
                <a href="package.html">
                    <li class="logoListOption">
                        <p>Package</p>
                    </li>
                </a>
                <a href="individual.html">
                    <li class="logoListOption">
                        <p>Individual Travel</p>
                    </li>
                </a>
                <a href="blog.html">
                    <li class="logoListOption">
                        <p>Blog</p>
                    </li>
                </a>
                <a href="contactus.html">
                    <li class="logoListOption">
                        <p>Contact Us</p>
                    </li>
                </a>
                <a href="login.html">
                    <li class="logoListOption">
                        <p>Log In</p>
                    </li>
                </a>
            </ul>
        </div>
        <div class="topMenu">
            <a href="index.html">Home</a>
            <a href="package.html">Package</a>
            <a href="individual.html">Individual Travel</a>
            <a href="blog.html">Blog</a>
            <a href="contactus.html">Contact Us</a>
            <a href="login.html">Log In</a>
        </div>
    </nav>
</header>
<!-- starting main tag -->
<main>
    <div class="gtwelcome">
        <h1>Log in to your account</h1>
        <div class="noDot">
            <ul>
                <li>Welcome back! Please enter your details.</li>

            </ul>
        </div>
    </div>
    <form action="./.html" method="get" id="gtregistration" name="gtregistration" onsubmit="return validate();">
        <!-- Write the validate function for this form. -->
        <div class="gtformcontainer">
            <div class="gtextfield">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" placeholder="Enter your email">
                <small></small>
            </div>

            <div class="gtextfield">
                <label for="pass">Password</label>
                <input type="password" name="pass" id="pass" placeholder="Enter your password">
                <small></small>
            </div>
            <div class="btn">
                <button type="submit" id="signBtn2">Log in</button>
                <br>
                <button type="reset" id="restBtn">Reset</button>
            </div>
            <div class="noDot">
                <ul>
                    <li> Don't have an account? <a href="./signup.html">Sign Up</a></li>
                </ul>

            </div>
        </div>
    </form>

</main>
<!-- starting footer tag -->
<footer>
    <nav class="footerNav">
        <hr class="bottomLine">
        <div class="indexContainer">
            <img class="footerLogo" src="./img/nav/gittour_logo_transparent.png" alt="gittourlogo">
            <div class="siteIndex">
                <h4>GitTour</h4>
                <p>This website was designed by GitTour</p>
                <a class="signPage" href="signup.html"><span>Sign Up&nbsp;</span></a>
                <a class="signPage" href="signoff.html"><span>Sign Off</span></a>
            </div>
        </div>
    </nav>
    <a id="goToTopID" class="goToTop" href="#headerNav"><img src="./img/nav/uparrow.png" alt="uparrow"></a>
</footer>

</body>

</html>