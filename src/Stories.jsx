import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Stories() {
  const [story, setstory] = useState([])
 const navigate=useNavigate();
  useEffect(() => {
    fetch('http://localhost:3000/story')
      .then((response) =>
        response.json())
      .then((data) => setstory(data))
  }, [])
const tot=story.length;

  return (
    
<>
<div className='d-flex gap-2 story  '>
  <div className='d-none'>{tot}</div>
      {story.length > 0 ? (
        story.map((item) => (
          <div className='my-3 story ' key={item.id} onClick={()=>{navigate(`/story/${item.id}/${tot}`)}}>
             <div >
              <div className='gradient-border'> <img src={item.user.profile_pic} alt="dp" className='story-dp rounded-circle'></img></div>
              
               <p className='text-truncate' style={{width:"50px"}}>{item.user.username}</p>
               </div>
          </div>
         
         
        ))
      ) : (
        <div>loading</div>
      )}
      </div>
  </>
  )
 
}

export default Stories