"use client";
import { motion, useScroll } from "framer-motion";
import { forwardRef, MutableRefObject, RefObject } from "react";
interface IpropsLiIcon {}

// eslint-disable-next-line react/display-name
export const LiIcon = forwardRef<MutableRefObject<null>, IpropsLiIcon>(
  (_, ref) => {
    const { scrollYProgress } = useScroll({
      target: ref as RefObject<HTMLElement>,
      offset: ["center end", "center center"],
      layoutEffect: false,
    });
    return (
      <figure className="absolute left-0 stroke-dark dark:stroke-light">
        <svg
          className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
          width="75"
          height="75"
          viewBox="0 0 100 100"
        >
          <circle
            cx="75"
            cy="75"
            r="20"
            className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none"
          />
          <motion.circle
            cx="75"
            cy="75"
            r="20"
            className=" stroke-[5px] fill-light dark:fill-dark"
            style={{
              pathLength: scrollYProgress,
            }}
          />
          <circle
            cx="75"
            cy="75"
            r="10"
            className=" animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
          />
        </svg>
      </figure>
    );
  }
);
