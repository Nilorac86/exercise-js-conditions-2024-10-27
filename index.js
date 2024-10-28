//################# Lätta ##################

//1.
/* let firstName = prompt ("Vad heter du?");
console.log ("Hej" + " " + firstName + ", " + "välkommen!"); */


//2.
/* let word1 = prompt ("Skriv in ett valfritt ord.");
let word2 = prompt ("Skriv in ett valfritt ord till");

if (word1 < word2){
    console.log (word1 + " kommer före i alfabetet.");
} else {
    console.log (word2 + " kommer före i alfabetet.")
} */


//3.
 /* let age = prompt ("Hur gammal är du?");

if (age >= 18){
    console.log ("Du är vuxen.");
} else {
    console.log ("Du är fortfarande minderårig.");
}  */


//4.
/* let animal = prompt ("Gissa vilket djur jag tänker på.");
    
if (animal === "häst" || color === "Häst"){
    console.log ("Du gissade rätt!");
} else {
    console.log ("Du gissade fel. Försök igen!");
} */

//############### Medelsvåra ###############

//5.
 /* let color = prompt ("Vilken är din favoritfärg?");

 if (color === "Röd" || color === "röd"){
    alert ("Rött är sött");
 } else if (color === "Grön" || color === "grön"){
    alert ("Grönt är skönt");
 } else if (color === "Blå" || color === "blå"){
    alert ("Blått är flått");
 } else {
    alert ("Din favoritfärg är inte röd, blå eller grön");
 }  */


//6.
/* let testresult = prompt ("Skriv in ditt provresultat 0-100 och se om du blev godkänd eller underkänd.");

if (testresult >= "50"){
    alert ("Du är godkänd.");
} else { 
    alert ("Du är underkänd.");
} */


//7.
/* let weather = prompt ("Vad är det för väder idag? Är det soligt, regnigt eller molnigt?");

if (weather === "soligt" || weather === "Soligt" ){
    alert ("Vad härligt med sol, passa på att vara ute.");
} else if (weather === "regnigt" || weather === "Regnigt" ){
    alert ("Det regnar idag, då kan du åka till ett badhus.");
} else { (weather === "molnigt" || weather === "Molnigt" )
    alert ("Idag är det molnigt! Bra väder att putsa fönserna i.");
}
 */


//8.
/* let language = prompt ("Vilket språk pratar du?");

if (language === "Svenska" || language === "svenska"){
    alert ("Hej, vad roligt att du pratar svenska.");
} else if (language === "Engelska" || language === "engelska"){
    alert ("Hello, nice to see you!.");
} else {
    alert ("I'm sorry I don't speak that language.");
}
 */

//9.
/* let number = prompt ("Skriv in ett tal.");

if (number % 5 === 0 ){
    alert (number + " är en multipel av 5.");
} else {
    alert ("Ditt tal är inte en multipel av 5");
} */



//10.
/*   let answer = confirm ("Vill du gå ut?");

  if (answer == true) {
    confirm ("Du vill gå ut.");
  } else {
    confirm ( "Du vill hellre stanna inne.");
  }  */
 

//########## Svåra ###########

//11.
/* Siffra eller bokstav?
Låt användaren skriva in ett tecken. Kolla om det är en siffra 
eller en bokstav och skriv ut resultatet.
 */


let object = prompt ("Skriv in en siffra eller en bokstav.");

if (object){
    alert ("Du skrev in siffran " + object);
} else if (object){
    alert("Du skrev in bokstaven " + object);
}

/* 


//12.
/* let firstWord = prompt ("Skriv in första ordet.");
let secondWord = prompt ("Skriv in andra ordet.");
let thirdWord = prompt ("Skriv in det tredje ordet.");

let longestWord = firstWord;

if (secondWord.length > longestWord.length ){
    longestWord = secondWord;
} if (thirdWord.length > longestWord.length ){
    longestWord = thirdWord;
}

alert ("Det längsta ordet är " + longestWord); */


//13.
/* let password = prompt ("Ange ett lösenord.");

const lenghtPassword = password.length >= 8;
const digit = /[0-9]/;

if (lenghtPassword && digit){
    alert ("Detta lösenord är godkänt");
} else {
    alert ("Lösenordet måste vara 8 tecken långt, samt innehålla en siffra.");
}  */


/*
//14.
let ageSecond = prompt("Skriv in din ålder.");

if (ageSecond >=65){
    alert ("Pensionär 65+ år.");
}else if (ageSecond >= 20) {
    alert ("Vuxen 20-64 år.");
}else if (ageSecond >= 13) {
    alert ("Tonåring 13-19 år.");
}else if(ageSecond <= 12){
    alert ("Barn 0-12 år.");
}
*/


//15.
/* const option = confirm ("Vill du bada tryck på ok.\nVill du hellre cykla tryck på avbryt.");


if (option == true){
    alert ("Skynda dig att packa badväskan!");
} else {
    alert ("Hämta cyklen och njut.")
} */

