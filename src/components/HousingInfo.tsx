import React from 'react';
import './HousingInfo.css';

interface HousingInfoProps {
    image: string;
    landlordName: string;
    address: string;
    overallRating?: number;  // Optional for now, to be implemented later
}

const HousingInfo: React.FC<HousingInfoProps> = ({ image, landlordName, address, overallRating }) => {
    return (
        <div className="housing-info">
            <img src={image} alt="Housing" className="housing-image"/>
            <div className="housing-details">
                <h2>{landlordName}</h2>
                <p>{address}</p>
                {overallRating && <p>Overall Rating: {overallRating} Stars</p>}
            </div>
        </div>
    );
};

export default HousingInfo;
