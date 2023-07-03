"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { LiIcon } from "../../Experience/LiIcon";

interface IpropsDetails {
  type: string;
  place: string;
  info: string;
  time: string;
}
export const DetailsEducation = ({
  type,
  time,
  place,
  info,
}: IpropsDetails) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
      md:w-[80%]"
    >
      <LiIcon ref={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="xs:ml-2"
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full  md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};
