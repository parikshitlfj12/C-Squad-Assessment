import React from "react";
import "./Main.css";
import TrendingLogo from "../../assets/images/activity.png";
import Card from "../CardComponent/Card";
import Solana from "../../assets/images/Solana (SOL).png";
import Eth from "../../assets/images/Ethereum (ETH).png";
import Binance from "../../assets/images/Binance Coin (BNB).png";
import Bitcoin from "../../assets/images/Bitcoin SV (BSV).png";
import BitcoinBigger from "../../assets/images/Bitcoin SV (BSV) - Big.png";
import SolanaBigger from "../../assets/images/Solana (SOL) - Big.png";
import BinanceBigger from "../../assets/images/Binance Coin (BNB) - Big.png";
import ShibuBigger from "../../assets/images/SHIBA INU (SHIB) - Big.png";
import EthBigger from "../../assets/images/Ethereum (ETH) - Big.png";

interface upperDivStyles {
    background: string;
    backdropFilter: string;
}

interface Token {
    id: string,
    token: string;
    mainIcon: string;
    LTP: string;
    percentChange: string;
    hasPriceIncrease: boolean;
    lotValue: string;
    upperDivStyles: upperDivStyles;
    tradedPairs: string[];
}

const cardDetails: Token[] = [
    {
        id:"BTC",
        token: "Bitcoin (BTC)",
        mainIcon: BitcoinBigger,
        LTP: "$31,812.80",
        percentChange: "+10%",
        hasPriceIncrease: true,
        lotValue: "$60,000",
        upperDivStyles: {
            background:
                "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(234, 179, 0, 0.06) 100%)",
            backdropFilter: "blur(50px)",
        },
        tradedPairs: [Solana, Eth, Binance],
    },
    {
        id:"SOL",
        token: "Solana (SOL)",
        mainIcon: SolanaBigger,
        LTP: "$32.83",
        percentChange: "-12.32%",
        hasPriceIncrease: false,
        lotValue: "$60,000",
        upperDivStyles: {
            background: "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(220, 31, 255, 0.1) 100%)",
            backdropFilter: "blur(50px)"
        },
        tradedPairs: [Bitcoin, Eth, Binance],
    },
    {
        id:"ETH",
        token: "Ethereum (ETH)",
        mainIcon: EthBigger,
        LTP: "$1466.45",
        percentChange: "-11.93%",
        hasPriceIncrease: false,
        lotValue: "$60,000",
        upperDivStyles: {
            background: "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(237, 240, 244, 0.1) 100%)",
            backdropFilter: "blur(50px)"
        },
        tradedPairs: [Solana, Bitcoin, Binance],
    },
    {
        id:"BUSD",
        token: "Binance USD (BUSD)",
        mainIcon: BinanceBigger,
        LTP: "$1.00",
        percentChange: "+0.26%",
        hasPriceIncrease: true,
        lotValue: "$60,000",
        upperDivStyles: {
            background:
                "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(220, 31, 255, 0.1) 100%)",
            backdropFilter: "blur(50px)",
        },
        tradedPairs: [Solana, Eth, Binance],
    },
    {
        id:"SHIB",
        token: "Shiba Inu (SHIB)",
        mainIcon: ShibuBigger,
        LTP: "$0.00000001948",
        percentChange: "-8.1%",
        hasPriceIncrease: false,
        lotValue: "$60,000",
        upperDivStyles: {
            background: "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(228, 45, 4, 0.1) 100%)",
            backdropFilter: "blur(50px)"
        },
        tradedPairs: [Solana, Eth, Binance],
    },
];

const Main = () => {
    return (
        <div className="mainDiv">
            <div className="innerDiv">
                <div className="heading">
                    <img src={TrendingLogo} alt="" height="14px" width="14px" />
                    <p>Trending Assets</p>
                </div>
                <div className="assetsDiv">
                    {cardDetails.map((eachToken) => {
                        return <Card cardDetails={eachToken} key={eachToken.token} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Main;
