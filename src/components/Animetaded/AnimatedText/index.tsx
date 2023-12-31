"use client";
import { motion } from "framer-motion";
interface IpropsAnimatedText {
  className: string;
  text: string;
}

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
export const AnimatedText = ({ text, className }: IpropsAnimatedText) => {
  return (
    <div
      className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden
    sm:py-0"
    >
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl 
        dark:text-light ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              key={word + "-" + index}
              className="inline-block"
              variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};
