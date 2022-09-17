import React from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css"
function Main() {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src="https://i.seadn.io/gae/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q?auto=format&dpr=1.25&w=500"
              alt=""
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">Bandana Punk</div>
          <span className="itemNumber">.#3</span>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img
              src={
                "https://img.freepik.com/premium-vector/hand-painted-background-violet-orange-colours_23-2148427578.jpg?w=2000"
              }
              alt=""
            />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div>0x2A0a11a1C9BD965f758A4e1d1fc9d6E811Eca09D</div>
              <div className="ownerHandle">@Marwan</div>
            </div>
            <div className="ownerLink">
              <img src={instagramLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={twitterLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={moreIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
