//Modifier "A"
var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Modifier "B"
var beta = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//Modifier "C"
var gamma = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

//Modifier "D"
var delta = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"] 

var omega = []

var test = ""

function userDetermines() {
  var parseLength = window.prompt("Enter your desired password length (Choose between 8 and 128)");
  var chooseLength = parseInt(parseLength);
  console.log(chooseLength);
  if (isNaN(chooseLength)) {
    window.alert("Please enter a numerical value between 8 and 128 characters")
    return null};
  // if (parseLength > 128) {return null};
  // if (parseLength < 8) {return null};
  if (parseLength > 128 || parseLength < 8) {
    window.alert("Please enter a password length between 8 and 128 characters");
    console.log(this.userDetermines);
    return null;
  }
 
  var chooseUpper = window.confirm("Do you want to include uppercase letters?");
  var chooseLower = window.confirm("Do you want to include lowercase letters?");
  var chooseNumber = window.confirm("Do you want to include numbers?");
  var chooseSpecial = window.confirm("Do you want to include special characters (For Example: !, ?, $, etc.)?");

  if (!chooseUpper && !chooseLower && !chooseNumber && !chooseSpecial) {
    return null
  }

  if (chooseUpper) {
    omega = omega.concat(alpha)
  }
  if (chooseLower) {
    omega = omega.concat(beta)
  }
  if (chooseNumber) {
    omega = omega.concat(gamma)
  }
  if (chooseSpecial) {
    omega = omega.concat(delta)
  }
  
  console.log(omega)

  for (var i = 0; i < (chooseLength); i++) {
    var single = Math.floor(Math.random() * omega.length);
    var char = omega[single];
    test += char;
    console.log(test);
  }
  
  window.alert ("Your new password is: " + test)
};

// userDetermines();



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  userDetermines();
  var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword);





// Write a function { 
    // Research parseInt() 
    // Prompt "How many characters would you like your pw to be" (wrapped in parseInt)
    // If pw >= 8 or <= 128 proceed; if not ask for new value
    
    // Write a conditional if user enters NaN return null

    // Write a conditional if the length is greater than 128 return null

    // Write a conditional if the length is less than 8 return null

    // Research confirm() built in javascript function (4x)

    // write a condiitonal in the event that a user doesn't select anything 

    // Now make an object that stores the user input (choices they made) (5 things contained: length, t/f answers) 
        //EXAMPLE: const car = {type:"Fiat", model:"500", color:"white"};
        //return variable for the object
//}

// Here write a function for getting random characters


// Here write a funtion to generate pw

// 


// var omega = alpha.concat(beta, gamma, delta);
// // console.log(omega);

// var test = "";


// for (var i = 0; i < 16; i++) {
//   var single = Math.floor(Math.random() * omega.length);
//   var char = omega[single];
//   test += char;
//   console.log(char);
// }




