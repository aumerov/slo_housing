import React from 'react';
import './ReviewCard.css';


const ReviewCard: React.FC<{ rating: number, landlordRating: number, housingRating: number, likes: string, dislikes: string }> = ({ rating, landlordRating, housingRating, likes, dislikes }) => {
    // Helper function to create star ratings
    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => {
            return (
                <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
            );
        });
    };

    return (
        <div className="review-card">
            <div className="star-rating">{renderStars(5)}</div>
            <div className="review-content">
                <p><strong>Landlord Rating:</strong> {renderStars(landlordRating)}</p>
                <p><strong>Housing Rating:</strong> {renderStars(housingRating)}</p>
                <p><strong>Likes: </strong>{likes}</p>
                <p><strong>Dislikes: </strong>{dislikes}</p>
                <p>- Anonymous User</p>
            </div>
            {/* <div className="review-footer">
                <span className="tag">Uploads Slides</span>
                <span className="tag">Fast Response Time</span>
                <span className="tag">Flexible Attendance Policy</span>
            </div> */}
        </div>
    );
};

export default ReviewCard;
