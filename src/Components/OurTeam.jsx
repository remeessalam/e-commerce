import { teamMembers } from "../constant";

const OurTeam = () => {
  return (
    <div className="wrapper">
      <div className="flex sm:flex-row flex-col justify-between gap-5 items-center">
        <div data-aos="fade-right" className="flex flex-col gap-1">
          <h4 className="text-[2.10rem] sm:text-4xl uppercase">
            <span className="font-semibold text-white">our team</span>
          </h4>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="py-[2rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-white"
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="h-[30rem] w-full relative overflow-hidden"
          >
            <img
              src={member.img}
              className="h-[30rem] w-full object-cover mx-auto rounded-lg hover:scale-105 transition-all duration-500"
              alt="team"
            />
            <div className="absolute bottom-0 left-0 w-full h-fit bg-black/60 p-4">
              <h6 className="text-xl font-semibold w-fit">{member.name}</h6>
              <p className="text-sm text-primary1 w-fit">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
