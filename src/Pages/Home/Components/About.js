import React from "react";

const About = ({heading}) => {
  return (
    <>
    <h1 className="heading">
    {heading}
    </h1>
    <section className="about">
      <img src={require("../../../Assets/man.jpg")} alt="" />
      <div className="content">
        <h2>Benfits of Therapy</h2>
        <p>
          Therapy is a treatment that helps someone feel better, grow stronger,
          etc., especially after an illness.Therapy is a treatment that helps someone feel better, grow stronger,
          etc., especially after an illness.Therapy is a treatment that helps someone feel better, grow stronger,
          etc., especially after an illness.Therapy is a treatment that helps someone feel better, grow stronger,
          etc., especially after an illness
        </p>
        <p>
          Therapy is a treatment that helps someone feel better, grow stronger,
          etc., especially after an illness.Therapy is a treatment that helps someone feel better, grow stronger,
          Therapy is a treatment that helps someone feel better, grow stronger,
          etc., especially after an illness.Therapy is a treatment that helps someone feel better, grow stronger,
        </p>
        <p>
          Therapy is a treatment that helps someone feel better, grow stronger,
          etc., especially after an illness.Therapy is a treatment that helps someone feel better, grow stronger,
         
        </p>
      </div>
    </section>
    </>
  );
};

export default About;
