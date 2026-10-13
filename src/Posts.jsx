import React, { useEffect, useState } from 'react';
import db from '../db/db.json';

function Posts() {
const [post, setpost] = useState([]);

useEffect(() => {
    setpost(db.posts || []);
}, []);

const handlelike = (postId) => {
    setpost((prevPosts) =>
        prevPosts.map((p) =>
            String(p.id) === String(postId)
                ? { ...p, likes: p.likes + 1 }
                : p
        )
    );
};

return (
    <div className="d-flex justify-content-center">
        {post.length > 0 ? (
            <div>
                {post.map((item) => (
                    <div className="my-3" key={item.id}>
                        <div className="d-flex">
                            <img
                                className="dp rounded-circle"
                                src={item.user.profile_pic}
                                alt="profilepic"
                            />
                            <h5>{item.user.username}</h5>
                        </div>

                        <img
                            className="image"
                            src={item.image}
                            alt="postimage"
                        />

                        <div className="d-flex">
                            <div onClick={() => handlelike(item.id)}>
                                <i className="bi bi-hand-thumbs-up like-btn"></i>
                            </div>

                            <div>
                                <i className="bi bi-chat"></i>
                            </div>

                            <div>
                                <i className="bi bi-send"></i>
                            </div>
                        </div>

                        <div>
                            <b>{item.likes} Likes</b>
                        </div>

                        <p>{item.caption}</p>
                    </div>
                ))}
            </div>
        ) : (
            <div>No posts available.</div>
        )}
    </div>
);

}

export default Posts;