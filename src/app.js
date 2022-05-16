import './app.css';
import  Whitelist  from './pages/whitelist';
import  Mint  from './pages/mint';
import  Home  from './pages/home';
import contract from './contracts/NFTCollectible.json';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';



const contractAddress = "0x3F31B443d28E1a8481D0731d9Dc0FF54b695380b";

const abi = contract.abi;

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -50; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

function App() {

  
//   const [currentAccount, setCurrentAccount] = useState(null);

//   const checkWalletIsConnected = async () => { 
//     const {ethereum} = window;

//     if (!ethereum){
//       console.log("Make sure you have Metamask installed");
//       return;

//     } else{
//       console.log("Wallet exists! We're ready to go!")

//     }

//     const accounts = await ethereum.request ({ method: 'eth_accounts'});

//     if (accounts.length !==0){
//       const account = accounts[0];
//       console.log("Found an authorized account: ", account);
//       setCurrentAccount(account);
//     }
//       else {
//         console.log("No authorized account found");

//       }



//   }

//   const connectWalletHandler = async () => { 
//     const {ethereum } = window;


//     if (!ethereum) {
//       alert ("Please install Metamask");
//     }

//     try{
//       const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
//       console.log ("Found an account! Address: ", accounts[0]);
//       setCurrentAccount(accounts[0]);
//     } catch(err) {
//       console.log(err)     
//     }

//   }

//   const mintNftHandler = async () => { 
//     try {
//       const { ethereum } = window;
// if(ethereum){
//   const provider = new ethers.providers.Web3Provider(ethereum);
//   const signer = provider.getSigner();
//   const nftContract = new ethers.Contract(contractAddress, abi, signer);

//   console.log("Initialize payment");
//   let nftTxn = await nftContract.mintNFTs(1, {value: ethers.utils.parseEther("0.01")});
  
//   console.log("Mining... please wait");
//   await nftTxn.wait();

//   console.log('Mined, see transaction: https://testnet.ftmscan.com/address/${nftTxn.hash}');
// } else {
//   console.log ("Ethereum object does not exist");
// }
 


//     }

// catch(err){

//   console.log(err);
// }






//   }

//   const connectWalletButton = () => {
//     return (
//       <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
//         Connect Wallet
//       </button>
//     )
//   }

//   const mintNftButton = () => {
//     return (
//       <button onClick={mintNftHandler} className='cta-button mint-nft-button'>
//         Mint NFT
//       </button>
//     )
//   }

//   useEffect(() => {
//     checkWalletIsConnected();
//   }, [])

  return (
    
   
    <>
    {/* <div className='main-app'>
      <h1>Phantom Werewolf</h1>
      <div>
        {currentAccount ? mintNftButton() : connectWalletButton()}
      </div>
    </div> */}
    
    <Router>
      
      <header>
      <div class="container">
      <div class="logo">
         <a href="/">
          <img src="images/x-icon/apple-touch-icon.png" alt="logo" width="225.6" height="80"/>
        </a>
        
      </div>

     
      <div class="box">
      <div class="navigation">
    
    
      <Link to="/"> HOME </Link>
      <Link to="/#roadmap" smooth={true} scroll={el => scrollWithOffset(el)}>MOONMAP</Link>
      <Link to="/#team" smooth={true} scroll={el => scrollWithOffset(el)}>TEAM</Link>
      {/* <Link to="/whitelist"> WHITELIST </Link> */}
      {/* <Link to="/Mint"> MINT </Link> */}
      
          {/* <a href="#one" style="text-decoration:none"> <span class="navigate">HOME</span></a>
          <a href="#two" style="text-decoration:none"><span class= "navigate" href="#two">ROADMAP</span></a>
          <a href="#three" style="text-decoration:none"><span class="navigate" href="three">TEAM</span></a> */}
          
        
      
      </div>
      </div>
      <div class="menu">
        <a
          href="https://discord.gg/gJ5wZVyWeQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="images/header/discord.png" alt="Discord" width="25" height="25"/>
        </a>
        <a
          href="https://twitter.com/werewolffantom"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="images/header/twitter.png" alt="Twitter" width="20" height="20" styling="padding-left 20px;" />

        </a>
      
      
      </div>
      </div>
      </header>
      
      
     
     
      
       
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/whitelist" element={<Whitelist/>} />
          <Route path="/mint" element={<Mint/>} />
        </Routes>

      </Router>
      
      </>

  )

  


  
}



  
    
    





export default App;
