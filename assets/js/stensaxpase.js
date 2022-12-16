const ssp = [
    { Name: "Sten", W: "Sax", L: "Påse" },
    { Name: "Sax", W: "Påse", L: "Sten" },
    { Name: "Påse", W: "Sten", L: "Sax" },
];

//sspknapp
for (item of ssp) {
    document.querySelector("#ssp").innerHTML += 
    `<input id="${item.Name}" type="button" value="${item.Name}">`
}


//Spellogiken
document.querySelectorAll(`#ssp > input`).forEach((elem) => {
    elem.addEventListener('click', () => {
        const random = ssp[Math.floor(Math.random() * ssp.length)];
        console.log("Datorn valde " + random.Name)
        ssp.forEach(item => {
            if (elem.value == item.Name) {
                if (item.W === random.Name)
                {
                    document.getElementById("svar").innerHTML = "You won"; 
                }
                else if (item.L === random.Name) 
                {
                    document.getElementById("svar").innerHTML = "You lost"; 
                }
                else 
                { 
                    document.getElementById("svar").innerHTML = "Draw"; 
                }
            }
        })
    })
});

