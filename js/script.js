function openMenu(el)
{
    //alert("open menu");
    var button = document.getElementById("open-menu-button")
    var menuPopup = document.getElementById("menu-popup");
    var body = document.getElementsByTagName("body")[0];
    body.style.overflowY = "hidden";
    menuPopup.style.display = "block";
    menuPopup.style.animationName = "menu-open";
    menuPopup.style.animationDuration = "0.5s";
    menuPopup.style.animationFillMode = "forwards";
    button.setAttribute("src", "img/button-close.png");

    el.addEventListener("click", function(){closeMenu(el);});
}

function closeMenu(el)
{
    //alert("open menu");
    var button = document.getElementById("open-menu-button")
    var menuPopup = document.getElementById("menu-popup");
    var body = document.getElementsByTagName("body")[0];
    body.style.overflowY = "visible";
    menuPopup.style.animationName = "menu-close";
    menuPopup.style.animationDuration = "0.5s";
    menuPopup.style.animationFillMode = "forwards";
    button.setAttribute("src", "img/button-left.png");

    el.addEventListener("click", function(){openMenu(el);});
}