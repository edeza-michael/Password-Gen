// Assignment code here
var generateBtn = document.querySelector("#generate");
var lc = confirm("Do you want lowercase letters?");
var uc = confirm("Do you want uppercase letters?");
var num = confirm("Do you want numbers?");
var specChar = confirm("Do you want special characters?");
var length = prompt("How long do you want your password to be?");
var userLength = parseInt(length);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Writing conditional else/if
if (userLength >= 8 && userLength <= 128){
  function generatePassword() {
    var randomString = "";
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVQXYZ';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    var numbers = '0123456789';

    if (lc) {
      randomString += lowercase
    };

    if (uc) {
      randomString += uppercase
    };

    if (num) {
      randomString += numbers
    };
    
    if (specChar) {
      randomString += symbols
    };

    var password = '';
    for (var i = 0; i < userLength; i++) {
      password +=  randomString.charAt(Math.floor(Math.random() * randomString.length));
    }

    console.log(password)
    return password;
  }
}
    else {
      console.log("too few or too many characters.")
      confirm ("Password must be between 8 and 128 characters.");
    }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
