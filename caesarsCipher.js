const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function rot13(str) {
  // Create accumulator
  let cipher = "";

  //Loop through the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const isItALetter = alphabet.includes(char);
    // if char is not a letter, add to cipher
    if (isItALetter === false) {
      cipher += char;
    } else {
      // else, rotate + or - 13 add to cipher
      const charIndex = alphabet.findIndex((c) => c === char); // A = 0; Z = 25
      cipher += alphabet[charIndex + 13] || alphabet[charIndex - 13];
    }
  }
  return cipher;
}

rot13("SERR PBQR PNZC");
