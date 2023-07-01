import Link from "next/link";
import { LayoutDefault } from "../LayoutDefault";

interface IpropsFooter {}
export const Footer = ({}: IpropsFooter) => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium text-lg 
                dark:text-light dark:border-light"
    >
      <LayoutDefault className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by&nbsp;
          <Link href={"/"} className="underline underline-offset-2">
            CodeBucks
          </Link>
        </div>
        <Link href={"/"}>Say Hello</Link>
      </LayoutDefault>
    </footer>
  );
};
