import React from 'react'

function SideBar() {
    return (
        <div style={{height:"100vh", width:"80px", border: "2px solid black", padding:"10px", background:"black", paddingLeft:"0px"}}>

            <div className="my-box-container" style={{display:"flex"}}>
                <p style={{height:"40px", width:"10px", background:"white", borderRadius:"10px", position:"relative", left:"-6px", alignSelf:"center"}}></p>
                <div className="discord-symbol" style={{display:"flex", flexDirection:"column", gap:"8px"}}>
                    <div className="logo" style={{width:"50px",  height:"50px", border:"2px solid black", background:"grey", borderRadius:"16px"}}></div>
                </div>
            </div>

            <div className="box-1" style={{display:"flex", flexDirection:"column", gap:"10px",alignItems:"center", paddingLeft:"6px"}}>
                <p style={{width:"34px", border:"2px solid grey", alignSelf:"center",marginTop:"8px"}}></p>

                <div className="discord-symbol" style={{display:"flex", flexDirection:"column", gap:"8px"}}>
                    <div className = "add-server" style={{width:"50px",  height:"50px", border:"2px solid   black", background:"grey", borderRadius:"50%"}}></div>
                    <div className="discover-server" style={{width:"50px",  height:"50px", border:"2px solid black", background:"grey", borderRadius:"50%"}}></div>
                    <p style={{width:"34px", border:"2px solid grey", alignSelf:"center"}}></p>
                </div>

                <div className="doenload-app" style={{width:"50px",  height:"50px", border:"2px solid black", background:"grey", borderRadius:"50%"}}></div>
            </div>
        </div>
    )
}
export default SideBar;
