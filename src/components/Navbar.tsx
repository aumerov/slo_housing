import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Importing CSS for styles

const Navbar: React.FC = () => {
	return (
		<nav className="navbar">
			<div className="nav-item">
				<Link to="/" className="nav-link">
					Home
				</Link>
			</div>
			<div className="nav-item">
				<input
					type="search"
					className="search-bar"
					placeholder="Search housing options"
				/>
			</div>
			<div className="nav-item">
				<Link to="/login" className="nav-link">
					Login
				</Link>
				<Link to="/review/1" className="nav-link">
					Review
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
