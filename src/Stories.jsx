import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import db from '../db/db.json';

function Stories() {
    const [story, setstory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setstory(db.story || []);
    }, []);

    const tot = story.length;

    return (
        <div className="d-flex gap-2 story">
            {story.length > 0 ? (
                story.map((item) => (
                    <div
                        className="my-3 story"
                        key={item.id}
                        onClick={() =>
                            navigate(`/story/${item.id}/${tot}`)
                        }
                        style={{ cursor: 'pointer' }}
                    >
                        <div>
                            <div className="gradient-border">
                                <img
                                    src={item.user.profile_pic}
                                    alt={`${item.user.username}'s profile`}
                                    className="story-dp rounded-circle"
                                />
                            </div>

                            <p
                                className="text-truncate"
                                style={{ width: '50px' }}
                            >
                                {item.user.username}
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <div>No stories available.</div>
            )}
        </div>
    );
}

export default Stories;