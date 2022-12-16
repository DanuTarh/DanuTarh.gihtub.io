//BAKGRUNDSFÄRÄNDRING
let dropdown = document.querySelector('select');
dropdown.addEventListener('change', function ()
 {
    const color = this.value;
    document.body.style.background = color;
    //STORE FÄRGEN I LOCALSTORAGE
    var userColor = document.getElementById('colorID').value;
    localStorage.setItem('storedValue', document.body.style.backgroundColor = userColor);
})


//HÄMTAR BAKGRUNDSFÄRGEN FRÅN STORAGE
document.getElementById('colorID').value = localStorage.storedValue;
document.body.style.backgroundColor = localStorage.storedValue;
  

//text färgändring
document.getElementById(`rangeRed`).addEventListener(`input`,changeColor);
document.getElementById(`rangeGreen`).addEventListener(`input`,changeColor);
document.getElementById(`rangeBlue`).addEventListener(`input`,changeColor);
function changeColor() {

    let red = document.getElementById(`rangeRed`).value;
    let green = document.getElementById(`rangeGreen`).value;
    let blue = document.getElementById(`rangeBlue`).value;
    let colour = `rgb(` + red + `,` + green + `,` + blue + `)`;
    document.body.style.color = colour;
}





















  

