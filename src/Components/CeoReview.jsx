import { useState } from "react";
import teamVidThumb from "../assets/video/our-team-vid-thumbnail.png";
import teamVid from "../assets/video/our-team-vid.mp4";
import quotesIcon from "../assets/images/quotes.png";
import teamImg2 from "../assets/images/team/team2.jpg.webp";

import { BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const CeoReview = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  return (
    <div>
      <div
        data-aos="fade-up"
        className="bg-[#FFFFFF03] backdrop-blur-[500rem] grid gap-[1rem] sm:gap-0 pt-[1rem] sm:pt-0 sm:grid-cols-[35%_65%] md:grid-cols-[40%_60%] lg:grid-cols-[30%_70%] mt-[3rem]"
      >
        <div className="w-full flex justify-center items-center">
          <div
            onClick={() => setIsPlaying(!isPlaying)}
            className="h-[60vh] md:h-[70] relative w-full"
          >
            {isVideoLoading && (
              <div className="absolute top-0 left-0 w-full h-[60vh] md:h-[70] flex justify-center items-center">
                <img src={teamVidThumb} className="rounded-lg" alt="" />
              </div>
            )}
            <div className="w-[90%] mx-auto sm:w-full h-[60vh] md:h-[70] relative">
              {!isPlaying && (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="bg-primary w-[3rem] z-10 h-[3rem] p-1 flex justify-center items-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <BiPlay className="text-[3rem] text-black" />
                </button>
              )}
              <ReactPlayer
                className="h-full w-full z-0 absolute video-cover"
                url={teamVid}
                playing={isPlaying}
                width="100%"
                height="100%"
                pip={false}
                playsinline={true}
                onReady={() => setIsVideoLoading(false)}
                config={{
                  file: {
                    attributes: {
                      preload: "auto",
                      controlsList: "nodownload noplaybackrate",
                      disablePictureInPicture: true,
                      playsinline: true,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="h-full relative z-10">
          <div className="sm-blurred-red-circle  absolute top-[-1rem] left-[3rem] -z-10 opacity-50"></div>
          <div className="px-5 md:px-[3rem] flex flex-col justify-between h-full gap-5 items-start">
            <div className="flex flex-col gap-8">
              <img src={quotesIcon} className="w-[7rem]" alt="" />
              <p className="text-lg font-extralight lg:max-w-[80%] text-white">
                I have been hiring people in this space for a number of years
                and I have never seen this level of professionalism. It really
                feels like you are working with a team that can get the job
                done.
              </p>
            </div>
            <div className="py-[2rem] border-t border-white/20 w-full flex items-center justify-between gap-5">
              <div className="flex items-center gap-5">
                <img
                  src={teamImg2}
                  alt=""
                  className="rounded-full w-[5rem] object-cover aspect-square"
                />
                <div className="flex flex-col gap-1">
                  <h6 className="text-xl font-semibold text-white">Reshab</h6>
                  <p className="text-sm text-primary1">CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoReview;
