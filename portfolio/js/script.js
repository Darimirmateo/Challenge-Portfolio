
  let bezoeker = {
     
   
   naam: prompt("Wat is je naam?"), 
   leeftijd: prompt ("wat is je leeftijd"),
  
}

console.log(bezoeker);



document.querySelector("h1").innerHTML = bezoeker.naam;





if (bezoeker.leeftijd==18){  
   document.querySelector("h1").style.backgroundColor="green";
   console.log("de color is green")
}


if (bezoeker.leeftijd==""){
   document.querySelector("h1").style.backgroundColor="red";
}








 

