"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { dataEducation } from "./data";
import { DetailsEducation } from "./DetailsEducation";

interface IpropsExperience {}

export const Education = ({}: IpropsExperience) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-4 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {dataEducation.map((data) => {
            return (
              <DetailsEducation
                key={data.id}
                info={data.info}
                place={data.place}
                time={data.time}
                type={data.type}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
