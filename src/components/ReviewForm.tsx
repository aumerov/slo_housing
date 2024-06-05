import React, { useState } from 'react';
import './ReviewForm.css';

interface ReviewFormProps {
    addReview: (review: any) => void;  // Callback function to add a new review to the housing data
}

const ReviewForm: React.FC<ReviewFormProps> = ({ addReview }) => {
    const [rating, setRating] = useState(0);
    const [landlordRating, setLandlordRating] = useState(0);
    const [housingRating, setHousingRating] = useState(0);
    const [likes, setLikes] = useState('');
    const [dislikes, setDislikes] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newReview = {
            rating,
            landlordRating,
            housingRating,
            likes,
            dislikes
        };
        addReview(newReview);
        // Reset form fields
        setRating(0);
        setLandlordRating(0);
        setHousingRating(0);
        setLikes('');
        setDislikes('');
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
                What did you like about your housing? 
                <textarea value={likes} onChange={e => setLikes(e.target.value)} />
            </label>
            <label>
            What did you not like about your housing? 👀☕
                <textarea value={dislikes} onChange={e => setDislikes(e.target.value)} />
            </label>
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
