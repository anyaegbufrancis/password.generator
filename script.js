
//Main page pop up function. Triggered by a 'click' function on 'Generate Password' Area//
function openForm() {
  document.getElementById("myForm").style.display = "flex";
}

//Declare global variable for password strength and constants for others//
var passwordStrenght = document.getElementById("popBtn");
const upperCaseLetters = document.getElementById("uppercase");
const lowerCaseLetters = document.getElementById("lowercase");
const numbersIncluded = document.getElementById("numbers");
const symbolsIncluded = document.getElementById("symbols");
var resetForm = document.getElementById("resetPassword");
var cancelForm = document.getElementById("cancel");
//console.log(resetForm)
//console.log(upperCaseLetters.checked)

//Function that evaluates the selection status//
function confirmUppercase() {
  if (upperCaseLetters.checked);
  return arrayForParameters(65, 90);
}
function confirmLowercase() {
  if (lowerCaseLetters.checked);
  return arrayForParameters(97, 122);
}
function confirmNumbers() {
  if (numbersIncluded.checked);
  return arrayForParameters(48, 57);
}
function confirmSymbols() {
  if (symbolsIncluded.checked);
  return (arrayForParameters(33, 47)
    .concat(arrayForParameters(58, 64),
      arrayForParameters(91, 96),
      arrayForParameters(123, 126)));
}
//Function that displays selected input into an array//
function displaySelectedArrays() {
  console.log(confirmUppercase());
  console.log(confirmLowercase());
  console.log(confirmNumbers());
  console.log(confirmSymbols());
}
//displaySelectedArrays();

//----Fisher Yates Randomizer- special function that reliably randomizes arrays found on internet---//
//Ref: https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/---//
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//Function that displays Fisher Yates randomized selection: Displays each array but randomized//
function displayRandomizedArrays() {
  console.log(shuffle(confirmUppercase()));
  console.log(shuffle(confirmLowercase()));
  console.log(shuffle(confirmNumbers()));
  console.log(shuffle(confirmSymbols()));
}
//displayRandomizedArrays();

//Function to concatenate all arrays into 1 a single array & randomize the result ->//
//--------  Expand the span to achieve more than 94 possibilities-------------------//
//Up to 128 Upper Case in Array//
function aggregateUpperCase() {
  if (upperCaseLetters.checked){
    return shuffle((confirmUppercase().concat(confirmUppercase(), confirmUppercase(), confirmUppercase(), confirmUppercase())));
  } else{
    return [];
  }
}
//console.log(aggregateUpperCase())

//Up to 128 Lower Case in Array//
function aggregateLowerCase() {
  if (lowerCaseLetters.checked) {
    return shuffle((confirmLowercase().concat(confirmLowercase(), confirmLowercase(), confirmLowercase(), confirmLowercase())));
  } else {
    return [];
  }
}
//console.log(aggregateLowerCase()) 

//Up to 128 Numbers in Array//
function aggregateNumbers() {
  if (numbersIncluded.checked) {
    return shuffle((confirmNumbers().concat(confirmNumbers(), confirmNumbers(), confirmNumbers(), confirmNumbers(), confirmNumbers(), 
    confirmNumbers(), confirmNumbers(), confirmNumbers(), confirmNumbers(), confirmNumbers(), confirmNumbers(), confirmNumbers())));
  } else {
    return [];
  }  
}
//console.log(aggregateNumbers())
//Up to 128 Symbols in Array//
function aggregateSymbols() {
  if (symbolsIncluded.checked) {
    return shuffle((confirmSymbols().concat(confirmSymbols(), confirmSymbols(), confirmSymbols())));
  } else {
    return [];
  }    
}
//console.log(aggregateSymbols())

//Randomizes and concats the aggregat to further make the selections arbitrary//
function aggregateArray() {       
  return shuffle((aggregateUpperCase().concat(aggregateLowerCase(), aggregateNumbers(), aggregateSymbols())));
}
//console.log(aggregateArray());
//shuffles the elements in the array to using Fisher Yates//
//console.log(shuffle(aggregateArray()));


//Establishes error control function for future updates//




//Extract uppercase, lowercase, number and symbol array from ASCII// 
//--------using arrayForParameters function Codes----------------//
//-----------Ref: http://www.asciitable.com----------------------// 

//ASCII iterator function//
function arrayForParameters(lowest, highest) {
  var arrayContainer = [];
  for (var i = lowest; i <= highest; ++i) {
    arrayContainer.push(String.fromCharCode(i));
  }
  return arrayContainer;
}

//Main Project aggregator function triggered by a 'click' event on identified HTML element//
passwordStrenght.addEventListener("click", (function (e) {
  //Prevent default page refresh//
  e.preventDefault();
  var passwordLength = "";
  var readPassword = document.getElementById("passwordLength").value;
  if ((readPassword >= 8 && readPassword <= 128) && ((upperCaseLetters.checked) || (lowerCaseLetters.checked)
  || (numbersIncluded.checked) || (symbolsIncluded.checked))) {
    passwordLength = parseInt(readPassword, 10);
    //alert("You chose password Length of: " + passwordLength);
  var passwordFromArray = shuffle(aggregateArray()).slice(0, passwordLength);
  //alert("Your random password with array comma: \n" + passwordFromArray);
  var passwordWithoutComma = passwordFromArray.join("");
  //alert("Your actual random password is below. Please copy from clipboard and use: \n" + passwordWithoutComma)
  console.log(document.getElementById("password").textContent = passwordWithoutComma);
  document.getElementById("password").textContent = passwordWithoutComma;
  closeForm();
  }  else {
    console.log(document.getElementById("password").textContent = "Please select qualifying parameter!");
      alert("Please select qualifying parameters!")
  }
}));

//Copy to clipboard function//
function copyFunction() {
  var copyText = document.getElementById("password");
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Password copied to clipboard: " + copyText.value);
}
//Function to close pop up page//
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
//-----Form Cancelling Function-----//
cancelForm.addEventListener("click", (function (e) {
  closeForm();
}))

//Function to reset generated password//
resetForm.addEventListener("click", (function (close) {
  //Prevent default page refresh//
  location.reload()
  }
))