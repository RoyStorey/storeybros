import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
// import Services from "./pages/Services.jsx";
import Gallery from "./pages/Gallery.jsx";
// import Reviews from "./pages/Reviews.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				{/* <Route path="services" element={<Services />} /> */}
				<Route path="gallery" element={<Gallery />} />
				{/* <Route path="reviews" element={<Reviews />} /> */}
				<Route path="contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
