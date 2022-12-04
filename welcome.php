<!-- Assignement 2 Group 7_Doyoung Kim -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" type="text/css" href="./css/style.css">
    <link rel="stylesheet" type="text/css" href="./css/welcome-style.css">

    <script src="./js/script.js" defer></script>
    <title>GitTour - Welcome!</title>
</head>
<body>
    <!-- header -->
    <header class="stickyHeaderNav">
        <nav id="headerNav" class="headerNav">
            <div class="companyName">
                <img id="hiddenLogo" src="./img/nav/gittour_logo_transparent.png" alt="gittourlogo">
                <span class="hiddenLogoName"> GitTour</span>
                <img id="headerLogo" src="./img/nav/gittour_logo_transparent.png" alt="gittourlogo">
                <span class="companyLogoName"> GitTour</span>
                <div class="buttonLists">
                    <button class="buttonLinks" 
                        onclick="redirectLink('./index.html')">Home</button>
                    <button class="buttonLinks" 
                        onclick="redirectLink('./package.php')">Package</button>
                    <button class="buttonLinks" 
                        onclick="redirectLink('./individual.html')">Individual Travel</button>
                    <button class="buttonLinks" 
                        onclick="redirectLink('./blog.html')">Blog</button>
                        <button class="buttonLinks" 
                        onclick="redirectLink('./contactus.html')">Contact Us</button>
                    <button class="buttonLinks" 
                        onclick="redirectLink('./login.html')">Log In</button>
                </div>
            </div>
            <div class="topMenu">
                <a href="index.html">Home</a>
                <a href="package.php">Package</a>
                <a href="individual.html">Individual Travel</a>
                <a href="blog.html">Blog</a>
                <a href="contactus.html">Contact Us</a>
                <a href="login.html">Log In</a>
            </div>
        </nav>
    </header>

    <!-- welcome message -->
    <?php 
        echo "
        <div class='welcomeDiv'>
            <h1>$_POST[welcomename], welcome to GitTour!</h1>
            <p>Please log in with your new account</p>
            <a href='./login.html'><button class='goToLogIn' type='button'>Log in</button></a>
        </div>"
    ?>
    
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