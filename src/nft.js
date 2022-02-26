import Jules from "./images/avatar.png"
import Equilibrium from "./images/equilibrium.jpg"
import Party from "./images/Party.jpeg";
import Monkey from "./images/monkey1.png"
import Ethereum from "./images/ethereum.svg";
import TimeLogo from "./images/icon-clock.svg";
import Jeremy from "./images/jeremy.png";
import MonkeyCreator from "./images/monkeyCreator.png";
const nft = [
    {
        id: 1,
        img: Equilibrium,
        name: "Equilibrium",
        description : "Our Equilibrium collection provides balance and calm.",
        tag: "#3429",
        logo:Ethereum,
        value: 0.041,
        time:TimeLogo,
        days: 3,
        creator: "Jules Wyvern",
        profile: Jules
    },
    {
        id: 2,
        img: Party,
        name: "Party",
        description: "Cute happy looking DJ character wearing black sunglasses.",
        tag: "#3430",
        logo:Ethereum,
        value: 0.005,
        time:TimeLogo,
        days: 2,
        creator: "Akoa",
        profile: Jeremy
    },
    {
        id:3,
        img: Monkey,
        name: "Monkey",
        description: "Monkey Bet is the first NFT casino in the world.",
        tag: "#1963",
        logo:Ethereum,
        value: 0.06,
        time:TimeLogo,
        days: 3,
        creator: "Monkey Bet DAO",
        profile: MonkeyCreator

    }
];

export default nft;