
function openForm() {
  document.getElementById("myForm").style.display = "flex";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}






//----Function to Generate Password---//
function generatePassword (passLen, upperCase, lowerCase, numb, symb) {

  
//--Select ALL Special Characters from ASCII code--//
const passwordLength = document.getElementById("passwordLength");
const upperCaseLetters = document.getElementById("uppercase");
const lowerCaseLetters = document.getElementById("lowercase");
const numbersIncluded = document.getElementById("numbers");
const symbolsIncluded = document.getElementById("symbols");
const popupForm = document.getElementById('popBtn');
const finalPassword = document.getElementById("password")

//---Data Target Validation Fuction---//
function targetValidation () {
  console.log(passwordLength);
  console.log(upperCaseLetters);
  console.log(lowerCaseLetters);
  console.log(numbersIncluded);
  console.log(symbolsIncluded);
  console.log(popupForm);
  console.log(finalPassword);
}
//targetValidation()
//---ASCII Character Validation Fuction---//
function asciiValidation () {
  console.log (passLen);
  console.log (upperCaseArray);
  console.log (lowerCaseArray);
  console.log (numberArray);
  console.log (symbolArray);
}
asciiValidation()
//Function to pass Matched Parameters to iterator
const upperCaseArray = (arrayForParameters(65, 90))
const lowerCaseArray = (arrayForParameters(97, 122))
const numberArray = (arrayForParameters(48, 57))
const symbolArray = (arrayForParameters(33, 47)
                  .concat(arrayForParameters(58, 64))
                  .concat(arrayForParameters(91, 96))
                  .concat(arrayForParameters(123, 126)));


      
    //Function for event Listner that reads ALL relevant input on submission//
    popupForm.addEventListener('submit', e => {
      e.preventDefault()
      const passLen = passwordLength;
      const upperCase = upperCaseLetters.checked;
      const lowerCase = lowerCaseLetters.checked;
      const numb = numbersIncluded.checked;
      const symb = symbolsIncluded.checked;
      console.log(passLen)
      console.log(upperCase)
      console.log(lowerCase)
      console.log(numb)
      console.log(symb)
    })
    //Function to iterate through the ASCII characters//
function arrayForParameters (lowest, highest) {
  const newArray = []
  for (var i = lowest; i<=highest; i++) {
    newArray.push(i)
    }
   return newArray
}



passwordLength.addEventListener('input', function1)
function function1 (e) {
  const passLen = passwordLength.value
 }






    let passwordPlaceHolder1 = lowerCaseArray
    if (upperCase) passwordPlaceHolder1 = passwordPlaceHolder1.concat(upperCaseArray)
    console.log(passwordPlaceHolder1)
    if (symb) passwordPlaceHolder1 = passwordPlaceHolder1.concat(symbolArray)
    console.log(passwordPlaceHolder1)
    if(numb) passwordPlaceHolder1 = passwordPlaceHolder1.concat(numberArray)
    console.log(passwordPlaceHolder1)

    const passwordPlaceHolder2 = []
    for (let i = 0; i < passLen; i++) {
      const randomizedCharacter = passwordPlaceHolder1[Math.floor(Math.random() * passwordPlaceHolder1.length)]
      passwordPlaceHolder2.push(String.fromCharCode(randomizedCharacter))
    }
    return passwordPlaceHolder2.join('')
  }





