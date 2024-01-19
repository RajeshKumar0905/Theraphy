import React from "react";
import { FaTimes } from "react-icons/fa";
const Model = ({handleclick}) => {
  return (
    <div className="overlay">
      <div className="model">
     <div className="cross">
     <FaTimes  style={{ color: "white" }} size={20} onClick={handleclick}/>
     </div>
        <h2>
          Therapy is a treatment that helps someone feel better, grow stronger,
          etc., especially after an illness.
        </h2>
      </div>
    </div>
  );
};

export default Model;
