import React from 'react'
import { useNavigate } from 'react-router-dom'
function Sidebar() {
  const Navigate=useNavigate();
  return (
    <>
    <div className='m-3 position-fixed'>
    <div className='d-flex flex-column gap-3'>
        <img  className="logo-text"src="/images/instagram%20text.png"></img>
        <div> <i className="bi bi-house-door-fill"></i> Home</div>
        <div> <i className="bi bi-search"></i> Search</div>
        <div> <i className="bi bi-compass"></i> Explore</div>
        <div> <i className="bi bi-play-circle"></i>Reels</div>
        <div> <i className="bi bi-chat-dots"></i> Message</div>
        <div> <i className="bi bi-bell"></i> Notication</div>
        <div > <i className="bi bi-plus-circle"></i>Create</div>
        <div onClick={()=>{Navigate('/profile')}} style={{cursor:'pointer'}}> <i className="bi bi-person-circle"></i>Profile</div>
    </div>
    <div className='  position-fixed bottom-0  d-flex flex-column gap-3 mb-2'>
       <div> <i className="bi bi-threads"></i> Threads</div>
       <div> <i className="bi bi-list"></i> more</div>
    </div>
    </div>
    </>
  )
}

export default Sidebar