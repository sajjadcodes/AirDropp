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

const publicKey = new PublicKey(wallet._keypair.publicKey)
const secretKey = wallet._keypair.secretKey;

// console.log(publicKey);
// console.log(secretKey);

// getting wallet balance

const getWalletBalance = async()=> {

    try{
        // create connection 
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        const walletBalance = await connection.getBalance(publicKey);
        console.log(`wallet balance is ${walletBalance}`);
    }
    catch(err){
        console.log(err);
    }
}

// airdropping some Solana

const airDropSol = async()=>{

    try{
            const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
            const fromAirDropSignature = await connection.requestAirdrop(publicKey, 2*LAMPORTS_PER_SOL);
            // console.log(fromAirDropSignature);
            await connection.confirmTransaction(fromAirDropSignature);

    }catch(err){
        console.log(err);
    }
}

// main function

const main = async() => {
    await getWalletBalance();
    await airDropSol();
    await getWalletBalance();

}

main();
