import Plant from "../assets/thankyou-plant.png";
const ThankYouPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-3xl font-bold">Congratulations Order Placed!</h1>
      <img src={Plant} alt="Thank you" className="w-64 mb-4" />
      <p>
        Thank you for choosing Chaperone services. We will soon get in touch
        with you!
      </p>
      <button>Continue Shopping</button>
    </div>
  );
};

export default ThankYouPage;
