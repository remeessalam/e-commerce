import Banner from "../Components/Banner";
import Subscription from "../Components/Subscription";
import FAQ from "../Components/FAQ";
import Testimonials from "../Components/Testimonials";
import Header from "../Components/Header";
import LeadForm from "../Components/LeadForm";
import FeaturedIn from "../Components/FeaturedIn";
import OurOffices from "../Components/OurOffices";
import OurTeam from "../Components/OurTeam";
import CeoReview from "../Components/CeoReview";

const Service = () => {
  return (
    <div className=" landing-page  bg-black/50">
      <Header />
      <Banner />
      <Subscription />
      <FAQ />
      <Testimonials />
      <OurTeam />
      <CeoReview />
      <LeadForm />
      <FeaturedIn />
      <section
        data-aos="fade-up"
        className="wrapper flex flex-col items-center py-[5rem]"
      >
        <h6 className="text-center text-white text-sm px-5 py-2 border border-white rounded-full w-fit mb-14">
          More than 500+ companies trusted us worldwide
        </h6>
        <OurOffices />
      </section>
    </div>
  );
};

export default Service;
