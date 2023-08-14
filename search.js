function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr"); 
    for (i = 0; i < tr.length; i++) {

      td = tr[i].getElementsByTagName("td")[1];
      
      if (td) {
        txtValue = td.textContent || td.innerText;
        table.style.display = "";
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
   

  }
}

function cfun(){
    var table;
    table = document.getElementById("myTable");
    table.style.display = "none";
}