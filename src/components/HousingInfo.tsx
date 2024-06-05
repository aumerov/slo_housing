import React from 'react';
import './HousingInfo.css';

interface HousingInfoProps {
    image: string;
    landlordName: string;
    address: string;
    overallRating?: number;  // Optional for now
}

const HousingInfo: React.FC<HousingInfoProps> = ({ image, landlordName, address, overallRating }) => {
    // Function to render star ratings
    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, i) => (
            <span key={i} className={`star ${i < rating ? 'filled' : 'empty'}`}>★</span>
        ));
    };

    return (
        <div className="housing-info">
            <img src={image} alt="Housing" className="housing-image"/>
            <div className="housing-details">
                <h2>{landlordName}</h2>
                <p>{address}</p>
                {overallRating !== undefined && (
                    <p>
                        <strong>Overall Rating: </strong> 
                        <span className="rating-stars">
                            {renderStars(overallRating)}
                        </span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default HousingInfo;
