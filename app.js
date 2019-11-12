"use strict"

    
$(document).ready(function () {
    $("#search").click(function () {
        console.log("Test");
        $.get("http://localhost:8080/superheroes.php", function (data) {
            echo ($("p").innerHTML= $data);
        });

});
        
});





