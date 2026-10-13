import React, { useEffect, useState } from 'react';
import db from '../db/db.json';

function Profile() {
    const [profile, setprofile] = useState(null);
    const [followers, setfollowers] = useState([]);

    useEffect(() => {
        setprofile(db.profile);
        setfollowers(db.followers || []);
    }, []);

    function handleonchange(e) {
        setprofile((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const handleunfollow = (id) => {
        setfollowers((prevFollowers) =>
            prevFollowers.filter(
                (follower) => String(follower.id) !== String(id)
            )
        );

        alert('Unfollowed');
    };

    const handleUpdate = () => {
        alert('Profile updated on this page only. Changes are not permanently saved.');
    };

    return (
        <div className="m-3">
            {profile ? (
                <div>
                    <img
                        className="profile rounded-circle"
                        src={profile.profile_pic}
                        alt="profile"
                    />

                    <h5>{profile.username}</h5>

                    <input
                        type="text"
                        value={profile.username}
                        className="form-control my-4"
                        name="username"
                        onChange={handleonchange}
                    />

                    <input
                        type="text"
                        value={profile.profile_pic}
                        className="form-control my-4"
                        name="profile_pic"
                        onChange={handleonchange}
                    />

                    <button
                        className="btn btn-primary"
                        onClick={handleUpdate}
                    >
                        Update
                    </button>
                </div>
            ) : (
                <div>Loading...</div>
            )}

            {followers.length > 0 ? (
                followers.map((follower) => (
                    <div className="d-flex my-2" key={follower.id}>
                        <h6>{follower.username}</h6>

                        <button
                            className="btn btn-danger ms-auto"
                            onClick={() => handleunfollow(follower.id)}
                        >
                            Unfollow
                        </button>
                    </div>
                ))
            ) : (
                <div>No followers available.</div>
            )}
        </div>
    );
}

export default Profile;