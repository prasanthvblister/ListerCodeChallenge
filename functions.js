/* This method removes the blank spaces in a given string*/
  exports.removeBlankSpace = (value) => {
    let inputString = value.split(" ")
    let output = '';
    let stringIndex = 0;
    while (stringIndex < inputString.length) {
      output += inputString[stringIndex];
      stringIndex++;
    }
    return output;
  }

  /* This method is to check the given value is a Palindrome or not*/
exports.checkpalindrome = (value, caseSensitiveFlag) => {
    value = caseSensitiveFlag ? value : value.toLowerCase();
    let stringIndex = value.length;
    let output = '';
    while (stringIndex >= 0) {
      output += value.charAt(stringIndex);
      stringIndex--;
    }
    return value === '' ? false : value === output;
  }