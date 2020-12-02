//TODO: met prompt bezoeker info opslaan in object persoon
  let bezoeker = {
   
   voornaam: prompt("Wat is je voornaam?"),
   achternaam: prompt("wat is je achternaam"),
  
   leeftijd: prompt ("wat is je leeftijd"),

}

console.log(bezoeker);

let stemGerechtigheid= 18;  
let oranjekleur= 16;
let blauwkleur= 17;
let groenkleur= 19;
let ramdomcolor= 0;


document.querySelector("h1").innerHTML = bezoeker.voornaam + " " + bezoeker.achternaam;
document.querySelector("#voornaam").innerHTML = bezoeker.voornaam;
document.querySelector("#achternaam").innerHTML = bezoeker.achternaam;
document.querySelector("#leeftijd").innerHTML = bezoeker.leeftijd;
document.querySelector("#email").innerHTML = bezoeker.email;
GIT


if (bezoeker.leeftijd==18){  
   document.querySelector("body").style.backgroundColor="groen";
}
if (bezoeker.leeftijd==oranjekleur){
   document.querySelector("body").style.backgroundColor="orange";
}
if (bezoeker.leeftijd==17){
   document.querySelector("body").style.backgroundColor="blue";
}
if (bezoeker.leeftijd==19){
   document.querySelector("body").style.backgroundColor="green";
   console.log("de color is green");
}

if (bezoeker.leeftijd==""){
   document.querySelector("body").style.backgroundColor="red";
}






