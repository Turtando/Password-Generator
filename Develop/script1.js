var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", userInput);
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = '0123456789';
const sym = '!?@#$%^&*)(_-][}{:/.~\'\\';

// -Alert user that they need to create a secure password
alert("Time to create a secure password!")
function userInput() {
  var length = Number(prompt("Enter a password length(Between 8 & 128 characters)"));

  // -Prompt the user on the length of the password they would like to create
  // between 8 and 128 characters.
  while (isNaN(length) || length < 8 || length > 128) {
    length = Number(prompt(`Length must be between 8 & 128 characters`))
  };

// -Have user choose to confirm between lower case, upper case, number of special characeters
  let confirmLower = confirm("Would you like lowercase letters?");
  let confirmUpper = confirm("Would you like uppercase letters?");
  let confirmNum = confirm("Would you like numbers?");
  let confirmSym = confirm("Would you like special characters?");

// -if user fails to select from the prompt of 4 types of characters they will be alerted with an error
// -->
  while ((!confirmLower && !confirmUpper && !confirmNum && !confirmSym)) {
    alert("You must select at least one character type!");

    confirmLower = confirm("Would you like lowercase letters?");
    confirmUpper = confirm("Would you like uppercase letters?");
    confirmNum = confirm("Would you like numbers?");
    confirmSym = confirm("Would you like special characters?");
  }


  // Create #password by gathering user choices data and looping that into into one array 
  let password = []
  let choices = []
  if (confirmLower) {
    choices.push(0)
  }
  if (confirmUpper) {
    choices.push(1)
  }
  if (confirmNum) {
    choices.push(2)
  }
  if (confirmSym) {
    choices.push(3)
  }
// -have a loop that grabs a variable from each array of lower case, upper, numbers, SC and pushes 
// to array which will be the generated password
  for (let i = 0; i < length; i++) {
    let choice = choices[Math.floor(Math.random() * Math.floor(choices.length))]
    if (choice === 0) {
      password.push(lower[Math.floor(Math.random() * Math.floor(lower.length))])
    }
    else if (choice === 1) {
      password.push(upper[Math.floor(Math.random() * Math.floor(upper.length))])
    }
    else if (choice === 2) {
      password.push(num[Math.floor(Math.random() * Math.floor(num.length))])
    }
    else if (choice === 3) {
      password.push(sym[Math.floor(Math.random() * Math.floor(sym.length))])
    }
  };

// We write password to the #password input
  var passwordText = document.querySelector("#password");
  passwordText.value = password.join("");
  
  console.log(password.join(""));

}

