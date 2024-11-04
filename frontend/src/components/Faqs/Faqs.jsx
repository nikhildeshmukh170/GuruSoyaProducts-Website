import React, { useState } from "react";
import "./Faqs.css";
import { assets, faqs_ans } from "../../assets/assets";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs">
      <div className="faq_content">
        <div className="faq_heading">
          <p>FAQs</p>
        </div>

        <div className="faq_questions">
          {faqs_ans.map((item, index) => (
            <div
              key={index}
              className={`question ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleQuestionClick(index)}
            >
              <div className="ques_content">
                <img
                  src={assets.cross_icon}
                  alt="cross icon"
                  className={`toggle_icon ${activeIndex === index ? "rotate" : ""}`}
                />
                <p>{item.ques}</p>
              </div>
              <p className={`ans ${activeIndex === index ? "show" : ""}`}>
                {item.ans}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
