import DropShippingBanner from "../Components/DropShiping/DropShippingBanner";
import AboutDropShipping from "../Components/DropShiping/AboutDropShipping";
// import { dropShippingServices } from "../constant";
import DropshippingServices from "../Components/DropShiping/DropshippingServices";
import WhyChooseDropShipping from "../Components/DropShiping/whyChooseDropShipping";
import DropShippinFaq from "../Components/DropShiping/DropShippinFaq";
import Header from "../Components/Header";

const DropShiping = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />

      <DropShippingBanner />
      <AboutDropShipping />
      <DropshippingServices />
      <WhyChooseDropShipping />
      <DropShippinFaq />
      <div className="wrapper px-4 py-8">
        <section>
          <h2
            className="text-2xl font-bold mb-4 text-primary1"
            data-aos="fade-up"
          >
            Get Started Today
          </h2>
          <p className="mb-4" data-aos="fade-up">
            Boostmysites is your trusted partner in drop shipping success. Let
            us handle the complexities while you focus on building your brand
            and serving your customers.
          </p>
          <div data-aos="fade-up max-w-fit">
            <button className="w-fit mt-4 transition-all duration-500 hover:scale-110  bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90">
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DropShiping;
