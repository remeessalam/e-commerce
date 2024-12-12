import { BsHeartFill } from "react-icons/bs";
import Reviews from "./Reviews";

const Testimonials = () => {
  return (
    <div>
      <section id="reviews" className="pt-[4rem] text-center text-white">
        <div className="max-w-[40rem] mx-auto">
          <h1
            data-aos="zoom-in"
            className="text-4xl font-bold text-white mt-2 text-center"
          >
            Wall Of Love <BsHeartFill className="text-red-500 inline ml-1" />
          </h1>
          <h1
            data-aos="fade-up"
            className="text-xl font-medium mt-[1rem] text-primary"
          >
            <span className="font-bold">Latest Reviews</span> from our Customers
          </h1>
        </div>
      </section>
      <Reviews />
    </div>
  );
};

export default Testimonials;
