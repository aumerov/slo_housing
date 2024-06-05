import React from 'react';
import './ReviewCard.css';

interface ReviewCardProps {
    rating: number;
    landlordRating: number;
    housingRating: number;
    comments: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ rating, landlordRating, housingRating, comments }) => {
    return (
        <div className="review-card">
            <p>Anonymous User</p>
            <p><strong>Overall Rating:</strong> {rating} Stars</p>
            <p><strong>Landlord Rating:</strong> {landlordRating}</p>
            <p><strong>Housing Rating:</strong> {housingRating}</p>
            <p><strong>Comments:</strong> {comments}</p>
        </div>
    );
};

export default ReviewCard;
