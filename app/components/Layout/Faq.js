'use client';
import Image from "next/image";
import { useState } from "react";


const faqData = [
  {
    question: "How can I join Trackeria?",
    answer: "Press 'get started' and join the waitlist above.",
  },
  {
    question: "What is Trackeria all about?",
    answer: "Trackeria is a digital safety and security tool to curb digital devices and digital identity theft.",
  },
  {
    question: "Is the product ready?",
    answer: "No, the product (web and app) is not yet ready.",
  },
  {
    question: "How can I support?",
    answer: "To support the project you can donate, join the waitlist, and share about the project..",
  },
];



const Faqs = () => {
  const [faqStates, setFaqStates] = useState([false, false, false, false]);

  const handleClick = (index) => {
    const updatedStates = [...faqStates];
    updatedStates[index] = !updatedStates[index];
    setFaqStates(updatedStates);
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 md:px-2 lg:px-0 my-3">
      <h1 className="section_text text-zinc-300 mb-10" id="faq">FAQS</h1>

      {faqData.map((faq, index) => (
        <div key={index} className="flex justify-center my-4 md:my:6 lg:my-8 flex-col text-white">
          <div className="w-[1240px] p-6 lg:p-9 bg-blue-800 flex justify-between bg-opacity-90 rounded-[15px]">
            <p>{faq.question}</p>
            <p onClick={() => handleClick(index)}>
              <Image src="./open.svg" width="31" height="23" className="w-[25px] h-[17px]" />
            </p>
          </div>
          {faqStates[index] && (
            <div className="w-[1240px] px-9 py-2 mt-2 bg-blue-900 flex justify-between rounded-lg bg-opacity-90">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Faqs;

