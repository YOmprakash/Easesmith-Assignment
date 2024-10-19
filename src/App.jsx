import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListingPage from './pages/ProductListingPage';
import ThankYouPage from './pages/ThankYouPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListingPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    
    </Router>
  );
}

export default App;
