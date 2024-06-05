import React from 'react';
import HousingInfo from '../components/HousingInfo';
import ReviewForm from '../components/ReviewForm';
import ReviewCard from '../components/ReviewCard';

const ReviewPage: React.FC = () => {
    return (
        <div className="page-content">
            <HousingInfo
                image="https://www.dci-engineers.com/uploads/projects/_1200x600_crop_center-center_none/CalPolySLOHousing_PhotoByBruceDamonte_09.jpg"
                landlordName="John Doe"
                address="1234 Main St, YourCity"
                overallRating={4}
            />
            <div className="review-form-container">
                <ReviewForm />
            </div>
            {/* Mock data for review cards, replace with dynamic data later */}
            <ReviewCard 
                rating={5}
                landlordRating={4}
                housingRating={4}
                likes="Great location and view."
                dislikes="Can be noisy at night."
            />
            {/* Additional ReviewCards would be added here */}
        </div>
    );
};

export default ReviewPage;
