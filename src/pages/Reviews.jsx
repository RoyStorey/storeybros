import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/reviews.css";
import storeImage1 from "../media/storex6.jpg";
import storeImage2 from "../media/storex5.jpg";
import storeImage3 from "../media/storex4.jpg";
import storeImage4 from "../media/storex3.jpg";
import { Link } from "react-router-dom";

const testimonial_data = [{ img: storeImage1 }];

function TestimonialPanel(review_data) {
  return (
    <div className="reviews-section">
      <img src={review_data.img} />
      <div className="reviews-text-container">
        <div className="reviews-header">
          <p>
            At Storey Fireplace & Chimney, we offer high quality products that
            you can afford. While working with us, we will give your home the
            highest level of care possible for you. Excellence is what you can
            expect when you select our team.
          </p>
          <h3>Dedicated to Excellence</h3>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <>
      <Header />
      <dir className="reviews-hero">
        <h1>Customer Testimonials</h1>
      </dir>
      <TestimonialPanel review_data={testimonial_data} />
      <TestimonialPanel />
      <TestimonialPanel />
      <TestimonialPanel />
      <Footer />
    </>
  );
}
