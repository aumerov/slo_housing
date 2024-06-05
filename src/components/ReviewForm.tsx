import React, { useState } from 'react';
import './ReviewForm.css';

interface ReviewFormProps {
    addReview: (review: any) => void;  // Callback function to add a new review to the housing data
}

const ReviewForm: React.FC<ReviewFormProps> = ({ addReview }) => {
    const [rating, setRating] = useState(0);
    const [landlordRating, setLandlordRating] = useState(0);
    const [housingRating, setHousingRating] = useState(0);
    const [comments, setcomments] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newReview = {
            rating,
            landlordRating,
            housingRating,
            comments,
            
        };
        addReview(newReview);
        // Reset form fields
        setRating(0);
        setLandlordRating(0);
        setHousingRating(0);
        setcomments('');
    };
    return (
        <form className= "review-form" onSubmit={handleSubmit}>
            <h1>Leave a review!</h1>
            <label>
                Overall Rating:
                <input type="number" value={rating} onChange={e => setRating(parseInt(e.target.value))} min="1" max="5" />
            </label>
            <label>
                Landlord Rating:
                <input type="number" value={landlordRating} onChange={e => setLandlordRating(parseInt(e.target.value))} min="1" max="5" />
            </label>
            <label>
                Housing Rating:
                <input type="number" value={housingRating} onChange={e => setHousingRating(parseInt(e.target.value))} min="1" max="5" />
            </label>
            <label>
                Comments:
                <textarea value={comments} onChange={e => setcomments(e.target.value)} />
            </label>
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
