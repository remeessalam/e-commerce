import { useState } from "react";
import Accordion from "./Accordion";
import {
  oneYearPlanDetails,
  // sixMonthPlanDetails,
  twoYearPlanDetails,
} from "../constant";
// import { AccordionProvider } from "../Context/AccordianContext";

const Subscription = () => {
  // const [openIndexOne, setOpenIndexOne] = useState(null);
  const [openIndexTwo, setOpenIndexTwo] = useState(null);
  const [openIndexThree, setOpenIndexThree] = useState(null);

  // const toggleAccordionOne = (index) => {
  //   setOpenIndexOne(openIndexOne === index ? null : index);
  // };
  const toggleAccordionTwo = (index) => {
    setOpenIndexTwo(openIndexTwo === index ? null : index);
  };
  const toggleAccordionThree = (index) => {
    setOpenIndexThree(openIndexThree === index ? null : index);
  };
  return (
    <>
      <div className=" bg-transparent py-16 px-4">
        <div className="wrapper ">
          <h2
            data-aos="fade-up"
            className="text-4xl font-bold text-center text-primary mb-4"
          >
            Subscription Plan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-12">
            {/* <div className="flex flex-col sm:min-h-[832px] h-fit p-6 bg-black border border-primary rounded-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-primary">📅</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center text-white mb-2">
                {sixMonthPlanDetails.title}
              </h3>
              <h3 className="text-2xl font-bold text-center text-primary  mb-2">
                {sixMonthPlanDetails.name}
              </h3>

              <div className="space-y-3 flex-grow">
                {sixMonthPlanDetails.accordionDetails.map((detail, index) => (
                  <div
                    key={index}
                    className={`hover:scale-110 transition-all duration-700 ${
                      openIndexOne === index && `scale-110 py-5`
                    }`}
                  >
                    <Accordion
                      plan={detail}
                      isOpen={openIndexOne === index}
                      toggleAccordion={() => toggleAccordionOne(index)}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <div
                  data-aos="fade-up"
                  className="text-3xl font-bold text-primary mb-1"
                >
                  {sixMonthPlanDetails.price}{" "}
                </div>
                <div data-aos="fade-up">
                  <button
                    // data-aos="fade-up"
                    className="primayButton"
                    onClick={() => {
                      window.location.href =
                        "https://boostmysites.com/ai-expert/contact/step1";
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div> */}
            <div className="flex flex-col p-6 sm:min-h-[832px] h-fit bg-black border border-primary rounded-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-primary">📅</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center text-white mb-2">
                {oneYearPlanDetails.title}
              </h3>

              <h3 className="text-2xl font-bold text-center text-primary  mb-2">
                {oneYearPlanDetails.name}
              </h3>

              <div className="space-y-3 flex-grow">
                {oneYearPlanDetails.accordionDetails.map((detail, index) => (
                  <div
                    key={index}
                    className={`hover:scale-110 transition-all duration-700 ${
                      openIndexTwo === index && `scale-110 py-5`
                    }`}
                  >
                    <Accordion
                      plan={detail}
                      isOpen={openIndexTwo === index}
                      toggleAccordion={() => toggleAccordionTwo(index)}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <div
                  data-aos="fade-up"
                  className="text-3xl font-bold text-primary mb-1"
                >
                  {oneYearPlanDetails.price}{" "}
                </div>
                <div data-aos="fade-up">
                  <button
                    className="primayButton"
                    onClick={() => {
                      window.location.href =
                        "https://boostmysites.com/ai-expert/contact/step1";
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-6 sm:min-h-[832px] h-fit bg-black border border-primary rounded-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-primary">📅</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center text-white mb-2">
                {twoYearPlanDetails.title}
              </h3>
              <h3 className="text-2xl font-bold text-center text-primary  mb-2">
                {twoYearPlanDetails.name}
              </h3>

              <div className="space-y-3 flex-grow">
                {twoYearPlanDetails.accordionDetails.map((detail, index) => (
                  <div
                    key={index}
                    className={`hover:scale-110 transition-all duration-700 ${
                      openIndexThree === index && `scale-110 py-5`
                    }`}
                  >
                    <Accordion
                      plan={detail}
                      isOpen={openIndexThree === index}
                      toggleAccordion={() => toggleAccordionThree(index)}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center" data-aos="fade-up">
                <div className="text-3xl font-bold text-primary mb-1">
                  {twoYearPlanDetails.price}{" "}
                </div>
                <div>
                  <button
                    className="primayButton"
                    onClick={() => {
                      window.location.href =
                        "https://boostmysites.com/ai-expert/contact/step1";
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
