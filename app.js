"use strict"

    
$(document).ready(function () {
    $("#search").click(function () {
        console.log("Test");
        $.get("http://localhost:8080/superheroes.php", function (superheroes) {
            alert(superheroes);
        });
    });
});










/*
 var search = document.getElementById("search");
 search.onclick = ()=> {
   console.log("check123");
   var request = new XMLHttpRequest();
   request.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
           var myJSON = JSON.parse(this.responseText);
           document.getElementById("div-container").innerHTML = myJSON;
           alert(myJSON);
       }
   };
   request.open("GET", "http://localhost:8080/superheroes.php", true);
   request.send();
    
     }

     
*/
 
