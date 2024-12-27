import aboutdropshipping from "../../assets/images/aboutdropshipping.jpg";
const AboutDropShipping = () => {
  return (
    <div className="py-12 sm: py16">
      <div className="wrapper flex flex-col-reverse lg:grid lg:grid-cols-2 gap-5">
        <div>
          <div className="mb-12">
            <h2
              className="text-2xl font-bold mb-4 text-[#f07f1d]"
              data-aos="fade-right"
            >
              Simplify Your E-Commerce Business with Expert Drop Shipping
              Support
            </h2>
            <p className="mb-4" data-aos="fade-right">
              At Boostmysites, we understand the challenges of running an
              e-commerce store. That&apos;s why we offer comprehensive drop
              shipping support to streamline your operations, reduce overhead
              costs, and help you focus on what matters most: growing your
              business.
            </p>
          </div>
          <div className="mb-12">
            <h2
              className="text-2xl font-bold mb-4 text-[#f07f1d]"
              data-aos="fade-right"
            >
              What Is Drop Shipping?
            </h2>
            <p data-aos="fade-right">
              Drop shipping is a business model that allows you to sell products
              online without holding any inventory. When a customer places an
              order, the product is shipped directly from the supplier to the
              customer. It&apos;s a cost-effective way to manage your business
              without the hassle of inventory management or logistics.
            </p>
          </div>
        </div>
        <div>
          <img
            data-aos="fade-left"
            src={aboutdropshipping}
            alt="aboutdropshipping"
            className="h-full object-cover rounded-xl max-h-[60vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutDropShipping;
