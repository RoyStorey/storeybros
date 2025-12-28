import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/gallery.css";
import storeImage1 from "../media/storex1.jpg";
import storeImage2 from "../media/storex2.jpg";
import storeImage3 from "../media/storex3.jpg";
import storeImage4 from "../media/storex4.jpg";
import storeImage5 from "../media/storex5.jpg";
import storeImage6 from "../media/storex6.jpg";

export default function Gallery() {
	return (
		<>
			<Header />
			<dir className="gallery-hero">
				<h1>Gallery</h1>
			</dir>
			<div className="gallery-wedo-section">
				<img src={storeImage1} />
				<div className="gallery-wedo-text-container">
					<div className="gallery-wedo-header">
						<h2>Ready for the Cold</h2>
						<p>
							At Storey Bros. Hand Warmers, we offer high quality
							hand warmers that you can afford. Our team is driven
							to supply hand warmers for every person in need for
							this holiday season, and through the entire year.
							Below, you can see pictures of many of our happy
							customers.
						</p>
					</div>
					<div className="find-out-more red button">
						<Link to="/contact">
							<p>Contact us</p>
						</Link>
					</div>
				</div>
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
				<div className="gallery-row">
					<img src={storeImage4} />
					<img src={storeImage5} />
					<img src={storeImage6} />
				</div>
				<div className="gallery-row">
					<img src={storeImage4} />
					<img src={storeImage5} />
					<img src={storeImage6} />
				</div>
			</div>
			<Footer />
		</>
	);
}
