// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <h1>"Step into Madness"</h1>
      </header>
      <main>

        <div className="section">
          <Link to="/ComingSoon">
            <button>Games</button>
          </Link>
        </div>
        <footer>
        <p>© 2024 Arjun, All rights reserved.</p>
      </footer>
      </main>
      
    </div>
    
  );
}

export default HomePage;
