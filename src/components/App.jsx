import React from "react";
import Card from "./Card";
import nft from "../nft";
import Cart from "../images/carts.png"
function createEntry(nft) {
    return (
      <Card
        key={nft.id}
        img={nft.img}
        name={nft.name}
        tag={nft.tag}
        description={nft.description}
        logo={nft.logo}
        value={nft.value}
        time={nft.time}
        days={nft.days}
        profile={nft.profile}
        creator={nft.creator}
      />
    );
  }
function App(){
    return(
        <div>
        <h1 className="header">NFT Store</h1>
        <div className="app">
           
            {nft.map(createEntry)}
            
        </div>
        </div>
    );
}

export default App;