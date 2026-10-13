import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import db from '../db/db.json';

function Viewstory() {
    const { id, tot } = useParams();
    const navigate = useNavigate();

    const [storys, Setstory] = useState(null);

    // Get story from imported JSON
    useEffect(() => {
       
        const selectedStory = db.rells.find(
        (item) => Number(item.id) === Number(id)
    );
    Setstory(selectedStory || null);
    }, [id]);

    // Validate story ID
    useEffect(() => {
        if (Number(id) < 1 || Number(id) > Number(tot)) {
            navigate('/', { replace: true });
        }
    }, [id, tot, navigate]);

    return (
        <>
            {storys && storys.image ? (
                <div className="d-flex vh-100 justify-content-center align-items-center">

                    {/* Previous story */}
                    <Link
                        to={`/story/${Number(id) - 1}/${tot}`}
                        onClick={(e) => {
                            if (Number(id) <= 1) e.preventDefault();
                        }}
                        style={{
                            pointerEvents: Number(id) <= 1 ? 'none' : 'auto'
                        }}
                    >
                        <i className="bi bi-arrow-left-square"></i>
                    </Link>

                    {/* Story image */}
                    <img
                        className="vh-100"
                        src={storys.image}
                        alt="story"
                        style={{ maxWidth: '80%', objectFit: 'contain' }}
                        onError={(e) => console.log('Image failed to load:', e.target.src)}
                    />

                    {/* Next story */}
                    <Link
                        to={`/story/${Number(id) + 1}/${tot}`}
                        onClick={(e) => {
                            if (Number(id) >= Number(tot)) e.preventDefault();
                        }}
                        style={{
                            pointerEvents: Number(id) >= Number(tot) ? 'none' : 'auto'
                        }}
                    >
                        <i className="bi bi-arrow-right-square"></i>
                    </Link>

                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}

export default Viewstory;