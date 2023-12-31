"use client";
import { useThemeSwitcher } from "@/hooks/UseThemeSwitcher";
import { motion } from "framer-motion";
import { useState } from "react";
import { GitHubIcon, LinkedinIcon } from "../MyIcons";
import { MoonIcon } from "../MyIcons/MoonIcon";
import { SunIcon } from "../MyIcons/SunIcon";
import { CustomLink } from "./CustomLink";
import { Logo } from "./Logo";
import { NavigationMobile } from "./NavigationMobile";

interface IpropsNavBar {}

export const NavBar = ({}: IpropsNavBar) => {
  const { mode, setMode } = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((oldvalue) => !oldvalue);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
     dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8"
    >
      <button
        type="button"
        onClick={handleClick}
        className="flex-col justify-center items-center hidden lg:flex h-8 "
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 
          rounded-sm ${
            isOpen ? "rotate-45 translate-y-1 " : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 
          rounded-sm my-0.5 ${isOpen ? "opacity-0 hidden" : "opacity-100"}`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 
          rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex  justify-between items-center lg:hidden">
        <nav>
          <CustomLink href={"/"} title={"Home"} className="mr-4" />
          <CustomLink href={"/about"} title={"About"} className="mx-4" />
          <CustomLink href={"/projects"} title={"Projects"} className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
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
            className="w-6 ml-3"
          >
            <GitHubIcon className="" />
          </motion.a>

          <button
            type="button"
            onClick={() => {
              setMode((oldvalue) => (oldvalue === "light" ? "dark" : "light"));
            }}
            className={`ml-3 flex items-center justify-center rounded-full p-1
          ${
            mode == "light"
              ? "bg-dark text-light"
              : "hover:bg-light hover:text-dark"
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
      </div>

      <NavigationMobile
        handleClick={handleClick}
        isOpen={isOpen}
        mode={mode}
        setMode={setMode}
      />

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo>Logo</Logo>
      </div>
    </header>
  );
};
