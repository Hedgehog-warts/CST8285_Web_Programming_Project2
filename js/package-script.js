function searchFunction() {
    let searchPackages = document.getElementById('searchBar').value;
    searchPackages = searchPackages.toLowerCase();
    console.log(searchPackages)
    let packageResults = document.getElementsByClassName("search-packageTitle");

    for (i = 0; i < packageResults.length; i++) {
        if (!packageResults[i].innerHTML.toLowerCase().includes(searchPackages)) {
            packageResults[i].style.display = "none";
        }
        else {
            packageResults[i].style.display = "list-item";
        }
    }

}

function filterByProvince(selectedProvince){
    let filterProvinces = document.getElementById('package-dropDown').value;
    let packageResults = document.getElementsByClassName("search-packageTitle");

    for (i = 0; i < packageResults.length; i++) {
        if (!packageResults[i].innerHTML.toLowerCase().includes(filterProvinces)) {
            packageResults[i].style.display = "none";
        }
        else {
            packageResults[i].style.display = "list-item";
        }
    }


}