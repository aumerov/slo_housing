import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm: React.FC = () => {
    const [rating, setRating] = useState(1);
    const [landlordRating, setLandlordRating] = useState(1);
    const [housingRating, setHousingRating] = useState(1);
    const [likes, setLikes] = useState('');
    const [dislikes, setDislikes] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here, you would normally handle the submission to the database
        console.log({ rating, landlordRating, housingRating, likes, dislikes });
        alert('Review submitted!');
    };

    return (
        <form className="review-form" onSubmit={handleSubmit}>
            <label>
                Star Rating:
                <input type="number" value={rating} onChange={e => setRating(parseInt(e.target.value))} min="1" max="5" />
            </label>
            <label>
                Rate your experience with your landlord:
                <input type="number" value={landlordRating} onChange={e => setLandlordRating(parseInt(e.target.value))} min="1" max="5" />
            </label>
            <label>
                Rate your overall housing experience:
                <input type="number" value={housingRating} onChange={e => setHousingRating(parseInt(e.target.value))} min="1" max="5" />
            </label>
            <label>
                What did you like about your housing?
                <textarea value={likes} onChange={e => setLikes(e.target.value)} />
            </label>
            <label>
                What did you NOT like about your housing?
                <textarea value={dislikes} onChange={e => setDislikes(e.target.value)} />
            </label>
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
