let crypto = require('crypto');
//Encryption

//32-bit key
const key = crypto.randomBytes(32);

//AES Advanced Encryption Standard CBC Cipher Block Chain Mode
const algo = "aes-256-cbc";

//Initialization Vector
const iv = crypto.randomBytes(16);

const encrypt = (data) => {
  //cipher here
  const cipher = crypto.createCipheriv(algo, key, iv);
  let encrypted = cipher.update(data, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
};

const secret_message = "Surya Pratap :-{";
const encrypted_data = encrypt(secret_message);
console.log('encrypted_data',encrypted_data);

//Decryption
const decrypt = (data)=>{
    //create a decipher
    const decipher = crypto.createDecipheriv(algo, key, iv);
    let decrypted = decipher.update(data, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
}

const decrypted = decrypt(encrypted_data);
console.log(decrypted);

