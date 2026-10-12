import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'bootstrap';
function Profile() {
    const [profile,setprofile]=useState(null);
       const [followers,setfollowers]=useState([]);
       const[unfollow,setunfollow]=useState(0);
useEffect(()=>{
    axios.get('http://localhost:3000/profile')
    .then((data)=>setprofile(data.data))
    .catch((err) =>console.log(err))

 axios.get('http://localhost:3000/followers')
 .then((data)=>setfollowers(data.data))
 .catch((err) =>console.log(err))

},[unfollow])

function handleonchange(e){
 setprofile(prev =>({
    ...prev,[e.target.name]:e.target.value
 }))

 
}
const handleunfollow=async(id)=>{
    axios.delete(`http://localhost:3000/followers/${id}`)
    .then(alert("unfollowed"))
    .then(setunfollow(!unfollow))
    .catch(err=>(console.log(err)))
 }
  return (
    <>
    <div className='m-3'>
{profile ?(
    
<div >
    <img  className=" profile rounded-circle"src={profile.profile_pic}></img>
    <h5>{profile.username}</h5>
    <input type="text"
     value={profile.username}
     className='form-control my-4'
     name="username" onChange={handleonchange}/>
    
    <input type="text"
     value={profile.profile_pic}
      className='form-control my-4'
     name="profile_pic" onChange={handleonchange}/>

     <button className='btn btn-primary'>update</button>
    </div>)
    
    :
(<div>loading..</div>)}

{followers.length >0 ?(
    
    followers.map(follower=>(
 <div className='d-flex my-2'  key={follower.id}>
     <h6>{follower.username}</h6>
     <button className='btn btn-danger ms-auto ' onClick={()=>{handleunfollow(follower.id)}}>un follow</button>
</div>
    ))
   ):(<div>loading</div>)}

 </div>
 </>   
  )
}

export default Profile