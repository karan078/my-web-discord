import React from 'react';
import { useState } from 'react';
import image_man from '../img/icons-man.png';
import image_nitro from '../img/icons-nitro.png';
import image_shop from '../img/icons-shop.png';
import image_add from '../img/icons-add.png';
import image_discord from '../img/discord_img.JPG';
import image_mic from '../img/icons-microphone.png';
import image_headphone from '../img/icons-headphone.png';
import image_setting from '../img/icons-setting.png';
export default function UserChoice() {
    const [activePreference, setActivePreference] = useState("friend");

    const handlePreferenceClick = (preference) => {
        setActivePreference(preference);
    };

    const getBorderStyle = (preference) => {
        return {
            display:"flex",
            alignItems:"center",
            gap: "10px",
            width: "90%",
            border: `2px solid ${preference === activePreference ? 'white' : ''}`,
            borderRadius: "5px",
            padding: "8px",
            cursor: "pointer",
        };
    };

    return (
        <div style={{ width: "250px", height: "100vh", display: "flex", flexDirection: "column", background: "black", borderLeft:"2px solid gray"}}>
            <div className="my-input-field" style={{ width: "100%", padding: "12px", display: "flex", justifyContent: "center", borderBottom:"2px solid gray" }}>
                <input className="white-placeholder" type="text" placeholder='Find or Start a conversation' style={{ width: "90%", border: "none", background: "grey", color: "white", fontSize: "14px", padding: "5px", borderRadius: "5px",
                }} />
            </div>

            {/* <p style={{ border: "1px solid gray" }}></p> */}

            <div className="preference" style={{ height:"100%", overflowY: "auto", display: "flex", flexDirection: "column", alignItems: "center", padding: "5px", gap: "5px" }}>
                <div className={`friend ${activePreference === 'friend' ? 'active' : ''}`} style={getBorderStyle('friend')} onClick={() => handlePreferenceClick('friend')}>
                    <div className="friend-symbol">
                        <img style={{width:"30px", height:"30px"}} src={image_man} alt="not loaded" />
                    </div>
                    <div style={{ color: "white" }}>Friend</div>
                </div>
                <div className={`nitro ${activePreference === 'nitro' ? 'active' : ''}`} style={getBorderStyle('nitro')} onClick={() => handlePreferenceClick('nitro')}>
                    <div className="nitro-symbol">
                        <img style={{width:"30px", height:"30px"}} src={image_nitro} alt="not loaded" />
                    </div>
                    <div style={{ color: "white" }}>Nitro</div>
                </div>
                <div className={`shop ${activePreference === 'shop' ? 'active' : ''}`} style={getBorderStyle('shop')} onClick={() => handlePreferenceClick('shop')}>
                    <div className="shop-symbol">
                        <img style={{width:"30px", height:"30px"}} src={image_shop} alt="not loaded" />
                    </div>
                    <div style={{ color: "white" }}>Shop</div>
                </div>
                <div className="message" style={{ width: "90%", display: "flex", justifyContent: "space-between", color: "white",alignContent:"center"}}>
                    <div style={{textTransform:"uppercase"}}>direct message</div>
                    <div>
                        <img style={{width:"15px", height:"15px",cursor:"pointer"}} src={image_add} alt="not loaded" />
                    </div>
                </div>
            </div>

            <div className="user-preference" style={{ height: "8%", border: "2px solid gray",display: "flex" ,justifyContent:"center",alignItems:"center", background:"gray",gap:"8px"}}>
                <div className="icon-name-1" style={{paddingLeft:"3px", paddingTop:"3px"}}>
                    <img style={{width: "30px", height:"30px", borderRadius:"50%"}} src={image_discord} alt="not loaded" />
                </div>
                <div className="user-name">
                    <div className="name-of-user" style={{fontSize:"15px"}}>Abhinay</div>
                    <div className="unique-name" style={{fontSize:"15px"}}>Abhinay#3103</div>
                </div>
                <div className="media-choice" style={{ display: "flex" }}>
                    <div className="microphone">
                        <img style={{width:"30px", height:"30px", cursor:"pointer"}} src={image_mic} alt="not loaded" />
                    </div>
                    <div className="defean">
                        <img style={{width:"30px", height:"30px", cursor:"pointer"}} src={image_headphone} alt="not loaded" />
                    </div>
                    <div className="user-seeting">
                        <img style={{width:"30px", height:"30px", cursor:"pointer"}} src={image_setting} alt="not loaded" />
                    </div>
                </div>
            </div>
        </div>
    );
}
