import React from "react";
import "./Card.css";

interface Props {
    cardDetails: any
}

const styles: any = {
    percentStyle: {
        color1: "#00FFA3",
        color2: "#FF4D4D"
    },
}

const Card: React.FC<Props> = ({ cardDetails }) => {
    return (
        <>
            <div className="parentDiv">
                <div className="upperDiv" style={cardDetails.upperDivStyles}>
                    <img src={cardDetails.mainIcon} alt="" />
                </div>
                <div className="assetInner">
                    <div className="assetHeadingStyles"> {cardDetails.token}</div>
                    <div className="boxDiv" style={{ marginTop: "8px" }}>
                        <span>{cardDetails.LTP}</span>
                        <span className="percentLTP" style={{ color: cardDetails.hasPriceIncrease ? styles.percentStyle.color1 : styles.percentStyle.color2 }}>{cardDetails.percentChange}</span>
                    </div>
                    <div className="assetHeadingStyles">Price</div>
                    <div className="boxDiv" style={{ marginTop: "4px" }}>
                        {cardDetails.lotValue}
                    </div>
                    <div className="assetHeadingStyles">TVL</div>
                    <div className="boxDiv" style={{ marginTop: "12px", width: "122px" }}>
                        {cardDetails.tradedPairs.map((eachToken: string) => {
                            return (<img src={eachToken} alt="" key={eachToken} />)
                        })}
                    </div>
                    <div className="assetHeadingStyles">Popular pairs</div>
                </div>
            </div>
        </>
    );
}

export default Card;