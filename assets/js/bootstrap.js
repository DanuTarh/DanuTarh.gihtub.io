/*togglar med at visa resten av menyn och dölja den när man trycker på hamburgermenyn */
function Navbar() {
    var x = document.getElementById("Topnav");
    if (x.className === "topnavbar") {
        x.className += " responsive";
    } else { 
        x.className = "topnavbar";
    }
}