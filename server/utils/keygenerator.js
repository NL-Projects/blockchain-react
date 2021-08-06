const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const key = ec.genKeyPair();

// const publicKey = key.getPublic("hex");
// const privateKey = key.getPrivate("hex");
// const test = ec.keyFromPublic(publicKey, "hex");

const myPRkey = ec.keyFromPublic(
  "0435fe52cb3e2b046abfe1880b40d012dbc95986cd638c5bd891e45a5fe867f0cda59b320f4b9c7b3f630efdf1ce0859eee1dbf8243a1a125b3485556225e21db9",
  "hex"
);
const myPBkey = myPRkey.getPrivate("hex");

console.log("pbk: ", myPRkey);
console.log("pbk: ", myPBkey);
