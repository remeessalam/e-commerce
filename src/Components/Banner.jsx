import ReactPlayer from "react-player";
import bannerbgvid from "../assets/video/banner-landing.mp4";
const Banner = () => {
  return (
    <div className="relative w-screen h-100vh sm:h-[70vh] overflow-hidden  flex items-center justify-center bg-black text-white">
      <div className="absolute w-screenh-100vh sm:h-[70vh] top-0 overflow-hidden">
        {/* <img
          src={bannerimage}
          alt="banner-image"
          className="w-full h-full object-cover opacity-50"
        /> */}

        <ReactPlayer
          url={bannerbgvid}
          playing
          muted
          playsInline
          loop
          pip={false}
          width="100vw"
          height="100%"
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: "cover",
                },
              },
            },
          }}
          className=" object-cover h-100vh sm:h-[70vh]  opacity-50"
        />

        {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-black/10" /> */}
      </div>

      <div className="relative wrapper px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-start">
          <div className="grid grid-cols-1  lg:grid-cols-1">
            <h1
              data-aos="fade-up"
              className=" text-4xl sm:text-5xl font-bold text-primary  mb-6"
            >
              start your E-commerce company <br /> with Boostmysites
            </h1>
            <p
              data-aos="fade-up"
              className=" mt-4 lg:mt-0 sm:text-xl text-gray-300 max-w-3xl "
            >
              Starting your e-commerce company with Boostmysites is a
              streamlined and empowering journey for aspiring entrepreneurs.
              Boostmysites provides end-to-end solutions tailored to help you
              establish and grow your online store. From creating a professional
              website to offering a user-friendly interface, seamless payment
              integrations, and robust analytics, every aspect of the setup is
              taken care of.
            </p>
          </div>
          <div data-aos="fade-up" className="mt-10">
            <a
              href="https://boostmysites.com/ai-expert/contact/step1"
              className="primary-btn inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-primary to-[#D5AA12] hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
