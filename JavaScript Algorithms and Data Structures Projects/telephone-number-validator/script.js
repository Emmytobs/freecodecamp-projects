function telephoneCheck(str) {
  let isValidPhoneNumber;
  const { _str: accumulatorStr, numericCount, nonNumericCount } = removeNonNumericCharacters(str)
//   console.log({accumulatorStr, numericCount, nonNumericCount})

  if(numericCount == 11) {
    let openBracketIndex = accumulatorStr.lastIndexOf('(')
    let closeBracketIndex = accumulatorStr.lastIndexOf(')');

    if(accumulatorStr[0] == 1 && (openBracketIndex == 1 && closeBracketIndex == 5)) {
      return true
    }

    else if (accumulatorStr[0] == 1 && (openBracketIndex == -1 && closeBracketIndex == -1)) {
        return true;
    }

    return false
  }
  else if (numericCount == 10) {
    let openBracketIndex = accumulatorStr.lastIndexOf('(')
    let closeBracketIndex = accumulatorStr.lastIndexOf(')');
    if(openBracketIndex == 0 && closeBracketIndex == 4) {
        return true
    } else if (openBracketIndex == -1 && closeBracketIndex == -1) {
        return true
    }
    return false;
  } else {
      return false
  }
  // return
  // if((accumulatorStr[0] == 1 && numericCount == 11)) {
  //   return true
  // }
  // else if( accumulatorStr[0] == "(" && accumulatorStr[4] == ")" && numericCount === 10 && (nonNumericCount == 4 || nonNumericCount == 2) ) {
  //   return true
  // }
  // else {
  //   return false
  // }
}

function removeNonNumericCharacters(str) {
  let _str = '';
  let nonNumericCount = 0;
  let numericCount = 0;
  for (let index = 0; index < str.length; index++) {
    let number = str[index];
    let toNumber = Number(number)
    let isNotANumber = Number.isNaN(toNumber);
    if(!isNotANumber && number !== " ") {
       numericCount = numericCount + 1
      _str += number
    } else if(isNotANumber) {
      _str += number;
      nonNumericCount = nonNumericCount + 1
    }
  }
  return {_str, numericCount, nonNumericCount}
}
// Check if its a numeric and add it to the str acc
// Check if its a non-numeric and add it to the str acc, then increment non-numeric count by 1
// check if its starting with '1' then calculate the length of the str acc to make sure its 10
// if the str acc contains "(" or ")", make sure to the numeric count is 10 or 11 (in the case where it starts with "1")
let isValidPhoneNumber = telephoneCheck("(555)5(55?)-5555")
console.log(isValidPhoneNumber)
// console.log(telephoneCheck("(555) 555)-5555"))
