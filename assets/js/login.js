/* Site-wide JS i den här filen (t.ex. huvudmenyn) */

console.log('main.js init'); // För att se att skriptet laddats in
function minFunktion()
{
    console.log("Funktionen kördes!");
}



function login()
 {
    let firstname = document.querySelector("#firstname").value;
    let lastname = document.querySelector("#lastname").value;
    var inputs = [];
    var result = document.getElementById("result");
    inputs[0] = document.getElementById("firstname");
    inputs[1] = document.getElementById("lastname");
    
    for( i =0; i < inputs.length; i++)
     {

    if ( inputs[i].value === "" )
    {
        document.getElementById("error").innerHTML = "Du måste skriva ditt förnamn samt efternamn!"; 
        document.getElementById("error").style.color = "red"; 
        document.getElementById("error").style.display = "block"; 
    } 
    
    else
     {
        firstname = firstname.slice(0, 1), firstname = firstname.toLowerCase();
        lastname = lastname.toLowerCase(), lastname = lastname.slice (0, -1);
        firstname = lastname + firstname;
        document.getElementById("error").innerHTML = ""; 
        document.getElementById("error").style.display = "none";
        document.querySelector('#hello-output').innerText = `Välkommen ${firstname}!, du blir förd till våra hemsidor om 5 sekunder`; 
        setTimeout(myURL, 5000);
        result.innerHTML = "confused";
    }
    

function myURL () 
{
    window.location.replace("./pages/Home.html")
}
 }}