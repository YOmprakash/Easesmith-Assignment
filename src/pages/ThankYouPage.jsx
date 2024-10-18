import { useLocation } from 'react-router-dom';

const ThankYouPage = () => {
  const { state } = useLocation();
  const product = state?.product;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Thank you for your interest!</h1>
      {product && <p>You were interested in: {product.name}</p>}
    </div>
  );
};

export default ThankYouPage;
