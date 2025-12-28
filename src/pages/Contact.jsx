import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/contact.css";

export default function Contact() {
	return (
		<>
			<Header />
			<div className="gallery-hero">
				<h1>Contact Information</h1>
			</div>
			<div className="contact-container">
				<div className="contact-information">
					<h1>Contact</h1>
					<p>
						<b>Phone Number:</b> (517) 513-0220
					</p>
					<p>
						<b>Email:</b> storeyssm@gmail.com
					</p>
					<p>
						<b>Address:</b> 1200 Napoleon Rd. Jackson, MI 49203
					</p>
					<h3>Give us a call!</h3>
				</div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2954.6672960017504!2d-84.30068692339687!3d42.22155494383993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883d27a4e9b0135b%3A0xd723140f85fb1f09!2s1200%20Napoleon%20Rd%2C%20Jackson%2C%20MI%2049201!5e0!3m2!1sen!2sus!4v1766887277263!5m2!1sen!2sus"
					width="600"
					height="450"
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
			<Footer />
		</>
	);
}
