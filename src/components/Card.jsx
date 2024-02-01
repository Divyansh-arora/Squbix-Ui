import React from "react";

export const Card = (Props) => {
  const { heading, desc } = Props;
  return (
    <>
      <div
        className="flex grow gap-10 w-full border-t-8 border-t-[var(--primary-color)] flex-col min-h-60 p-6 rounded-lg items-center shadow bg-[linear-gradient(162deg,#181b31,#070920,#040828)!important] hover:scale-110 duration-700 transition-all "
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[var(--primary-color)] ">
          {heading}
        </h5>
        <p className="font-normal">{desc}</p>
      </div>
    </>
  );
};

