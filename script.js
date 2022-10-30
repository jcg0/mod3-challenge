// Assignment code here
function generatePassword() {
  var passwordLength = prompt(
    "Choose a length of at least 8 or 128 characters"
  );

  if (passwordLength < 8 || passwordLength > 128) {
    alert("please select a length between 8 and 128 characters");
    generatePassword();
  }

  var lowercase = confirm("Do you want lowercase characters?");
  var uppercase = confirm("Do you want uppercase characters?");
  var numeric = confirm("Do you want numeric characters?");
  var specialCharacters = confirm("Do you want special characters?");

  if (!lowercase && !uppercase && !numeric && !specialCharacters) {
    console.log("this isnt working");
    alert("Please select one to generate your password");
    generatePassword();
  }

  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var numericType = "1234567890";
  var specialType = "!@#$%^&*()<>?/:;";
  var characterType = "";

  if (lowercase) {
    characterType += alphabet;
  }
  if (uppercase) {
    characterType += alphabet.toUpperCase();
  }
  if (numeric) {
    characterType += numericType;
  }
  if (specialCharacters) {
    characterType += specialType;
  }

  console.log(characterType);
  var randomPassword = "";

  for (let i = 0; i < passwordLength; i++) {
    randomPassword += characterType.charAt(
      Math.floor(Math.random() * characterType.length)
    );
  }

  return randomPassword;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
