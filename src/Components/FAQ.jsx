import { useState } from "react";
import { faqData } from "../constant";
import FaqItem from "./Faqitems";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = (id) => {
    setIsOpen((prev) => {
      return prev === id ? "" : id;
    });
  };
  return (
    <div className=" bg-transparent py-12 px-4 sm:px-6 lg:px-8">
      <div className="wrapper ">
        <h1
          data-aos="fade-up"
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          FAQ
        </h1>
        <div className="space-y-6">
          {faqData.map((faq) => (
            <div data-aos="fade-up" className="bg-black " key={faq.id}>
              <div
                className={`bg-black hover:scale-110 transition-all duration-1000 ${
                  isOpen === faq.id && `scale-110`
                }`}
              >
                <FaqItem
                  id={faq.id}
                  question={faq.title}
                  answer={faq.desc}
                  onClose={onClose}
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
