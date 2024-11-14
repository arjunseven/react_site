// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <h1>"Welcome, to the Land of Nonsence!"</h1>
      </header>
      <main>
        <div className="section">
          <Link to="/games">
            <button>Games</button>
          </Link>
        </div>
        <div className="section">
          <Link to="/videos">
            <button> "Clips" </button>
          </Link>
        </div>
        <div className="section">
          <Link to="/ChatBot">
            <button>ChatBot</button>
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
