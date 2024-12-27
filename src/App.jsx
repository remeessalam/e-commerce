import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Service from "./pages/Service";
import AOS from "aos";
import "aos/dist/aos.css";
import DropShiping from "./pages/DropShiping";

function App() {
  AOS.init({
    once: true,
    duration: 500,
    offset: -50,
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Service />} />
        <Route path="/dropshipping" element={<DropShiping />} />
      </Routes>
    </Router>
  );
}

export default App;
