import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { CardForm } from "./formComp/Form";
import { Link } from "react-router-dom";

const Body = () => {
  const [cardData, setCardData] = useState(
    JSON.parse(localStorage.getItem("cardData"))
  );
  
  useEffect(()=>{
    setCardData(JSON.parse(localStorage.getItem("cardData")))
  },[localStorage.getItem("cardData")])

  return (
    <>
        <section className="bg-transparent p-5 flex flex-col justify-between gap-24">
          {/* <DetailedCard/> */}
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl text-white font-bold">
              Welcome to Squbix Digital
            </h1>
            <p className="text-2xl text-[var(--fore-dim-color)">
              At Squbix Digital, we aim to work with the latest technology to
              solve the needs and requirements of our clients. Passionate about
              using cutting-edge technology to meet client needs, delivering
              high-quality solutions for business success.
            </p>
          </div>

          <div className="flex flex-col gap-5 ">
            <h1 className="text-5xl text-white font-bold">Our Services</h1>
            <p className="text-2xl text-[var(--fore-dim-color)">
              Your one-stop solution for business success in today's dynamic
              market. Our Services range from idea transformation to product
              enhancement:
            </p>

            <div className="grid grid-cols-2 gap-5">
              { cardData && cardData.map((item) => {
                const { heading, desc } = item;
                return (
                  <Link to={`/editForm/${heading}`} key={heading}>
                    <Card heading={heading} desc={desc} />
                  </Link>
                );
              })}
            </div>
            <p className="text-xl">
              At Squbix Digital, we are dedicated to delivering exceptional
              services that empower businesses to thrive in the ever-evolving
              digital landscape. Reach out to us today to discuss your unique
              requirements and discover how our services can take your business
              to new heights.
            </p>
          </div>
        </section>
    </>
  );
};

export default Body;
