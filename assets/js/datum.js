//DATUM
const month = [" January"," February"," March"," April"," May"," June"," July"," August"," September"," October"," November"," December"];
setInterval(function ()
 {
    const nu = new Date();
    let name = month[nu.getMonth()];
    document.querySelector('#klocka').innerText = `
        Idag är det den ${nu.getDate()}${name} ${nu.getUTCFullYear()} kl ${nu.getHours()}:${nu.getMinutes()}:${nu.getSeconds()}
    `;
  let d = new Date();
  d.setDate(d.getDate() + ((1 + 7 - d.getDay()) % 7 || 7));
  d.setHours(0, 0, 0, 0);
  let distance = d - nu;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours1 = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes1 = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds1 = Math.floor((distance % (1000 * 60)) / 1000);
  if(d.getDay() >= 5 || document.querySelector("#weekday").value == "lördag" || document.querySelector("#weekday").value == "söndag") 
  alert('Weekend! kasinot öppnar om ' + days + "d " + hours1 + "h " + minutes1 + "m " + seconds1 + "s ");
}, 1000);

//LOGOUT

function myURL ()  
{
    window.location.replace("/Login.html")
}