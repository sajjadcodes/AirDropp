const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
} = require("@solana/web3.js");

// creating wallet 
const wallet = new Keypair();

// console.log(wallet);

// retrive wallet's credentials

const publicKey = wallet._keypair.publicKey;
const secretKey = wallet._keypair.secretKey;

console.log(publicKey);
console.log(secretKey);
