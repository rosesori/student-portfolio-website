function lightMode(){
    var pageTheme = document.getElementById("wholePage");
    var pageThemeStyle = "background-color:#cacaca; color: #2f2f2f;";
    var links = document.getElementsByTagName("a");
    var linksStyle = "#8987CD";

    console.log(pageThemeStyle);
    console.log(linksStyle);

    // Set styles
    pageTheme.style = pageThemeStyle;
    for(var i=0;i<links.length;i++) // Change all links on page
    {
        if(links[i].href)
        {
            links[i].style.color = linksStyle;
        }
    }

    // Save settings
    localStorage.setItem("pageTheme", "light");
}

function darkMode(){
    var pageTheme = document.getElementById("wholePage");
    var pageThemeStyle = "background-color: #2f2f2f; color: #cacaca;";
    var links = document.getElementsByTagName("a");
    var linksStyle = "#D5B4C4";

    console.log(pageThemeStyle);
    console.log(linksStyle);

    // Set styles
    pageTheme.style = pageThemeStyle;
    for(var i=0;i<links.length;i++) // Change all links on page
    {
        if(links[i].href)
        {
            links[i].style.color = linksStyle;
        }
    }

    // Save settings
    localStorage.setItem("pageTheme", "dark");
}

// Keep theme whenever page is reloaded
window.onload = function(){
    if (localStorage.getItem("pageTheme") == "light") {
        lightMode();
    } else if (localStorage.getItem("pageTheme") == "dark") {
        darkMode();
    }
}
