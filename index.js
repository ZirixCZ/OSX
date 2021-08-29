function dropDownFunc() {
    document.getElementById("navbar").classList.toggle("show");
}
window.onlink = function(event) {
    if (!event.target.matches("dropbtn")) {
        var dropdowns = document.getElementsByClassName("navbar");
        var i;
        for (i = 0; i< dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                open.openDropdown.classList.remove("show");
            }
        }
    }
}
function openLink() {
    window.open("https://discord.lol/osx");
}