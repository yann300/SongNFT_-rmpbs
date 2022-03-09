import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import Web3Modal from "web3modal";


export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: "27b6aca4f2c94025ae9afa7278badb31" // required
    }
  }
};

const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
  });
  
  export const provider = await web3Modal.connect();
  
  export const web3 = new Web3(provider);