import ReactPlayer from "react-player";
import dropshippingbanner from "../../assets/video/dropshippingbanner.mp4";
const DropShippingBanner = () => {
  return (
    <div className="relative min-w-screen max-h-screen h-[75vh] flex justify-center md:justify-start items-center overflow-hidden">
      <div className="absolute w-screen h-[100vh] sm:h-[75vh] top-0 overflow-hidden">
        <ReactPlayer
          url={dropshippingbanner}
          playing
          muted
          loop
          playsinline // Lowercase attribute for cross-browser compatibility
          controls={false}
          width="100%"
          height="100%"
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                },
              },
            },
          }}
          className="object-cover h-[100vh] sm:h-[75vh] opacity-50"
        />
        <div className="absolute inset-0 h-full w-full bg-black/30" />
      </div>

      <h1
        data-aos="fade-up"
        className="text-4xl md:text-7xl font-bold text-white max-w-[70rem] text-center md:text-start drop-shadow-2xl  md:ml-[10rem] mx-5 md:mx-0"
      >
        Simplify Your E-Commerce Business with Expert Drop Shipping Support
      </h1>
    </div>
  );
};

export default DropShippingBanner;
