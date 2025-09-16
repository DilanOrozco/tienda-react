// src/features/home/pages/HomePage.jsx
import React from "react";
import "./HomePage.css";

export function HomePage() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Vinilos Clásicos y Modernos</h1>
          <p>Descubre la mejor selección de discos en nuestra tienda.</p>
          <button className="cta-btn">Explorar Colección</button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured">
        <h2>Destacados</h2>
        <div className="featured-grid">
          <div className="card">
            <img
              src="https://lamerch.pe/cdn/shop/products/PinkFloyd-TheDarkSideOfTheMoon_Vinilo_452ad2c5-5693-4aae-bbe2-4b94d465ecbf_1200x.jpg?v=167917"
              alt="Dark Side of the Moon"
            />
            <h3>Pink Floyd - Dark Side of the Moon</h3>
            <p>$69.99</p>
          </div>
          <div className="card">
            <img
              src="https://udiscovermusic.co/cdn/shop/files/602577915123_-_abbey_road_anniversary_lp_-_A.png?v=1719440855"
              alt="Abbey Road"
            />
            <h3>The Beatles - Abbey Road</h3>
            <p>$59.99</p>
          </div>
          <div className="card">
            <img
              src="https://m.media-amazon.com/images/I/41YtOWjwPcL._UF1000,1000_QL80_.jpg"
              alt="Thriller"
            />
            <h3>Michael Jackson - Thriller</h3>
            <p>$74.99</p>
          </div>
        </div>
      </section>
    </div>
  );
}
