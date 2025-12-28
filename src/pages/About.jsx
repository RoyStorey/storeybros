import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/about.css";
import "../styles/homepage.css";
import "../styles/header.css";
import storeImage1 from "../media/background.png";
import storeImage2 from "../media/background.png";

export default function About() {
	const subHeader = "Warmth You Can Hold";
	const historyText =
		"Storey Bros. Hand Warmers is an American company established in December of 2025. Based out of mid-Michigan, our mission is to provide hand warmers to any person facing the cold of winter; whether it be blue collar workers, homeless people, or people with inadequate heating during the winter. Our vision is for every convenience store in Jackson Michigan to sell hand warmers, thus eliminating cold hands during the holiday season.";
	const historyTextTwo =
		"From inception, Storey Bros. Hand Warmers has had community impact in mind. Our goal is to donate X% of earnings to charitable organizations focused on providing housing for people in need. With transparency being one of our three tenets, we will maintain this goal foor as long as we can support it.";
	const tenetOne = [
		"Warmth",
		"We deliver reliable hand warmers to keep everyone warm wherever the cold strikes.",
	];
	const tenetTwo = [
		"Impact",
		"Our mission turns every product into a small act of kindness for people in need.",
	];
	const tenetThree = [
		"Transparency",
		"We operate openly and honestly. We share our mission, distribution, and progress so you know exactly how your support helps.",
	];

	return (
		<>
			<Header />
			<dir className="about-hero">
				<h1>Our History</h1>
				<h2>{subHeader}</h2>
			</dir>
			<div className="rows">
				<div className="row about-row">
					<div className="about-picture">
						<img src={storeImage2}></img>
					</div>
					<div>
						<p>{historyText}</p>
					</div>
				</div>
				<div className="row about-row">
					<div className="about-picture">
						<img src={storeImage1}></img>
					</div>
					<div>
						<p>{historyTextTwo}</p>
					</div>
				</div>
				<div className="about-bottom-row row about-row">
					<div className="about-bottom-row-segment">
						<svg
							viewBox="0 0 640 640"
							className="about-segment-icon"
						>
							<path d="M448 448L160 448L101.4 242.9C97.8 230.4 96 217.4 96 204.3C96 126.8 158.8 64 236.3 64L239.7 64C305.7 64 363.2 108.9 379.2 172.9L410.6 298.7L428.2 278.6C440.8 264.2 458.9 256 478 256L480.8 256C515.7 256 544.1 284.3 544.1 319.3C544.1 335.2 538.1 350.5 527.3 362.2L448 448zM128 528C128 510.3 142.3 496 160 496L448 496C465.7 496 480 510.3 480 528L480 544C480 561.7 465.7 576 448 576L160 576C142.3 576 128 561.7 128 544L128 528z" />
						</svg>
						<h2>{tenetOne[0]}</h2>
						<p>{tenetOne[1]}</p>
					</div>
					<div className="about-bottom-row-segment">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="about-segment-icon"
							viewBox="0 0 640 640"
						>
							<path d="M334.3 51.4C325.3 46.9 314.7 46.9 305.7 51.4L49.7 179.4C33.9 187.3 27.5 206.5 35.4 222.3C43.3 238.1 62.5 244.5 78.3 236.6L320 115.8L561.7 236.6C577.5 244.5 596.7 238.1 604.6 222.3C612.5 206.5 606.1 187.3 590.3 179.4L334.3 51.4zM320 336C350.9 336 376 310.9 376 280C376 249.1 350.9 224 320 224C289.1 224 264 249.1 264 280C264 310.9 289.1 336 320 336zM320 384C267 384 224 427 224 480L224 512C224 529.7 238.3 544 256 544L384 544C401.7 544 416 529.7 416 512L416 480C416 427 373 384 320 384zM192 320C192 293.5 170.5 272 144 272C117.5 272 96 293.5 96 320C96 346.5 117.5 368 144 368C170.5 368 192 346.5 192 320zM544 320C544 293.5 522.5 272 496 272C469.5 272 448 293.5 448 320C448 346.5 469.5 368 496 368C522.5 368 544 346.5 544 320zM144 400C99.8 400 64 435.8 64 480L64 513.1C64 530.1 77.8 544 94.9 544L182.7 544C178.4 534.2 176 523.4 176 512L176 464C176 445.6 179.5 428 185.8 411.8C173.6 404.3 159.3 400 144 400zM457.4 544L545.2 544C562.2 544 576.1 530.2 576.1 513.1L576.1 480C576.1 435.8 540.3 400 496.1 400C480.8 400 466.5 404.3 454.3 411.8C460.6 428 464.1 445.6 464.1 464L464.1 512C464.1 523.4 461.7 534.2 457.4 544z" />
						</svg>
						<h2>{tenetTwo[0]}</h2>
						<p>{tenetTwo[1]}</p>
					</div>
					<div className="about-bottom-row-segment">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="about-segment-icon"
							viewBox="0 0 640 640"
						>
							<path d="M320 205.3L320 514.6L320.5 514.4C375.1 491.7 433.7 480 492.8 480L512 480L512 160L492.8 160C450.6 160 408.7 168.4 369.7 184.6C352.9 191.6 336.3 198.5 320 205.3zM294.9 125.5L320 136L345.1 125.5C391.9 106 442.1 96 492.8 96L528 96C554.5 96 576 117.5 576 144L576 496C576 522.5 554.5 544 528 544L492.8 544C442.1 544 391.9 554 345.1 573.5L332.3 578.8C324.4 582.1 315.6 582.1 307.7 578.8L294.9 573.5C248.1 554 197.9 544 147.2 544L112 544C85.5 544 64 522.5 64 496L64 144C64 117.5 85.5 96 112 96L147.2 96C197.9 96 248.1 106 294.9 125.5z" />
						</svg>
						<h2>{tenetThree[0]}</h2>
						<p>{tenetThree[1]}</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
