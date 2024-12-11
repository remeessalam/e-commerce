import Service from "./pages/Service";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    once: true,
    duration: 500,
    offset: -50,
  });
  return (
    <>
      <Service />
    </>
  );
}

export default App;
