import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import Home from './Home';
import About from './About';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FFFDF9] font-sans text-charcoal-800 selection:bg-coral-100 selection:text-coral-600">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
