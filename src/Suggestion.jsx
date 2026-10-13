import React, { useState, useEffect } from 'react';
import db from '../db/db.json';

function Suggestion() {
    const [profile, setprofile] = useState(null);
    const [suggestion, setsuggestion] = useState([]);
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        setprofile(db.profile);
        setsuggestion(db.suggestion || []);
        setFollowers(db.followers || []);
    }, []);

    const handlefollow = (id, username) => {
        const alreadyFollowing = followers.some(
            (follower) => String(follower.id) === String(id)
        );

        if (alreadyFollowing) {
            alert('Already following');
            return;
        }

        setFollowers((prevFollowers) => [
            ...prevFollowers,
            { id, username }
        ]);

        alert('Followed successfully!');
    };

    return (
        <>
            {profile ? (
                <div className="w-75 suggestion">
                    <div className="my-3" key={profile.id}>
                        <div className="d-flex">
                            <img
                                className="dp rounded-circle"
                                src={profile.profile_pic}
                                alt="profile"
                            />
                            <h6>{profile.username}</h6>
                            <small className="ms-auto text-primary">
                                switch
                            </small>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}

            <div className="d-flex w-75">
                <p>Suggestions for you</p>
                <p className="ms-auto">See all</p>
            </div>

            {suggestion.length > 0 ? (
                <div>
                    {suggestion.map((item) => {
                        const isFollowing = followers.some(
                            (follower) =>
                                String(follower.id) === String(item.id)
                        );

                        return (
                            <div className="my-1" key={item.id}>
                                <div className="d-flex w-75">
                                    <img
                                        className="dp rounded-circle"
                                        src={item.profile_pic}
                                        alt={item.username}
                                    />

                                    <h6>{item.username}</h6>

                                    <button
                                        type="button"
                                        className="ms-auto text-primary border-0 bg-transparent"
                                        onClick={() =>
                                            handlefollow(
                                                item.id,
                                                item.username
                                            )
                                        }
                                    >
                                        {isFollowing ? 'Following' : 'Follow'}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div>No suggestions available.</div>
            )}
        </>
    );
}

export default Suggestion;