import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { housingOptions } from '../data/housingOptions';
import HousingInfo from '../components/HousingInfo';
import ReviewForm from '../components/ReviewForm';
import ReviewCard from '../components/ReviewCard';
import "./ReviewPage.css";

const ReviewPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [housing, setHousing] = useState(housingOptions.find(h => h.id.toString() === id));

    if (!housing) return <div>No housing found</div>;

    const addReview = (newReview: any) => {
        const updatedReviews = [...housing.reviews, newReview];
        const updatedHousing = { ...housing, reviews: updatedReviews };
        setHousing(updatedHousing);
    };

    return (
        <div className="page-content">
            <HousingInfo {...housing} />
            <ReviewForm addReview={addReview} />
            {housing.reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
            ))}
        </div>
    );
};

export default ReviewPage;
