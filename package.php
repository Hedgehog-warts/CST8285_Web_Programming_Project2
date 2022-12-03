<!-- Web Programming Assignment2 -->
<!-- Grace Ellis  -->

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
    <link rel="stylesheet" type="text/css" href="./css/package-style.css">
    <script src="./js/script.js" defer></script>
    <script src="./js/package-script.js" defer></script>

    <title>Packages</title>
</head>

<body>
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
                    <a href="package.php">
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
                <a href="package.php">Package</a>
                <a href="individual.html">Individual Travel</a>
                <a href="blog.html">Blog</a>
                <a href="contactus.html">Contact Us</a>
                <a href="login.html">Log In</a>
            </div>
        </nav>
    </header>

    <div class="promotionPackage">
        <div class="slides">
            <h1 id="promotionTitle">Promotion Package1</h1>
            <div class="promoIMG promo1"></div>
                <h2>Banff National Park & Lake Louise</h2>
                <div class="heading">
                    <h3 class="size">Group Tour</h3>
                    <h3 class="price">$1,500</h3>
                </div>
                <p class="packageP">Experience Calgary's Banff National Park & Lake Louise. Take part in skiing and
                    snowboarding, go dogsledding, or
                    even visit the famous Banff hot springs. With this 12 day package, you will get to
                    stay at the Banff Aspen Lodge, go dogsledding, hiking, skiing and snowboarding. Included in this
                    packcage is 2 large rooms which can fit up to 4 people each. Meals and Wifi are included. </p>
        </div>

        <div class="slides hidden">
            <h1 id="promotionTitle">Promotion Package2</h1>
            <div class="promoIMG promo2"></div>
            <h2>Montreal Botanical Garden</h2>
            <div class="heading">
                <h3 class="size">Group Tour</h3>
                <h3 class="price">$150</h3>
            </div>
            <p class="packageP">The Montreal Botanical Garden is recognized as one of the biggest and most beautiful
                botanical gardens in the world! Come discover all sorts of plants on this relaxing tour, perfect for
                couples. This package includes full access tickets to the Botanical Gardens and a lunch at the
                Botanical Garden Restaurant.
            </p>
        </div>

        <div class="slides hidden">
            <h1 id="promotionTitle">Promotion Package3</h1>
            <div class="promoIMG promo3"></div>
            <h2>Rockies Premium Tour from Vancouver</h2>
            <div class="heading">
                <h3 class="size">Group Tour</h3>
                <h3 class="price">$1,800</h3>
            </div>
            <p class="packageP">Start and end in Vancouver! With the In-depth Cultural tour Rockies 
                Premium Tour from Vancouver (34 Seats), you have a 5 days tour package taking you through Vancouver, 
                Canada and 8 other destinations in Canada. Rockies Premium Tour from Vancouver (34 Seats) 
                includes accommodation in a hotel as well as an expert guide, meals, transport and more. </p>
        </div>
    </div>

    <div class="package-search">
        <input type="text" id="searchBar" name="searchBar" onkeyup="searchFunction()" placeholder="Search...">
        <button id="package-resetButton" type="reset">Reset</button>
        <div id="provinceDropDown">
            <label for="package-dropDown" id="package-dropDownLabel">Sort by Province</label>

            <select id="package-dropDown" name="package-provinceMenu"
                onchange="filterByProvince(document.getElementById('package-dropDown').value)">

                <option value="">None</option>
                <option value="Vancouver">Vancouver</option>
                <option value="Calgary">Calgary</option>
                <option value="Saskatchewan">Saskatchewan</option>
                <option value="Ottawa">Ottawa</option>
                <option value="Toronto">Toronto</option>
                <option value="Quebec City">Quebec City</option>
                <option value="Montreal">Montreal</option>
            </select>
        </div>
    </div>

    <ul>
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
    </ul>

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
