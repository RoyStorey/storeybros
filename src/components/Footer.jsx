import logo from "../media/logo.png";
import "../styles/footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="footer-logo">
				<img src={logo} />
			</div>
			<div className="footer-row">
				<div className="footer-hours-container">
					<h2>Hours</h2>
					{/* <p>Monday & Friday: 9AM - 5PM</p> */}
					{/* <p>Tuesday - Thursday: 9AM - 4PM</p> */}
					{/* <p>Saturday: 9AM - 12PM</p> */}
					<p>Monday - Saturday: 09:00AM - 03:00PM</p>
				</div>
				<div className="footer-contact-container">
					<h2>Contact</h2>
					<p>(517) 513-0220</p>
					<p>storeyssm@gmail.com</p>
					<p>1200 Napoleon Rd. Jackson, MI 49203</p>
				</div>
			</div>
		</div>
	);
}
export default Footer;
