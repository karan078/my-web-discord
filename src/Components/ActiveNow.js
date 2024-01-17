import React from 'react'

export default function () {
return (
    <div style={{border:"2px solid black", width:"30%", height:"100%", color:"white",background:"black", padding:"40px", paddingLeft:"10px", borderLeft:"2px solid gray"}}>
        <h3>Active Now</h3>
        <div className="activity-section" style={{height:"inherit", display:"flex", flexDirection:"column", alignItems:"center", paddingTop:"20px"}}>
            <p>It's quite for now...</p>
            <p style={{color:"gray"}}>When a friend starts an activity - like playing a game or hanging out on voice - we'll show it here</p>
        </div>
    </div>
)}
