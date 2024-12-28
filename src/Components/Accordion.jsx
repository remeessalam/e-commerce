import React from "react";

import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const Accordion = ({ plan, isOpen, toggleAccordion }) => {
  console.log(plan, "thisispland");
  return (
    <div
      data-aos="fade-up"
      className="border border-white/10 rounded-lg text-white "
    >
      <button
        className="w-full text-start p-3 bg-white/5 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-colors"
        onClick={toggleAccordion}
      >
        <span className="text-white text-sm">{plan.title}</span>
        {isOpen ? (
          <FaChevronRight className="w-5 h-5 text-primary" />
        ) : (
          <FaChevronDown className="w-5 h-5 text-primary" />
        )}
      </button>
      {isOpen && (
        <div className="p-3 bg-white/5 text-sm text-gray-300">
          {/* <h2 className="font-bold text-gray-200">{plan.title}</h2> */}
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <h4 className="font-semibold">includes:</h4>
            {plan.includes?.map((item, index) => {
              // If the item is from the mentors list, format the name and designation
              return (
                <li key={index} className="">
                  <strong>{name} </strong> {item}
                </li>
              );
            })}
          </ul>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <h4 className="font-semibold">{plan?.benefits && "benefits:"}</h4>
            {plan?.benefits?.map((item, index) => {
              // If the item is from the mentors list, format the name and designation
              return (
                <li key={index} className="">
                  <strong>{name} </strong> {item}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Accordion;
