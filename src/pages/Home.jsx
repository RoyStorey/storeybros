import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/homepage.css";
import herobackground from "../media/background.png";
import backgroundVideo from "../media/test2.mp4";
import stockImage1 from "../media/advert1.png";
import stockImage2 from "../media/advert2.png";
import storeImage1 from "../media/store1.jpg";
import storeImage2 from "../media/store2.jpg";
import storeImage3 from "../media/background.png";
import storeImage4 from "../media/background.png";
import storeImage5 from "../media/background.png";
import storeImage6 from "../media/background.png";
import partner1 from "../media/logoipsum-358.png";
import partner2 from "../media/logoipsum-375.png";
import partner3 from "../media/logoipsum-388.png";
import partner4 from "../media/logoipsum-392.png";
import partner5 from "../media/logoipsum-404.png";
import { Link } from "react-router-dom";

export default function Home() {
	const heroText = "Warmth You Can Hold.";
	const ourStoryText =
		"Storey Bros. Hand Warmers began with one mission: no one should face winter without warmth. Every hand warmer we make helps us place another into the hands of the homeless. Warm hands save lives, restore dignity, and spark change. We don’t want cold homeless. We deliver warmth with purpose.";
	const weDoText =
		"We supply reliable hand warmers at scale and help businesses stay winter-ready. We partner with companies who buy for teams, customers, or retail, while supporting our give-back mission to deliver warmth to people experiencing homelessness. By helping companies stay winter-ready, we also move closer to our mission: fewer people left in the cold. Bulk orders and simple distribution.";

	return (
		<>
			<div className="front-page">
				<Header />
				<div className="home-hero">
					<img id="background-image" src={herobackground}></img>
					<div className="body-text-container deepgrayopaque">
						<p>{heroText}</p>
						<div className="body-text-container-row2">
							<Link className="button hero-button" to="/contact">
								<p2>Contact us</p2>
							</Link>
							<Link className="button hero-button" to="/contact">
								<p2 className="button red">Call us</p2>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="story-section">
				<div className="story-image-container">
					<img src={stockImage1} />
				</div>
				<div className="story-text-container">
					<div className="our-story-header">
						<p>Our Story</p>
					</div>
					<p className="our-story-text">{ourStoryText}</p>
					<Link className="more-about-us button red" to="/about">
						<p>More about us</p>
					</Link>
				</div>
			</div>
			<div className="wedo-section">
				<img src={stockImage2} />
				<div className="wedo-text-container">
					<div className="wedo-header">
						<h2>What we do</h2>
						<p>{weDoText}</p>
					</div>
					<Link className="find-out-more button red" to="/about">
						<p>Find out more</p>
					</Link>
				</div>
			</div>
			<div className="gallery-section">
				<div className="gallery-header">
					<p>Gallery</p>
				</div>
				<div className="gallery-container">
					<div className="gallery-row">
						<img src={storeImage1} />
						<img src={storeImage2} />
						<img src={storeImage3} />
					</div>
					<div className="gallery-row">
						<img src={storeImage4} />
						<img src={storeImage5} />
						<img src={storeImage6} />
					</div>
				</div>
				<Link className="check-out button red" to="/gallery">
					<p>View Gallery</p>
				</Link>
			</div>
			<div className="logo-row">
				<img src={partner1} />
				<img src={partner2} />
				<img src={partner3} />
				<img src={partner4} />
				<img src={partner5} />
			</div>
			<Footer />
		</>
	);
}
