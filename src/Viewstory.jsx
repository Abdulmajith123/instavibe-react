import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import db from '../db/db.json';

function Viewstory() {
    const { id, tot } = useParams();
    const navigate = useNavigate();

    const [storys, Setstory] = useState(null);
useEffect(() => {
    const selectedStory = db.rells.find(
        (item) => Number(item.id) === Number(id)
    );

    Setstory(selectedStory || null);
}, [id]);

    useEffect(() => {
        if (
            !Number.isInteger(Number(id)) ||
            Number(id) < 1 ||
            Number(id) > db.story.length
        ) {
            navigate('/', { replace: true });
        }
    }, [id, navigate]);

    if (!storys) {
        return <div>Loading...</div>;
    }

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
            {/* Previous story */}
            <Link
                to={`/story/${Number(id) - 1}/${db.story.length}`}
                style={{
                    pointerEvents: Number(id) <= 1 ? 'none' : 'auto'
                }}
                aria-label="Previous story"
            >
                <i className="bi bi-arrow-left-square"></i>
            </Link>

            {/* Story image */}
          <img
    className="vh-100"
    src={storys.image}
    alt="Reel"
    style={{ maxWidth: '80%', objectFit: 'contain' }}
    onError={(e) => console.log('Image failed:', e.target.src)}
/>

            {/* Next story */}
            <Link
                to={`/story/${Number(id) + 1}/${db.story.length}`}
                style={{
                    pointerEvents:
                        Number(id) >= db.story.length ? 'none' : 'auto'
                }}
                aria-label="Next story"
            >
                <i className="bi bi-arrow-right-square"></i>
            </Link>
        </div>
    );
}

export default Viewstory;