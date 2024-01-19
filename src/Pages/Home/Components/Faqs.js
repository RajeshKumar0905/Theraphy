import React, { useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
const Faqs = () => {
  const data = [
    {
      question: "question1",
      answer:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source",
    },
    {
        question: "question2",
        answer:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source",
      },
      {
        question: "question3",
        answer:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source",
      },
      {
        question: "question4",
        answer:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source",
      },
  ];
  const [select,setSelected]=useState(null)
  const handleselect=(i)=>{
   if(select===i){
    return setSelected(null)
   }
   setSelected(i);
  }
  return (
    <>
      <h1 className="heading">FAQ'S</h1>
      <section className="faq">
        <div className="item">
          {data.map((item,i)=>{
                return(
                    <div className="wrapper" key={i} onClick={()=>handleselect(i)}>
                    <div className="question" >
           <h3>{item.question}</h3>
           <BiSolidUpArrow  className={select===i ?"arrow":""}/>
          </div>
          <div className={select===i ?"answers show" : "answers"}>
            <p >{item.answer}</p>
          </div>
                    </div>
                )
            })
          }
        </div>
      </section>
    </>
  );
};

export default Faqs;
