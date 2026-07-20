window.onload = function () {

    document.getElementById("brideCard").onclick = function () {

        localStorage.setItem("startSide", "bride");
        localStorage.removeItem("visitedBride");

        window.location.href = "bride.html";
    };

    document.getElementById("groomCard").onclick = function () {

        localStorage.setItem("startSide", "groom");
        localStorage.removeItem("visitedBride");

        window.location.href = "groom.html";
    };

};