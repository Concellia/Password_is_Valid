function passWordChecker(password) {
  let regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{9,}/;

  if (regex.test(password) === false) {
    throw new Error("Password invalid please enter a valid password!!");
  }
  return regex.test(password);
}

function passwordIsOk(password) {
  let chacters = /[a-zA-Z0-9]{9,}/;
  let smallLetters = /(?=.*[a-z])[a-z]+/;
  let capitalLetters = /(?=.*[A-Z])[A-Z]+/;
  let numbers = /(?=.*[0-9])[0-9]+/;

  if (
    password != null &&
    chacters.test(password) === true &&
    smallLetters.test(password) === true
  ) {
    return true;
  }

  if (
    password != null &&
    chacters.test(password) === true &&
    capitalLetters.test(password) === true
  ) {
    return true;
  }
  if (
    password != null &&
    chacters.test(password) === true &&
    numbers.test(password) === true
  ) {
    return true;
  } else {
    return false;
  }
}
