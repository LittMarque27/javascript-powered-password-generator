//Modifier "A"
var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Modifier "B"
var beta = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//Modifier "C"
var gamma = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

//Modifier "D"
var delta = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]


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



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
