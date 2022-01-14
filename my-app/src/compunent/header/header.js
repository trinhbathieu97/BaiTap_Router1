import react from "react";
import "./header.css";
import Narbar from "./navbar/navbar";
import Introduce from "./introduce/introduce";
import { useState } from "react";
import { data } from "../../mock/header.js";
import { data2 } from "../../mock/header.js";
const Header = () => {
 
  const [imgAll, setImgAll] = useState(data)

  const [stt, setStt] = useState(0);

  const listImg = () => {
    setStt(stt + 1);
    if (stt === 1) {
      setStt(0);
    }
    let index = stt;

    setImgAll(data2[index]);
  };

  return (
    <div>
      <div className={imgAll.id}>
        <div className="color_APP" />
        <Narbar />
        <Introduce text1={imgAll} next={listImg} />
      </div>
    </div>
  );
};

export default Header;
