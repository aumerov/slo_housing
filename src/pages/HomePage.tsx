import React from "react";
import { Link } from "react-router-dom";
import HousingInfo from "../components/HousingInfo";
import "./HomePage.css";

const HomePage: React.FC = () => {
	const housingOptions = [
		{
			id: 1,
			image: "https://www.dci-engineers.com/uploads/projects/_1200x600_crop_center-center_none/CalPolySLOHousing_PhotoByBruceDamonte_09.jpg",
			landlordName: "Cal Poly University",
			address: "1 Grand Ave, San Luis Obispo, CA 93401",
			overallRating: 3,
		},
		{
			id: 2,
			image: "https://images.cdn.appfolio.com/rpmca036/images/f5375d2e-5131-492b-b824-6cb54b691275/medium.jpg",
			landlordName: "RPM Central Coast",
			address: "580 Pacific St, San Luis Obispo, CA 93401",
			overallRating: 5,
		},
        {
			id: 3,
			image: "https://img.zumpercdn.com/715422311/1280x960?dpr=1&fit=crop&h=542&q=76&w=991",
			landlordName: "California-West, Inc.",
			address: "1850 Johnson Ave, San Luis Obispo, CA 93401",
			overallRating: 4,
		},
	];

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
