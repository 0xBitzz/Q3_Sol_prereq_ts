import bs58 from "bs58";
//@ts-ignore
import prompt from "prompt-sync";
// import wallet from "./dev-wallet.json";
import wallet from "./wba-wallet.json";


function base58ToWallet() {
  const promptSync = prompt();

  console.log("Enter your Base58 encoded string:");
  const base58 = promptSync();

  try {
    const wallet = bs58.decode(base58);
    console.log(wallet);
  } catch (error) {
    console.error("Error decoding Base58 string:", error);
  }
}
base58ToWallet();

function walletToBase58() {
  let base58 = bs58.encode(wallet).toString();
  console.log(base58);
}
walletToBase58();
