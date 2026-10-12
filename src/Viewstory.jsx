import React, { useEffect, useState } from 'react'
import { Link, useParams ,useNavigate} from 'react-router-dom'

function Viewstory() {

const {id,tot} =useParams();  
console.log("id:", id)
const navigate=useNavigate();

const [storys,Setstory]=useState(null);

useEffect(()=>{
 fetch(`http://localhost:3000/rells/${id}`)
            .then((response) =>
                response.json())
            .then((data) =>{
                 console.log("image:", data.image)
                 Setstory(data)})      
},[id])

if(id>tot || id<=0){
     navigate('/');
}
  return (
    <>
     {storys && storys.image ? (
        
        <div className='d-flex vh-100 justify-content-center align-items-center'>
          <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i class="bi bi-arrow-left-square"></i></Link>
            <img  className='vh-100' src={storys.image} alt="story"></img>
            <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i class="bi bi-arrow-right-square"></i></Link>
            </div>):(<div>
            loading...
        </div>)}
        </>
  )
}

export default Viewstory