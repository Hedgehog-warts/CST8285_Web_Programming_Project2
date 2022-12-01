function indisearch() {
  var input, filter, table, text;
  input = document.getElementById("searchbar");
  filter = input.value.toUpperCase();
  table = document.getElementsByClassName("packages");
  for (i = 0; i < table.length; i++) {
    text = table[i].innerText;
    if (text.toUpperCase().indexOf(filter) > -1) {
      table[i].style.display = "";
    } else {
      table[i].style.display = "none";
    }
  }
  window.scrollTo(0, 650);
}

function filterByProvince(province){
  let hide = document.getElementsByClassName("packages");
  let show = document.getElementsByClassName(province);
  
  for (i=0; i<hide.length; i++){
    hide[i].style.display = "none";
  }
  for (i=0; i<show.length; i++){
    show[i].style.display = "";
  }

  window.scrollTo(0, 650);
    
}

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
