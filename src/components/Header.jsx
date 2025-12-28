import "../styles/header.css";
import logo from "../media/logo.png";
import { Link } from "react-router-dom";

function Header() {
	return (
		<>
			<div class="hero">
				<img src={logo} />
			</div>
			<div className="deepgrayopaque" id="sub-header">
				<div className="header-container">
					<Link className="header-item button" to="/">
						Home
					</Link>
					<Link className="header-item button" to="/about">
						About
					</Link>
					<Link className="header-item button" to="/gallery">
						Gallery
					</Link>
					<Link className="header-item button" to="/contact">
						Contact
					</Link>
				</div>
			</div>
		</>
	);
}

export default Header;
