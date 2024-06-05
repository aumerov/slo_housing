import React from 'react';
import './ReviewCard.css';

interface ReviewCardProps {
    rating: number;
    landlordRating: number;
    housingRating: number;
    likes: string;
    dislikes: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ rating, landlordRating, housingRating, likes, dislikes }) => {
    return (
        <div className="review-card">
            <p><strong>Overall Rating:</strong> {rating} Stars</p>
            <p><strong>Landlord Rating:</strong> {landlordRating}</p>
            <p><strong>Housing Rating:</strong> {housingRating}</p>
            <p><strong>Likes:</strong> {likes}</p>
            <p><strong>Dislikes:</strong> {dislikes}</p>
        </div>
    );
};

export default ReviewCard;
