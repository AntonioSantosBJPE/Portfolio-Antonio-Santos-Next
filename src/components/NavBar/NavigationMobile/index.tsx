"use client";
import { GitHubIcon, LinkedinIcon } from "@/components/MyIcons";
import { MoonIcon } from "@/components/MyIcons/MoonIcon";
import { SunIcon } from "@/components/MyIcons/SunIcon";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { CustomLinkMobile } from "../CustomLinkMobile";

interface IpropsNavigationMobile {
  handleClick: () => void;
  isOpen: boolean;
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
}

export const NavigationMobile = ({
  handleClick,
  isOpen,
  mode,
  setMode,
}: IpropsNavigationMobile) => {
  return (
    <>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className=" min-w-[70vw] flex flex-col justify-between items-center 
      fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomLinkMobile
              href={"/"}
              title={"Home"}
              className=""
              toggle={handleClick}
            />
            <CustomLinkMobile
              href={"/about"}
              title={"About"}
              className=""
              toggle={handleClick}
            />
            <CustomLinkMobile
              href={"/projects"}
              title={"Projects"}
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href={"https://www.linkedin.com/in/antonio-santos-bjpe/"}
              target={"_blank"}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="w-6 mr-3"
            >
              <LinkedinIcon className="" />
            </motion.a>
            <motion.a
              href={"https://github.com/AntonioSantosBJPE"}
              target={"_blank"}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="w-6 ml-3 bg-light rounded-full dark:bg-dark"
            >
              <GitHubIcon className="" />
            </motion.a>

            <button
              type="button"
              onClick={() => {
                setMode((oldvalue) =>
                  oldvalue === "light" ? "dark" : "light"
                );
              }}
              className={`ml-3 flex items-center justify-center rounded-full p-1
          ${
            mode == "light"
              ? "hover:bg-dark hover:text-dark"
              : "bg-dark text-light ml-5"
          }
          `}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark !w-6" />
              ) : (
                <MoonIcon className="fill-light !w-6" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
    </>
  );
};
