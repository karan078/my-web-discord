import React, { useEffect } from "react";
import { useState } from "react";
export default function AddFriend() {
  const [addFriend, setAddFriend] = useState([]);
  const [value1, setValue] = useState("");

  function addFriendFunc(){
    if(value1 != "" && !addFriend.includes(value1) && value1.length > 4){
      console.log("done");
      setAddFriend([...addFriend,value1]);
    }
  }

  useEffect(() => {
    setValue("");
  },[addFriend]);
  
  return (
    <div style={{ background: "black", height: "100%" }}>
      <div
        className="friend-Component"
        style={{
          height: "30%",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          borderBottom: "2px solid gray",
        }}
      >
        <h4>ADD FRIEND</h4>
        <p>you can add friend using discord name</p>
        <div
          className="add-friend-field"
          style={{
            padding: "5px",
            background: "green",
            borderRadius: "6px",
            backgroundColor: "#44b09e",
            backgroundImage: "linear-gradient(315deg, #44b09e 0%, #e0d2c7 74%)",
          }}
        >
          <input
            type="text"
            style={{
              width: "70%",
              height: "40px",
              fontSize: "16px",
              background: "transparent",
              border: "none",
              outline: "none",
              backgroundColor: "#44b09e",
              backgroundImage:
                "linear-gradient(315deg, #44b09e 0%, #e0d2c7 74%)",
            }}
            placeholder="you can add a friend using their discord name"
            value={value1}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            style={{
              width: "30%",
              height: "40px",
              fontSize: "16px",
              color: "white",
              background: "#00308F",
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
            onClick={addFriendFunc}
          >
            add a friend
          </button>
        </div>
      </div>
      {
        addFriend.map(value => {
          return <h4>{value}</h4>
        })
      }
    </div>
  );
}
