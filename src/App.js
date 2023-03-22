import { useState } from 'react';
import './App.css';
import { ethers } from 'ethers';

function App() {

  // Properties

  const [walletAddress, setWalletAddress] = useState("");



  // Requests access to the user's META MASK WALLET
  async function requestAccount() {
    console.log('Requesting account...');

    // Check if Metamask Extension exists
    if(window.ethereum){
      console.log('detected')

      try{
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setWalletAddress(accounts[0]);

      } catch (error){
        console.log('Error connecting...');
      }

    } else {
      console.log('Metamask not detected');
    }
  }

  async function connectWallet(){
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }



  return (
    <div className="App">
      <header className="App-header">
        <button
        
        onClick={() => requestAccount()}
        >Request Wallet</button>
        <button
        
        style={{ backgroundColor:'green'}}
        onClick={() => connectWallet()}
        >Connect Wallet</button>
        <h3>Wallet Address: {walletAddress}</h3>
      </header>
    </div>
  );
}

export default App;
