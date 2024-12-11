import React, { useState } from "react";
import Accordion from "./Accordion";
import {
  oneYearPlanDetails,
  sixMonthPlanDetails,
  twoYearPlanDetails,
} from "../constant";
import { AccordionProvider } from "../Context/AccordianContext";

const Subscription = () => {
  const [openIndexOne, setOpenIndexOne] = useState(null);
  const [openIndexTwo, setOpenIndexTwo] = useState(null);
  const [openIndexThree, setOpenIndexThree] = useState(null);

  const toggleAccordionOne = (index) => {
    setOpenIndexOne(openIndexOne === index ? null : index);
  };
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col sm:min-h-[832px] h-fit p-6 bg-black border border-primary rounded-lg">
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
                  <Accordion
                    key={index}
                    plan={detail}
                    isOpen={openIndexOne === index}
                    toggleAccordion={() => toggleAccordionOne(index)}
                  />
                ))}
              </div>

              <div className="mt-6 text-center">
                <div
                  data-aos="fade-up"
                  className="text-3xl font-bold text-primary mb-1"
                >
                  {sixMonthPlanDetails.price}{" "}
                </div>

                <button
                  data-aos="fade-up"
                  className="w-full mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
                  onClick={() => {
                    window.location.href =
                      "https://boostmysites.com/ai-expert/contact/step1";
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
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
                  <Accordion
                    key={index}
                    plan={detail}
                    isOpen={openIndexTwo === index}
                    toggleAccordion={() => toggleAccordionTwo(index)}
                  />
                ))}
              </div>

              <div className="mt-6 text-center">
                <div
                  data-aos="fade-up"
                  className="text-3xl font-bold text-primary mb-1"
                >
                  {oneYearPlanDetails.price}{" "}
                </div>
                <button
                  data-aos="fade-up"
                  className="w-full mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
                  onClick={() => {
                    window.location.href =
                      "https://boostmysites.com/ai-expert/contact/step1";
                  }}
                >
                  Subscribe
                </button>
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
                  <Accordion
                    key={index}
                    plan={detail}
                    isOpen={openIndexThree === index}
                    toggleAccordion={() => toggleAccordionThree(index)}
                  />
                ))}
              </div>

              <div className="mt-6 text-center">
                <div
                  data-aos="fade-up"
                  className="text-3xl font-bold text-primary mb-1"
                >
                  {twoYearPlanDetails.price}{" "}
                </div>
                <button
                  data-aos="fade-up"
                  className="w-full mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
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
    </>
  );
};

export default Subscription;
