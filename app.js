"use strict";

window.onload = () => {
    let search = this.document.getElementById("search");

    this.$("Sform").submit(function (e) {
        e.preventDefault();
    });

    search.addEventListener("click", () => {
        this.$.ajax({
            type: "GET",
            url: "superheroes.php",
            data: this.$("#Sform").serialize(),
            success: function (data) {
                let result = document.getElementById("result");
                result.innerHTML = data;
            },
            dataType: "html"
        });
    });
};