import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/home.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="home-container">
      <section className="hero" data-aos="fade-up">
        <h1>Welcome to Our E-commerce Store</h1>
        <p>Discover the best deals and latest products</p>
      </section>

      <section className="promo " data-aos="fade-left">
        <h2>Special Promotions</h2>
        <p>Get discounts on your favorite products now!</p>
      </section>

      <section className="about-us" data-aos="fade-up">
        <h2>About Us</h2>
        <p>We are committed to providing the best products at the best prices.</p>
      </section>
    </div>
  );
};

export default Home;
