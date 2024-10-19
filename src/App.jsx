import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListingPage from './pages/ProductListingPage';
import ThankYouPage from './pages/ThankYouPage';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ProductListingPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    
    </Router>
  );
}

export default App;
