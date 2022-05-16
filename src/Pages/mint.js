// import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import { ethers } from 'ethers';
import '../app.css';

import  Home  from './home';
import contract from '../contracts/NFTCollectible.json';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const contractAddress = "0x3F31B443d28E1a8481D0731d9Dc0FF54b695380b";

const abi = contract.abi;

function Mint() {

  
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => { 
    const {ethereum} = window;

    if (!ethereum){
      console.log("Make sure you have Metamask installed");
      return;

    } else{
      console.log("Wallet exists! We're ready to go!")

    }

    const accounts = await ethereum.request ({ method: 'eth_accounts'});

    if (accounts.length !==0){
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    }
      else {
        console.log("No authorized account found");

      }



  }

  const connectWalletHandler = async () => { 
    const {ethereum } = window;


    if (!ethereum) {
      alert ("Please install Metamask");
    }

    try{
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log ("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch(err) {
      console.log(err)     
    }

  }

  const mintNftHandler = async () => { 
    try {
      const { ethereum } = window;
if(ethereum){
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const nftContract = new ethers.Contract(contractAddress, abi, signer);

  console.log("Initialize payment");
  let nftTxn = await nftContract.mintNFTs(1, {value: ethers.utils.parseEther("0.01")});
  
  console.log("Mining... please wait");
  await nftTxn.wait();

  console.log('Mined, see transaction: https://testnet.ftmscan.com/address/${nftTxn.hash}');
} else {
  console.log ("Ethereum object does not exist");
}
 


    }

catch(err){

  console.log(err);
}






  }

  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
        Connect Wallet
      </button>
    )
  }

  const mintNftButton = () => {
    return (
      <button onClick={mintNftHandler} className='cta-button mint-nft-button'>
        Mint NFT
      </button>
    )
  }

  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  return (
    
   
    <><div className='main-app'>
      <h1>Phantom Werewolf</h1>
      <div class="topimagecontainer">
 <div class="topimagecard"><div class="topimages wolf4">
 
 </div> </div> </div> <br></br>
      <div>
        {currentAccount ? mintNftButton() : connectWalletButton()}
      </div>
      <p> 
        <br></br>CAUTION: You can only mint a Phantom Werewolf with Opera FTM on Fantom’s mainnet.  
Fantom’s mainnet Opera FTM is separate 
from the Ethereum network ERC-20 Fantom, and BEP2 Fantom  on the Binance Chain. 
<br></br> THIS TRANSACTION CANNOT BE REVERSED.
</p>
    </div>
    
    {/* <Router>
      
      <Link to="/"> Home </Link> 
      <Link to="/whitelist"> Whitelist </Link>
      
       
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/whitelist" element={<Whitelist/>} />
        </Routes>

      </Router> */}
      
      </>

  )


    }

    export default Mint;
