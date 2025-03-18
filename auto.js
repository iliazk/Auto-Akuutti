// Navigation Component
function Navigation() {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-[#FF4500] text-2xl font-bold">Ravintola</a>
        <div className="space-x-4">
          <a href="/" className="text-white hover:text-[#FF4500]">Koti</a>
          <a href="/menu" className="text-white hover:text-[#FF4500]">Menu</a>
          <a href="/poytavaraukset" className="text-white hover:text-[#FF4500]">Varaukset</a>
          <a href="/about" className="text-white hover:text-[#FF4500]">Tietoa</a>
          <a href="/contact" className="text-white hover:text-[#FF4500]">Yhteystiedot</a>
        </div>
      </div>
    </nav>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[#FF4500] text-xl mb-4">Yhteystiedot</h3>
            <p>Osoite: Ravintolakatu 123</p>
            <p>00100 Helsinki</p>
            <p>Puh: 040 1234567</p>
            <p>Email: info@ravintola.fi</p>
          </div>
          <div>
            <h3 className="text-[#FF4500] text-xl mb-4">Aukioloajat</h3>
            <p>Ma-Pe: 11:00 - 23:00</p>
            <p>La: 12:00 - 24:00</p>
            <p>Su: 12:00 - 22:00</p>
          </div>
          <div>
            <h3 className="text-[#FF4500] text-xl mb-4">Seuraa meitä</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#FF4500]">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-[#FF4500]">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-[#FF4500]">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  const [formData, setFormData] = React.useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
    email: "",
    phone: "",
    creditCard: "",
    specialRequests: "",
  });
  const [submitStatus, setSubmitStatus] = React.useState("");
  const [showCreditCard, setShowCreditCard] = React.useState(false);
  const [availableTables, setAvailableTables] = React.useState(50);
  const [bookingStep, setBookingStep] = React.useState(1);
  const [reservationId, setReservationId] = React.useState(null);

  React.useEffect(() => {
    setShowCreditCard(parseInt(formData.guests) >= 6);
  }, [formData.guests]);

  React.useEffect(() => {
    if (formData.date && formData.time) {
      const randomAvailable = Math.floor(Math.random() * 20) + 30;
      setAvailableTables(randomAvailable);
    }
  }, [formData.date, formData.time]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("Sending reservation request...");
    try {
      // Since we don't have a backend, we'll simulate a successful reservation
      const randomId = Math.random().toString(36).substr(2, 9).toUpperCase();
      setReservationId(randomId);
      setBookingStep(3);
      setSubmitStatus("Reservation request sent successfully!");
      
      // Clear form
      setFormData({
        date: "",
        time: "",
        guests: "2",
        name: "",
        email: "",
        phone: "",
        creditCard: "",
        specialRequests: "",
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus("Failed to submit reservation. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Rest of your reservation form code here */}
        {/* Copy the form JSX from your original code */}
      </main>

      <Footer />
    </div>
  );
}

// Render the app
ReactDOM.render(
