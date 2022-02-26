import React, {useState} from "react";
import Cart from "../images/bag.png"
function Card(props){
    
    const [isvalue, setValue] = useState(false);

    function addProduct(){
        setValue(true);
    }
    function removeProduct(){
        setValue(false);
    }
    return(
        <div className="card">
            <img className="nftView" src={props.img} alt="nft-png" />
            <div className="description">
            <h2>{props.name} {props.tag}</h2>
            <p>{props.description}</p>
            <div className="info">
                <div className="price">
                <img src={props.logo} alt="money-png" />
                <p>{props.value}ETH</p>
                </div>
                <div className="days">
                <img src={props.time} alt="time-png" />
                <p>{props.days} days left</p>
                </div>
            
            </div>
            <div className="cartSystem">
            <img className="shopping-cart" src={Cart} alt="nft-png" />
            <div className="notify" style={{display: isvalue === false? "none" : ""}}></div>
            <button className="btnAdd" onClick={addProduct} style={{display: isvalue? "none" : ""}}>Add to cart</button>
            <button className="btnRem" onClick={removeProduct} style={{display: isvalue === false? "none" : ""}}>Remove from cart</button>
            </div>
            <div className="creator">
            <img className="profilePic" src={props.profile} alt="profile-png" />
            <p> Creation of {props.creator}</p>
            </div>
            </div>
        </div>
    );
}
export default Card;