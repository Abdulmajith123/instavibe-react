import React, { useState,useEffect } from 'react'
import axios from 'axios';
function Suggestion() {
   const [profile, setprofile] = useState(null);
   const[suggestion,setsuggestion]=useState([]);
      useEffect(() => {
          fetch('http://localhost:3000/suggestion')
              .then((response) =>
                  response.json())
              .then((data) => setsuggestion(data))
      }, [])
      useEffect(() => {
          fetch('http://localhost:3000/profile')
              .then((response) =>
                  response.json())
              .then((data) => setprofile(data))
      }, [])

      const handlefollow=async(id,username)=>{
        axios.post('http://localhost:3000/followers',{"id":id,"username":username})
        alert("followed")
        .catch(err=>console.log(err))
      }


  return (
    <>
    {profile ? 
    <div>

      <div className='w-75  suggestion'>
<div className='my-3' key={profile.id}>
                             <div className='d-flex'  >
                                <img className=" dp rounded-circle" src={profile.profile_pic} alt='profilepic'></img>
                             <h6>{profile.username}</h6>
                             <small className='ms-auto  text-primary'>switch</small>
                             </div>
                             </div>
                             </div>
                          
      </div>
         :<p>loading</p>}
         <div className='d-flex w-75'>
           <p>suggestion for you</p>
           <p  className='ms-auto'>see all</p>
         </div>
           {suggestion.length > 0 ? (
                <div>
                    {suggestion.map((suggestion) => (
                        <div className='my-1' key={suggestion.id}>
                            <div className='d-flex w-75'  >
                                <img className=" dp rounded-circle" src={suggestion.profile_pic} alt='profilepic'></img>
                                <h6>{suggestion.username}</h6>
                                 <a className='ms-auto   text-primary 'onClick={()=>{handlefollow(suggestion.id,suggestion.username)}}>Follow</a>
                            </div>
                        </div>
                    ))}
                </div>


            ) :
                (
                    <div>loading....</div>
                )}
     
  </>
  );
}

export default Suggestion