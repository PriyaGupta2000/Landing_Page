import React from 'react';
import './App.css';
 
function App() {
 return (
 <div className="landing-page">
 <header className="landing-header">
 <h1>Welcome to Our Product</h1>
 <p>Your one-stop solution for [Book, App, or Product Description]</p>
 <button className="cta-button">Get Started</button>
 </header>
 
 <section className="features">
 <div className="feature-item">
 <h3>Feature 1</h3>
 <p>Describe the first feature of your product.</p>
 </div>
 <div className="feature-item">
 <h3>Feature 2</h3>
 <p>Describe the second feature of your product.</p>
 </div>
 <div className="feature-item">
 <h3>Feature 3</h3>
 <p>Describe the third feature of your product.</p>
 </div>
 </section>
 </div>
 );
}
 
export default App;
 
