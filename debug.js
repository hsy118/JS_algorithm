function txtReverse(text) {
  let reversedTxt = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversedTxt += text[i];
  }
  return reversedTxt;
}

console.log(txtReverse("fair enough"));
