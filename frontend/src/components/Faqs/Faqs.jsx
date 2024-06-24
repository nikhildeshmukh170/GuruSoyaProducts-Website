import React from "react";
import "./Faqs.css";
import { assets, faqs_ans } from "../../assets/assets";

const Faqs = () => {
  return (
    <div className="faqs">
      <div className="faq_content">
        <div className="faq_heading">
          <p>FAQs</p>
        </div>

          <div className="faq_questions">
        {faqs_ans.map((item,index) => (
          <div key={index} className="question">
            <div className="ques_content">
              <img src={assets.cross_icon} alt="cross icon" />
              <p>{item.ques}</p>
            </div>
            <p className="ans">{item.ans} </p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
