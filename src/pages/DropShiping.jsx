import DropShippingBanner from "../Components/DropShiping/DropShippingBanner";
import AboutDropShipping from "../Components/DropShiping/AboutDropShipping";
// import { dropShippingServices } from "../constant";
import DropshippingServices from "../Components/DropShiping/DropshippingServices";
import WhyChooseDropShipping from "../Components/DropShiping/whyChooseDropShipping";
import DropShippinFaq from "../Components/DropShiping/DropShippinFaq";

const DropShiping = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-gray-900 py-6">
        <div className="mx-auto text-center px-4">
          <h1 className="text-3xl font-bold text-primary1">Boostmysites</h1>
          <p className="mt-2 text-xl">Drop Shipping Support</p>
        </div>
      </header>

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
          <button
            data-aos="fade-up"
            className="bg-primary1 text-black font-bold py-2 px-4 rounded hover:bg-primary transition duration-300"
          >
            Contact Us
          </button>
        </section>
      </div>
    </div>
  );
};

export default DropShiping;
