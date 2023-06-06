var myFirstName = "Andi";
var myLastName = "Brühl";
var myAge = 34;
var myHobbies = ["Computer/Programmieren", "Klemmbausteine", "Schlafen"];

const ERWACHSEN_AB = 18;

function printFullName() {
    var fullName = myFirstName + " " + myLastName;
    console.log(fullName);
  }
  
  function isAdult() {
    return myAge >= ERWACHSEN_AB;
  }
  
  function getFavoriteHobby() {
    return myHobbies[0];
  }
  
  printFullName();
console.log(isAdult());
console.log(getFavoriteHobby());

alert("Du heißt " + myFirstName + " " + myLastName + ". Dein liebstes Hobby ist " + myHobbies[0] + ". Du bist " + myAge + " Jahre alt. \n");
alert("Dadurch ist die Bedingung das Du volljährig bist erfüllt! \n");
alert("All diese Informationen kannst du über CTRL+SHFT+J erneut abrufen!")