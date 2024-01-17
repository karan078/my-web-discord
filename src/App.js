import './App.css';
import SideBar from './Components/Home/SideBar'
import './CSS/Home/SideBar.css'
import './CSS/Home/UserChoice.css'
import UserChoice from './Components/Home/UserChoice'
import Nav from './Components/Home/Nav';
import './CSS/Home/Nav.css'
import ActiveNow from './Components/ActiveNow';
import {Routes,Route} from 'react-router-dom';
import Online from './Components/Nav/Online';
import All from './Components/Nav/All';
import Blocked from './Components/Nav/Blocked';
import Pending from './Components/Nav/Pending';
import AddFriend from './Components/Nav/AddFriend';
function App() {
  return (
    <>
    <div className="alignment" style={{display:"flex",height:"100vh"}}>
      <SideBar/>
      {/* <img src={image} alt="not loaded" /> */}
      <UserChoice/>
      <div className="my-nav" style={{width:"100%",height:"100%", display:"flex", flexDirection:"column"}}>
        <Nav></Nav>
        <div style={{height:"100%"}}>
          <div style={{height:"100%", display:"flex"}}>
            <div style={{width:"70%", color:"white", borderLeft:"2px solid gray"}}>
              <Routes>
                <Route path="/Online" element={<Online/>}></Route>
                <Route path='/All' element={<All/>}></Route>
                <Route path='/Blocked' element={<Blocked/>}></Route>
                <Route path='/Pending' element={<Pending/>}></Route>
                <Route path='/' element={<AddFriend/>}></Route>
              </Routes>
            </div>
            <ActiveNow></ActiveNow>
          </div>
        </div>
      </div>
    </div>
      
      {/* <Nav></Nav> */}
      {/* <ActiveNow></ActiveNow> */}
    </>
  );
}
export default App;
