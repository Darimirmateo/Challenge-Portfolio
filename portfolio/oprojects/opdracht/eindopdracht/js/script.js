//TODO: met prompt bezoeker info opslaan in object persoon
  let bezoeker = {
   
   voornaam: prompt("Wat is je voornaam?"),
   achternaam: prompt("wat is je achternaam"),
   email: prompt("wat is je email"),
   leeftijd: prompt ("wat is je leeftijd"),
   woonplaats: prompt("wat is je woonplaats")
}

console.log(bezoeker);





document.querySelector("h1").innerHTML = bezoeker.voornaam + " " + bezoeker.achternaam;
document.querySelector("#voornaam").innerHTML = bezoeker.voornaam;
document.querySelector("#achternaam").innerHTML = bezoeker.achternaam;
document.querySelector("#woonplaats").innerHTML = bezoeker.woonplaats;
document.querySelector("#email").innerHTML = bezoeker.email;



if (bezoeker.leeftijd==18){  
   document.querySelector("body").style.backgroundColor="gold";
}
if (bezoeker.leeftijd==16){
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






