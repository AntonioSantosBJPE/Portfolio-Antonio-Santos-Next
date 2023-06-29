"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../Logo";
import { GitHubIcon, LinkedinIcon } from "../MyIcons";

interface IpropsNavBar {}
interface IcustomLink {
  href: string;
  title: string;
  className?: string;
}
const CustomLink = ({ href, title, className = "" }: IcustomLink) => {
  const pathName = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-1 inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathName === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export const NavBar = ({}: IpropsNavBar) => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href={"/"} title={"Home"} className="mr-4" />
        <CustomLink href={"/about"} title={"About"} className="mx-4" />
        <CustomLink href={"/projects"} title={"Projects"} className="mx-4" />
        <CustomLink href={"/articles"} title={"Articles"} className="ml-4" />
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
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo>Logo</Logo>
      </div>
    </header>
  );
};
