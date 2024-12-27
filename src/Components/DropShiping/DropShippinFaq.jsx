import { useState } from "react";
import { dropShippingFAQ } from "../../constant";
import {
  IoChevronDownCircleOutline,
  IoChevronUpCircleOutline,
} from "react-icons/io5";

const DropShippinFaq = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen py-12 sm: py16 ">
      <div className="wrapper">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-primary1 sm:text-4xl">
            Frequently Asked Questions About Drop Shipping
          </h1>
          <p className="mt-2 text-lg text-gray-100">
            Everything you need to know about starting and running a drop
            shipping business
          </p>
        </div>

        <div className=" rounded-lg shadow-lg ">
          {dropShippingFAQ.map((faq) => (
            <div key={faq.question} className="border-b border-gray-200 py-4">
              <button
                className="flex w-full justify-between items-center text-left"
                onClick={() =>
                  setIsOpen((prev) =>
                    prev === faq.question ? "" : faq.question
                  )
                }
              >
                <h3 className="text-lg font-medium text-white">
                  {faq.question}
                </h3>
                {isOpen === faq.question ? (
                  <IoChevronUpCircleOutline className="h-6 w-6 text-gray-100" />
                ) : (
                  <IoChevronDownCircleOutline className="h-6 w-6 text-gray-100" />
                )}
              </button>
              {isOpen === faq.question && (
                <div className="mt-2 text-gray-100 whitespace-pre-line">
                  {Array.isArray(faq.answer)
                    ? faq.answer.map((answer, index) => (
                        <div key={index} className="mb-2">
                          {answer}
                        </div>
                      ))
                    : faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropShippinFaq;
