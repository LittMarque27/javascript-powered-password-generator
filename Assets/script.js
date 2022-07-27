//Establishing Arrays for each character type
var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var beta = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var gamma = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var delta = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

//Blank omnibus array for condiitional concatenation 
var omega = [];


//Password Generation Function
function userDetermines() {
  //Parse will turn string into number; NaN will return null; length outside of limits will return null
  var parseLength = window.prompt("Enter your desired password length (Choose between 8 and 128)");
  var chooseLength = parseInt(parseLength);
  console.log(chooseLength);
  if (isNaN(chooseLength)) {
    window.alert("Please enter a numerical value between 8 and 128 characters. Click the Generate Password button to start again.");
    return null};
  if (parseLength > 128 || parseLength < 8) {
    window.alert("Please enter a password length between 8 and 128 characters. Click the Generate Password button to start again.");
    console.log(this.userDetermines);
    return null
  };
 
  //Variables and confirms for character types; chooing no types will return null
  var chooseUpper = window.confirm("Do you want to include uppercase letters?");
  var chooseLower = window.confirm("Do you want to include lowercase letters?");
  var chooseNumber = window.confirm("Do you want to include numbers?");
  var chooseSpecial = window.confirm("Do you want to include special characters (For Example: !, ?, $, etc.)?");

  if (!chooseUpper && !chooseLower && !chooseNumber && !chooseSpecial) {
    window.alert("Please choose at least one character type. Click the Generate Password button to start again.");
    return null
  };

  //Variables that are true will concat the appropriate array
  if (chooseUpper) {
    omega = omega.concat(alpha)
  };
  if (chooseLower) {
    omega = omega.concat(beta)
  };
  if (chooseNumber) {
    omega = omega.concat(gamma)
  };
  if (chooseSpecial) {
    omega = omega.concat(delta)
  };
  
  console.log(omega);

  //Moved out of global scope to fix password stacking bug
  var test = "";

  //For Loop will choose characters at random from the concatted array until it reaches the user's desired length
  for (var i = 0; i < (chooseLength); i++) {
    var single = Math.floor(Math.random() * omega.length);
    var char = omega[single];
    test += char;
    console.log(test)
  };
  
  //Password id displayed as an alert; Gradin Criteria allowed for this
  window.alert ("Your new password is: " + test);
};


// Utilized Assignment Started Code to being the userDetermines function with the click of the "Generate Password." Text Generation commented out because I am not using it.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  userDetermines();
  var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

