import { Route, Routes } from "react-router-dom";
// import About from "./pages/About";
import Services from "./pages/Services";
// import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ZakatDonations from "./pages/ZakatDonations";
import SingleRecipient from "./pages/SingleRecipient";
import SingupPage from "./pages/SingupPage";
import SuccessPage from "./pages/SuccessPage";
import CancelPage from "./pages/CancelPage";
import ZakatCalculator from "./pages/ZakatCalculator";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/services" element={<Services />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/zakat-donations" element={<ZakatDonations />} />
        <Route path="/recipient/:id" element={<SingleRecipient />} />
        <Route path="/signup" element={<SingupPage />} />
        <Route path="/zakat-calculator" element={<ZakatCalculator />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />
      </Routes>
    </div>
  );
};

export default App;
