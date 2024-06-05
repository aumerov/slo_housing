import React from "react";
import { Link } from "react-router-dom";
import HousingInfo from "../components/HousingInfo";
import { housingOptions } from '../data/housingOptions';
import "./HomePage.css";

const HomePage: React.FC = () => {
	return (
		<div className="home-page">
			{housingOptions.map((housing) => (
				<Link
					to={`/review/${housing.id}`}
					key={housing.id}
					className="housing-card-link"
				>
					<HousingInfo {...housing} />
				</Link>
			))}
		</div>
	);
};

export default HomePage;
