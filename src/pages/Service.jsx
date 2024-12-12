import Banner from "../Components/Banner";
// import Serviceslist from "../Components/Serviceslist";
import Subscription from "../Components/Subscription";
import FAQ from "../Components/FAQ";
import Testimonials from "../Components/Testimonials";

const Service = () => {
  return (
    <div className=" landing-page  bg-black/50">
      <Banner />
      {/* <Serviceslist /> */}
      <Subscription />
      <FAQ />
      <Testimonials />
    </div>
  );
};

export default Service;
