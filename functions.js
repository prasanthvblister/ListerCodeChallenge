/* This method removes the blank spaces in a given string*/
exports.removeBlankSpace = (value) => {
  let output = '';
  if (!value) return output;
  let inputString = value.split(" ")
  let stringIndex = 0;
  while (stringIndex < inputString.length) {
    output += inputString[stringIndex];
    stringIndex++;
  }
  return output;
}

/* This method is to check the given value is a Palindrome or not*/
exports.checkpalindrome = (value, caseSensitiveFlag) => {
  if (!value) return false
  let output = '';
  value = caseSensitiveFlag ? value : value.toLowerCase();
  let stringIndex = value.length;
  while (stringIndex >= 0) {
    output += value.charAt(stringIndex);
    stringIndex--;
  }
  return value === output;
}