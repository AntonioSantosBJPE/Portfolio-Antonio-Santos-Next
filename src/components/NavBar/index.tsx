"use client";
import { useThemeSwitcher } from "@/hooks/UseThemeSwitcher";
import { motion } from "framer-motion";
import { Logo } from "../Footer/Logo";
import { GitHubIcon, LinkedinIcon } from "../MyIcons";
import { CustomLink } from "./CustomLink";

interface IpropsNavBar {}

export const NavBar = ({}: IpropsNavBar) => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
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

        <button></button>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo>Logo</Logo>
      </div>
    </header>
  );
};
