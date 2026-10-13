import React, { useEffect, useState } from 'react'

function Posts() {

    const [post, setpost] = useState([]);

   
    useEffect(() => {
        fetch('/db/db.json')
            .then((response) =>
                response.json())
            .then((data) => setpost(data.posts))
    }, [])
    const handlelike=(postId)=>{
         setpost((prevposts)=>
            prevposts.map((p)=>
                p.id===postId
                ?{...p,likes:p.likes+1}
                :p
            )
            
        )
        
    }
    return (

        <div className=' d-flex justify-content-center'>
            {post && post.length > 0 ? (
                <div>
                    {post.map((post) => (
                        <div className='my-3' key={post.id}>
                            <div className='d-flex'  >
                                <img className=" dp rounded-circle" src={post.user.profile_pic} alt='profilepic'></img>
                                <h5>{post.user.username}</h5>
                            </div>
                            <img className="image" src={post.image} alt='postimage'></img>
                            <div className='d-flex'>
                                <div onClick={()=>handlelike(post.id)}> <i className="bi bi-hand-thumbs-up like-btn"></i></div>
                                <div> <i class="bi bi-chat"></i></div>
                                <div><i className="bi bi-send"></i></div>
                            </div>
                            <div>
                                <b>{(post.likes)} Likes</b>
                            </div>
                            <p>{post.caption}</p>


                        </div>
                    ))}
                </div>




            ) :
                (
                    <div>loading....</div>
                )}
        </div>

    )
}

export default Posts