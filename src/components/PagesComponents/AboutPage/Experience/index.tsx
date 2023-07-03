"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { dataExperience } from "./data";
import { DetailsExperience } from "./Details";

interface IpropsExperience {}

export const Experience = ({}: IpropsExperience) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 md:my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[55px] top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[45px] xs:left-[30px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {dataExperience.map((data) => {
            return (
              <DetailsExperience
                key={data.id}
                position={data.position}
                company={data.company}
                time={data.time}
                address={data.address}
                companyLink={data.companyLink}
                work={data.work}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
