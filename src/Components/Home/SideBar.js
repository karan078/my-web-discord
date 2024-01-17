import React from "react";
import image from '../img/add-icons-1.png';
import discordImage from '../img/discord_img.JPG';
import download from '../img/icons-download-1.png';
import discover from '../img/icons-discover-1.png';
function SideBar() {
  return (
    <div
      style={{
        height: "100vh",
        width: "80px",
        border: "2px solid black",
        padding: "10px",
        background: "black",
        paddingLeft: "0px",
      }}
    >
      <div className="my-box-container" style={{ display: "flex" }}>
        <p
          style={{
            height: "40px",
            width: "10px",
            background: "white",
            borderRadius: "10px",
            position: "relative",
            left: "-7px",
            alignSelf: "center",
          }}
        ></p>
        <div
          className="discord-symbol"
          style={{ display: "flex", flexDirection: "column", gap: "8px" }}
        >
          <div
            className="logo"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "16px",
            }}
          >
            <img style={{width:"48px", height:"48px", backgroundSize:"cover",borderRadius: "16px", cursor:"pointer"}} src={discordImage} alt="not loaded" />
          </div>
        </div>
      </div>

      <div
        className="box-1"
        style={{display: "flex",flexDirection: "column",gap: "10px",alignItems: "center",paddingLeft: "6px",}}>
        <p style={{
            width: "34px",
            border: "1px solid grey",
            alignSelf: "center",
            marginTop: "8px",
        }}
        ></p>

        <div
            className="discord-symbol"
            style={{ display: "flex", flexDirection: "column", gap: "8px" }}
        >
        <div className="add-server" style={{display:"grid", placeContent:"center"}}>
          <img style={{width:"30px",height:"30px"}} src={image} alt="not laoded" />
        </div>

        <div className="my-box-container1" style={{ display: "flex", position:"relative" }}>
            <div className="side-icon1"></div>
            <div className="discover-server" style={{display:"grid", placeContent:"center"}}>
            <img style={{width:"30px",height:"30px"}} src={discover} alt="not laoded" />
              {/* <img style={{width:"50px", height:"50px",border:"2px solid red" , borderRadius:"50%", position:"absolute"}} src={discover} alt="not loaded" /> */}
            </div>  
        </div>
        <p
            style={{
                width: "34px",
                border: "1px solid grey",
                alignSelf: "center",
            }}
        ></p>
        </div>
        <div className="my-box-container1" style={{ display: "flex", position:"relative" }}>
            <p className="side-icon" style={{}}></p> 
            <div className="download-app" style={{display:"grid", placeContent:"center"}}>
              <img src={download} alt="not loaded" />
            </div>
        </div>
    </div>
    </div>
);}
export default SideBar;
