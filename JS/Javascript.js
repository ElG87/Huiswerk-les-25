//Welkomstbericht wanneer de pagina gaat laden..
window.alert("Welkom op mijn pagina!");

var school = document.querySelector("#school");

school.setAttribute("href", "https://nha.nl");

var leefTijd = 35;
var woonPlaats = "Rotterdam";
var voorNaam = "Elly";
var achterNaam = " Gomes";
var naam = voorNaam + achterNaam;

document.getElementById ("text")
.innerHTML = "Mijn naam is: " + naam;

document.getElementById ("leeftijd")
.innerHTML = "Ik ben " + leefTijd + " jaar oud" ;

document.getElementById ("woonplaats")
.innerHTML = "Ik woon in : " + woonPlaats;

//Antwoord op de vraag wat op de knop staat
function drukknop() {
    window.alert ("Een dikke 10!");
}

//H4 titel veranderd van: "Hieronder kun je zien wie ik ben.." naar "Wie ben ik"
document.querySelector ("h4")
.innerHTML = "Wie ben ik";

//Tekst verstoppen en tonen
$( document).ready(function() {
$("#verberg").click(function() {
$(".fs-5").hide();
});
$("#toon").click(function() {
$(".fs-5").show();
});
});

//achtergrond kleur van voorstel veranderen
$(document).ready(function(){
  $("#voorstel").hover(function(){
    $(this).css("background-color", "lightblue");
    }, function(){
    $(this).css("background-color", "white");
  });
});
