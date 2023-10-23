const fs = require('fs');
const crypto = require('crypto');

const decryptData = (encryptedData) => {
  const privateKey = fs.readFileSync(`${__dirname}/private.pem`, 'utf8');

  const passphrase = 'banksultra'; // Replace this with the passphrase used for encryption

  const decryptedPrivateKey = crypto.createPrivateKey({
    key: privateKey,
    format: 'pem',
    passphrase: passphrase,
  });

  const decryptedKey = decryptedPrivateKey.export({
    format: 'pem',
    type: 'pkcs1',
    passphrases: passphrase,
  });

  try {
    const buffer = Buffer.from(encryptedData, 'base64');
    const decryptedData = crypto.privateDecrypt(
      {
        key: decryptedKey,
        padding: crypto.constants.RSA_PKCS1_PADDING,
      },
      buffer
    );

    const results = JSON.parse(decryptedData.toString());
    console.log(JSON.parse(decryptedData.toString()), 'decryptedData');

    return results;
  } catch (error) {
    console.error('Error reading or parsing the PEM file:', error.message);
  }
};

const encryptedData =
  'd+o9EOKzCQoO8Fy/cLVuPi28cNs2O4HVpTx8c4Aw7M9xLs7Or0hkzYWZgbrbRe9HENsDm+o+UbYJBtD28Y3CBjM1ifl9Yktn3Bz4eEmutYMuMb4zFB8irfK947GpMymXcFDY38BdzUfUIuFKXhZ+Socub1/xdYwjqvPCc9teyUOmfFHwbS5V6liboRv85crQ7wKww/g3nMvg0esbvzkBliRRmabZd+0aSn3XJI7SSjOer8oZdAxPCK+7T3TeGQBVVAmDDdof1B8YHnpWhpp0kpVtMMMumG9MWYjVlmj8Zwse9IplwrmOf1gOiepxgLCG+MDYXR04+au6htlHOflVeg==';

const start = performance.now();

decryptData(encryptedData);
console.log(performance.now() - start);
