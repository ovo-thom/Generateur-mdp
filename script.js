const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);

  if(data.length === 0) {
    alert('Veuillez sélectionner des critères');
    return;
  }
  

  console.log(data);
  for( i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutput.value = password;
  
}

generateButton.addEventListener("click", generatePassword);

// dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
// dataUppercase = dataLowercase.toUpperCase();
// dataNumbers = "0123456789";
// const rangeValue = document.getElementById('password-length');
// const passwordOutput = document.getElementById("password-output");

// function generatePassword() {

//     let data = [];
//     let password = "";

//     if (lowercase.checked) data.push(...dataLowercase);
//     if (uppercase.checked) data.push(...dataUppercase);
//     if (numbers.checked) data.push(...dataNumbers);

//     if(data.length === 0) {
//         alert('Veuillez sélectionner des critères');
//         return;
//     }

//     for(i = 0; i < rangeValue.value; i++) {
//         password += data[Math.floor(Math.random() * data.length)];
//     }
//     passwordOutput.value = password;
// }

// generateButton.addEventListener("click", generatePassword);
