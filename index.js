var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImages1="dice"+randomNumber1+".png";
var randomSource1="images/"+randomImages1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSource1);


 var randomNumber2=Math.floor(Math.random()*6)+1;
 var randomImages2="images/dice"+randomNumber2+".png";
 document.querySelectorAll("img")[1].setAttribute("src",randomImages2);

if (randomNumber1>randomNumber2){
 document.querySelector("h1").innerHTML="Player 1 win";
}
 else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 win";
   }
   else { 
    document.querySelector("h1").innerHTML="Draw";
   }