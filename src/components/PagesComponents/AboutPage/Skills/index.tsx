"use client";
import { motion } from "framer-motion";
import { Skill } from "./Skill";
interface IpropsSkills {}

export const Skills = ({}: IpropsSkills) => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 2-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>

      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full 
      bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      xs:bg-circularLightXs xs:dark:bg-circularDarkXs"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark 
          text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light
          lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{
            scale: 1.05,
          }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="-6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="GatsbyJS" x="15vw" y="-12vw" />
        <Skill name="Web Design" x="-20vw" y="25vw" />
        <Skill name="Figma" x="0vw" y="-20vw" />
        <Skill name="Firebase" x="25vw" y="-18vw" />
        <Skill name="Tailwind" x="18vw" y="18vw" />
      </div>
    </>
  );
};
