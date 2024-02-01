import React from "react";

export const Slide = (Props) => {
  const { title, desc, img } = Props;
  return (
    <>
      <div className="w-full h-full">
        <div className="flex items-center">
          <div className="flex flex-col gap-4">
            <h1 className="md:text-4xl sm:text-xs text-[var(--primary-color)] ">
              {title}
            </h1>
            <p className="md:text-2xl sm:text-xs ">{desc}</p>
          </div>
          <div className="flex justify-center items-center">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
