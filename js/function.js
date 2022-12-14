function menu() {
    if (screen.width > 684) {
        window.location.href = "/";
        return 0;
    }
    var x = document.getElementById("logo-menu").style;
    if(x.display=="")   x.display = "flex";
    else    x.display = "";
};