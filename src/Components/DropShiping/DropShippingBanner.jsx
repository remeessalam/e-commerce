import bgImage from "../../assets/images/dropshipping.jpg";

const DropShippingBanner = () => {
  return (
    <div
      className="relative bg-center bg-cover min-w-screen  bg-no-repeat max-h-screen h-[70vh] flex justify-center md:justify-start items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 h-full w-full bg-black/30" />
      <h1
        data-aos="fade-up"
        className="text-5xl md:text-7xl font-bold text-white max-w-[70rem] text-center md:text-start drop-shadow-2xl  md:ml-[10rem] mx-5 md:mx-0"
      >
        Simplify Your E-Commerce Business with Expert Drop Shipping Support
      </h1>
    </div>
  );
};

export default DropShippingBanner;
