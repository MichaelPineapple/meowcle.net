function toggleTheme()
{
    let nextTheme = "light";
    if (document.getElementById("toggle").checked == true) nextTheme = "dark";
    document.getElementById("themestyle").href = "style/" + nextTheme + ".css";
}
