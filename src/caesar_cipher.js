const caesarCipher = (plaintext, key) => {
  let ciphered = '';
  const letters = /^[A-Za-z]+$/;

  for (let i = 0; i < plaintext.length; i += 1) {
    if (plaintext.charAt(i).match(letters)) {
      if (plaintext.charAt(i) === plaintext.charAt(i).toLowerCase()) {
        ciphered += String.fromCharCode(((plaintext.charCodeAt(i) + key - 97) % 26) + 97);
      } else {
        ciphered += String.fromCharCode(((plaintext.charCodeAt(i) + key - 65) % 26) + 65);
      }
    } else {
      ciphered += plaintext.charAt(i);
    }
  }

  return ciphered;
};

export default caesarCipher;
