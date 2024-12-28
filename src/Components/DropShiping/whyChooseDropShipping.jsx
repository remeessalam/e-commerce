import { whyChooseUs } from "../../constant";

const WhyChooseDropShipping = () => {
  return (
    <div className="py-12 sm: py16">
      <div className="wrapper ">
        <h2
          className="text-2xl font-bold mb-6 text-primary1"
          data-aos="fade-up"
        >
          Why Choose Boostmysites for Drop Shipping Support?
        </h2>
        <ul className="grid md:grid-cols-2 gap-5">
          {whyChooseUs.map((obj) => (
            <li data-aos="fade-up" key={obj.title} className="">
              <div className="hover:scale-105 transition-all duration-500 border border-slate-300 p-3 rounded-xl">
                <h4 className="font-medium">{obj.title}</h4>
                <p className="text-gray-400">{obj.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseDropShipping;
