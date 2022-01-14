import React, { useEffect, useState } from "react";
import icon from "../../imgApp/icon.png";
import "../introduce/introduce.css";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const Introduce = ({ next, text1 }) => {
  const [text, Setext] = useState("");
  
  useEffect(() => {
    setTimeout(() => {
      if (text.length) {
        if (text1.text3.split("")[text.length]) {
          Setext(text + text1.text3.split("")[text.length]);
        }
      } else {
        Setext(text + text1.text3.split("")[0]);
      }
    }, 50);
  }, [text]);

  const RenderText = text.split("").map((element, index) => {
    return <span key={index}>{element}</span>;
  });

  useEffect(() => {
    const id = setInterval(() => {
       
      next();
    }, 3000);
    return () => clearInterval(id);
    

  }, [text1]);

  return (
    <div id="Introduce">
      <div className="Introduce_list">
        <div className="Introduce_list-link">
          <img src={icon} alt="" />
          <h3>{text1.text1}</h3>
          <img src={icon} alt="" />
        </div>
        <h2>{text1.text2}</h2>
        <p>{text1.text4}</p>
        <p>{RenderText}</p>
      </div>
      <p className="iconLefft" onClick={next}>
        <AiOutlineLeft />
      </p>
      <p className="iconRight" onClick={next}>
        <AiOutlineRight />
      </p>
    </div>
  );
};

export default Introduce;
