import { useState } from "react";
import { accordionData } from "../constants/contact";
import { ChevronDown, ChevronUp } from "lucide-react";
const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto mt-5">
      {accordionData.map((section, index) => (
        <div key={index} className="mb-3">
          <button
            className="w-full p-3 bg-medium text-left font-bold flex justify-between items-center rounded-lg"
            onClick={() => toggleAccordion(index)}
          >
            {section.title}
            <span>{openIndex === index ? <ChevronUp /> : <ChevronDown />}</span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-3 space-y-2">
              {section.contacts.map((item, contactIndex) => (
                <div
                  key={contactIndex}
                  className="flex justify-between items-center bg-medium p-3 rounded-lg"
                >
                  <span className="flex items-center">
                    {item.icon}
                    {item.name}
                  </span>
                  <a className="hover:underline" href={`tel:${item.phone}`}>
                    {item.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
