import { dropShippingServicesList } from "../../constant";

const DropshippingServices = () => {
  return (
    <div className="py-12 sm: py16">
      <section className=" wrapper">
        <h2
          className="text-2xl font-bold mb-6 text-[#f07f1d]"
          data-aos="fade-up"
        >
          Our Drop Shipping Support Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dropShippingServicesList.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 group p-6 rounded-lg hover:scale-105 transition-all duration-500"
              data-aos="fade-up"
            >
              <div className="text-[#f07f1d]   text-3xl mb-4 ">
                {<service.icon />}
              </div>
              <h3 className="group-hover:text-primary1 text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <ul className="list-disc">
                {service.description.map((obj) => (
                  <li key={obj}>{obj}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DropshippingServices;
