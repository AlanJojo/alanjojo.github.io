function menu() {
    if (screen.width > 684) {
        window.location.href = "/";
        return 0;
    }
    var x = document.getElementById("logo-menu").style;
    if(x.display=="")   x.display = "flex";
    else    x.display = "";
};

function search_post() {
    var search_string, items, set;
    search_string = document.getElementById('search_post').value.toLowerCase();
    items = document.getElementsByClassName('post-item');
    for (i = 0; i < items.length; i++) {
        if (!items[i].getElementsByClassName('post-title')[0].innerHTML.toLowerCase().includes(search_string))
            items[i].style.display="none";
        else
            items[i].style.display="list-item";
    }

    set = document.getElementsByClassName('posts-group');
    for (i = 0; i < set.length; i++) { //Each group
        let x = 0;
        let group_items = set[i].getElementsByClassName('post-item');
        for (j = 0; j < group_items.length; j++) {
            if (group_items[j].style.display!="none") {
                x = 1;
                break;
            }
        }
        if (x==0)
            set[i].style.display="none";
        else
            set[i].style.display="block";
    }
}