let inputs = document.getElementsByTagName("input");
addEventListnersToInputs(inputs);
 
function onKeyUp(e) {
  let validateParams = null;
  switch (e.target.id) {
    case "numberplace1": {
      validateParams = {
        RegExpString: "[0-9]",
        UppedKeyCode: e.keyCode,
        MaxSymbolsCount: 4,
        NumbersBlockLenght: 4
      };
      break;
    }
    case "numberplace2": {
      validateParams = {
        RegExpString: "[0-9]",
        UppedKeyCode: e.keyCode,
        MaxSymbolsCount: 4,
        NumbersBlockLenght: 4
      };
      break;
    }
    case "numberplace3": {
      validateParams = {
        RegExpString: "[0-9]",
        UppedKeyCode: e.keyCode,
        MaxSymbolsCount: 4,
        NumbersBlockLenght: 4
      };
      break;
    }
    case "numberplace4": {
      validateParams = {
        RegExpString: "[0-9]",
        UppedKeyCode: e.keyCode,
        MaxSymbolsCount: 4,
        NumbersBlockLenght: 4
      };
      break;
    }
case "cardname": {
      validateParams = {
        RegExpString: "[a-zA-Z\\s]",
        IsUpperCase: true
      };
      break;
    }
 
    case "cvv": {
      validateParams = {
        RegExpString: "[0-9]",
        MaxSymbolsCount: 3
      };
      break;
    }
  }
 
  e.target.value = validateParams
    ? inputValidate(e.target.value, validateParams)
    : "";
}
 
function inputValidate(value, validateParams) {
  var regexp = new RegExp(validateParams.RegExpString, "g");
  let validInput = "";
  let backspaceKeyCode = 8;
  let validCharsArray = value.match(regexp);
if (validCharsArray) {
    validCharsArray.forEach(function (char, index) {
      let currentCharNumber = index + 1;
      if (currentCharNumber > validateParams.MaxSymbolsCount) {
        return;
      }
      validInput += char;
    });
  }
 
  return validateParams.IsUpperCase ? validInput.toUpperCase() : validInput;
}
 
function addEventListnersToInputs(inputs) {
  let inputsArray = Array.from(inputs);
  inputsArray.forEach(function (input) {
    input.addEventListener("keyup", {
      handleEvent: onKeyUp
    });
  });
}