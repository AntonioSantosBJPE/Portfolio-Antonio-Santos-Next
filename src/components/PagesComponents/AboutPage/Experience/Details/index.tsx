"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { LiIcon } from "../LiIcon";

interface IpropsDetails {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}
export const DetailsExperience = ({
  address,
  company,
  companyLink,
  position,
  time,
  work,
}: IpropsDetails) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
      md:w-[80%] "
    >
      <LiIcon ref={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="xs:ml-2"
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target={"_blank"}
            className="text-primary capitalize dark:text-primaryDark "
          >
            @{company}
          </a>
        </h3>
        <span
          className="capitalize font-medium text-dark/75 dark:text-light/75 
        xs:text-sm "
        >
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm ">{work}</p>
      </motion.div>
    </li>
  );
};
