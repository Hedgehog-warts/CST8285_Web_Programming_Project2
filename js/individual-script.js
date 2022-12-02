/* Assignement 2 Group 7_PO JUI, FENG */

// search function for search bar
function indisearch() {
  var input, filter, table, text;
  input = document.getElementById("searchbar");
  filter = input.value.toUpperCase(); //no restriction for upper or lowercase. 
  table = document.getElementsByClassName("packages");
  for (i = 0; i < table.length; i++) {
    text = table[i].innerText;
    if (text.toUpperCase().indexOf(filter) > -1) {
      table[i].style.display = "";
    } else {
      table[i].style.display = "none";
    }
  }
  window.scrollTo(0, 650); //after clicking search, scroll to certain position
}

//elements filter 
function filterByProvince(province){
  let hide = document.getElementsByClassName("packages");
  let show = document.getElementsByClassName(province);
  
  for (i=0; i<hide.length; i++){
    hide[i].style.display = "none";
  }
  for (i=0; i<show.length; i++){
    show[i].style.display = "";
  }

  window.scrollTo(0, 650); //after clicking search, scroll to certain position
    
}

//show all elements
function showAll(){
  let show = document.getElementsByClassName("packages");
  for (i=0; i<show.length; i++){
    if (show[i].style.display === "none"){
      show[i].style.display = "";
    } else {
      continue;
    }
  }

  window.scrollTo(0, 650);
}
