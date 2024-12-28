import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Service from "./pages/Service";
import AOS from "aos";
import "aos/dist/aos.css";
import DropShiping from "./pages/DropShiping";
import SpinnerContextProvider, {
  SpinnerContext,
} from "./Context/SpinnerContext";
import LoadingSpinner from "./Components/LoadingSpinner";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import "keen-slider/keen-slider.min.css";
function App() {
  AOS.init({
    once: true,
    duration: 500,
    offset: -50,
  });

  return (
    <SpinnerContextProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#000000",
            color: "#ffffff",
          },
        }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Service />} />
          <Route path="/dropshipping" element={<DropShiping />} />
        </Routes>
      </Router>
      <LoadingSpinnerContext />
    </SpinnerContextProvider>
  );
}

export default App;

const LoadingSpinnerContext = () => {
  const { spinner } = useContext(SpinnerContext);
  return spinner && <LoadingSpinner />;
};
