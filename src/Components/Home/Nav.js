import React from "react";
import { NavLink } from "react-router-dom";
import image_man from '../img/icons-man.png';
import image_group from '../img/icons-group.png';
import image_inbox from '../img/icons-inbox.png';
import image_help from '../img/icons-help.png';
export default function Nav() {
  return (
    <div
    className="my-nav-bar"
    style={{
        padding: "5px",
        background: "black",
        color: "white",
        display: "flex",
        borderBottom:"2px solid gray"
    }}>
      <div className="nav-friend" style={{ display: "flex",alignContent:"center", gap: "15px", padding:"3px", fontWeight:"600" }}>
        <div className="logo" style={{color:"gray"}}>
          <img style={{width:"30px", height:"30px"}} src={image_man} alt="not loaded"/>
        </div>
        <div className="nav-fr" style={{paddingTop:"5px"}}>Friends</div>
        <div style={{ borderLeft: "2px solid grey" }}></div>
      </div>
      <div
        className="my-routes-link"
        style={{width:"60%",display: "flex", gap: "26px", marginLeft: "16px", paddingTop:"5px" }}
      >
        <NavLink to="/Online" activeclassname="active">
          Online
        </NavLink>
        <NavLink to="/All" activeclasscame="active">
          All
        </NavLink>
        <NavLink to="/Pending" activeclassname="active">
          Pending
        </NavLink>
        <NavLink to="/Blocked" activeclassname="active">
          Blocked
        </NavLink>
        <NavLink activeclassname="active-friend"
          to="/">
          Add Friend
        </NavLink>
      </div>
      <div className="icon-discription" style={{width:"30%",display:"flex", justifyContent:"flex-end", gap:"14px", paddingTop:"5px"}}>
        <div className="new-group" style={{width: "30px"}}>
            <img style={{width:"30px", height:"30px"}} src={image_group} alt="not loaded" />
        </div>
        <div style={{border:"1px solid gray"}}>
        </div>
        <div className="inbox" style={{width: "30px"}}>
          <img style={{width:"30px", height:"30px"}} src={image_inbox} alt="not loaded"/>
        </div>
        <div className="help" style={{width: "30px"}}>
          <img style={{width:"30px", height:"30px"}} src={image_help} alt="not loaded"/>
        </div>
      </div>
    </div>
  );
}
