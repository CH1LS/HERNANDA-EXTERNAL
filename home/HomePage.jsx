import React from 'react'
import'./Home.css';

function HomePage() {
    return (
      <div className="app">
        <header>
          <h1>SELAMAT DATANG</h1>
        </header>
        <main>
          <section className="hero">
            <h2>WEBSITE</h2>
            <p>REACTJS</p>
          </section>
          <section className="features">
            <div className="feature">
              <h3>Responsive Design</h3>
              <p>Our website is designed to look great on any device.</p>
            </div>
            <div className="feature">
              <h3>Easy to Use</h3>
              <p>Intuitive navigation for a seamless experience.</p>
            </div>
            <div className="feature">
              <h3>Stylish UI</h3>
              <p>Modern and attractive user interface.</p>
            </div>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  

export default HomePage