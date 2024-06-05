import React from 'react';
import './ReviewCard.css';


const ReviewCard: React.FC<{ rating: number, landlordRating: number, housingRating: number, comments: string }> = ({ rating, landlordRating, housingRating, comments }) => {
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
            <div className="star-rating">{renderStars(rating)}</div>
            <div className="review-content">
                <p><strong>Landlord Rating:</strong> {renderStars(landlordRating)}</p>
                <p><strong>Housing Rating:</strong> {renderStars(housingRating)}</p>
                <p>{comments}</p>
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
