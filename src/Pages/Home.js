import React from 'react';
import '../app.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { AnimateSharedLayout } from "framer-motion"
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';


function Home() {
  const [selectedId, setSelectedId] = useState(null)
    return <div>
        
        
        
        
       
        <div class="scrollable">
        
      <div class="page2"> 
      
      <div class="topbanner">
     
        <img src="images/x-icon/Aurora.png"   width="100%" height="100%"></img> 
        
       
      </div>
      
      </div>
      
<div class="treewrapper">

     <div class="colorpurplebg">
     <div class="page9"> 
      <div class="treebanner">
        {/* <img class="trees" src="images/x-icon/Trees.png"   width="100%" height="100%"></img>  */}
      </div>
      </div>
      <div class="toppage">
        <div class="welcomedivright">
        <div class="welcomediv">
        <span id="one">
          <h3><h1>WELCOME</h1> <h2>TO</h2> PHANTOM WEREWOLF </h3> 
          </span> </div>
        <section id="Greeting">
        
        <Fade>
        <p>
        Phantom Werewolf is a collection of 1000 NFTs  minting on the Fantom blockchain.
         Each  werewolf offers exclusive member access.
          The  moonmap we have outlined below offers a 
          description of  the future of the wolf pack. </p> </Fade>
        </section>
       </div>
<Fade>
        
        <div class="clearfix">
         <div class="leftbox">
        <img  class="img2" src="images/x-icon/Wolf_Moon.png"  /> 
        </div>

        </div>
       
        </Fade>
      </div>
      </div>
      <div class="colorpurplebg2">
  
     
     <div class="toppage2">




<div class="topimagecontainer">
 <div class="topimagecard"><div class="topimages wolf1">
 </div> </div>



<div class="topimagecard">
  <div class="topimages wolf2">
 </div> </div>

{/* <div class="colortext4">
<p> <span class="namecolortextwords"><br></br> MASAMI: <br></br> developer/marketing
 </span> </p> 
</div> */}

 <div class="topimagecard">
   <div class="topimages wolf3">
 
 </div> </div>

 </div>

</div>

</div>


</div>


      
<div class="scrollable">
     

      <div class="page">

        <div class="detailz">
        <div class="detailztitle">
          <h3>THE DETAILS</h3>
          </div>
         
        <div class="detailztext">  

        <Fade><p>  Every Phantom Werewolf is unique. 
        There are over ??? traits that are combined  to create Werewolves, some more rare than others.
          The collection is  made up of classic ERC-721 NFTs.   
          Each werewolf cost ??? FTM.  </p> </Fade>
          
        
        </div>
        <div class="topimagecontainer">
 <div class="topimagecard"><div class="topimages wolf4">
 
 </div> </div> </div>
        </div>
      </div>
      </div>
      <div class="midbanner">
      <div id="detailz">

      <div class="detailztitle">
      <Fade> <h3> THE WOLF PACK</h3> </Fade>
      </div>
          
          <div class="detailztext">
          <Fade><p> The wolf pack
             has a common mission of growing the wolf pack community. Each Phantom Werewolf holder
             gains exclusive access to participate in the Wolf Games.  </p></Fade>
             </div></div>
      </div>
      
      <div class="page">

        <div class="detailz">
        <div class="detailztitle">
        <Fade><h3>MOONMAP</h3> </Fade>
          </div>
          <div class="detailztext">
        <section id="roadmap">
        
        <Fade> <br></br><br></br> <p>We are fully committed to the wolf pack. </p>
        
        <p>
        <br></br> <span class="colortext"> NEW MOON: </span> We will release reveals of different variations of
         the collection. <br></br><br></br> Next we will release the Honorary Phantom Werewolf Collection.<br></br><br></br>

        <span class="colortext"> FIRST QUARTER MOON: </span> Launch the official Wolfsite, grow Discord, and Twitter community.<br></br><br></br> 
          
        <span class="colortext"> HALF MOON: </span> Allow the wolf pack to mint the Phantom Werewolf NFT collection.<br></br><br></br>

        <span class="colortext"> LAST QUARTER MOON:</span> 4 total 1/1 Honorary Phantom Werewolf NFT giveaway series. <br></br><br></br>

        <span class="colortext"> FULL MOON: </span> During the start of the Full Moon we will begin the <span class="colortext3"> Wolf Games.</span> <br></br><br></br> 
        The winners of the <span class="colortext3"> Wolf Games</span> will receive Fantom and honor. <br></br><br></br><br></br>

        <span class="colortext"> What are the <span class="colortext3"> Wolf Games...? </span></span>  <br></br><br></br>

        Phantom Werewolf holders will have the opportunity to win rewards in the <span class="colortext3"> Wolf Games.</span> <br></br><br></br>
        The  Wolf Games will be a series of contest and games that scale in dificculty and require skill knowledge and luck.
        <br></br><br></br>The more difficult the game the higher the prizes increase.
        <br></br><br></br>Rule number 1 of the  Wolf Games : Do not talk about the secrets of the wolf games outside of the wolf pack.
        <br></br><br></br>Rule number 2 of the  Wolf Games: Do not talk about the secrets of the wolf games outside of the wolf pack.

        <br></br><br></br>Do you have what it takes to win the Wolf Games and take it all?
        </p> </Fade>
       
        </section>
        </div>
      </div>
      
      </div>

<div class="cleanpage">
<section id="team"></section>
     <div class="detailz2">
<div class="detailztitle2"> 
<Fade><h3>TEAM</h3> </Fade>
  
  </div>

<div class="detailztext2">
<Fade><p>The Phantom Werewolf Team consist of three members of the NFT community.
</p> </Fade>
</div>

<div class="detailz2">
      <div class="topimagecontainer">

 <div class="topimagecard"> 
 <p> 
<span class="colortext3"> ZOMBIE JUSE </span>
 <br></br>
 graphic artist
  </p> 
<div class="topimages wolf5">
 </div> </div>

 <div class="topimagecard">   <p> 
 <span class="colortext3"> PRINCE ALI </span>
    <br></br>
    art director
 </p> <div class="topimages wolf6">
 </div> </div>

 <div class="topimagecard">
 <p> 
 <span class="colortext3"> MASAMI </span>
    <br></br>
    developer/marketer
  </p>
   <div class="topimages wolf7">
 
 </div> </div>
 
 </div>

 <div class="footer2">
        <section id="FOOTER">
        <p>Discord</p>

        <div class="discordfooter">
        <a
          href="https://discord.gg/gJ5wZVyWeQ"
          target="_blank"
          rel="noopener noreferrer"
        >
         
         
          <img src="images/header/discord.png" alt="Discord" width="60" height="60" />
        </a></div>
        <p>Twitter</p>

        <div class="twitterfooter">
        <a
          href="https://twitter.com/werewolffantom"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="images/header/twitter.png" alt="Twitter" width="45" height="45" />

        </a></div>
        </section>
      </div>

 </div>


</div>



      </div>

      

    

  </div>
        
        </div>;
}


export default Home;