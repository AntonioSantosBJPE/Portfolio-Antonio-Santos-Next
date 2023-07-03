import { AnimatedText } from "@/components/Animetaded/AnimatedText";
import { LayoutDefault } from "@/components/LayoutDefault";
import { LinkArrow } from "@/components/MyIcons";
import { HireMe } from "@/components/PagesComponents/HomePage/HireMe";
import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/images/profile/developer-pic-1.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

const Home = () => {
  return (
    <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
      <LayoutDefault className="pt-0 md:pt-16 sm:pt-8">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 md:w-full">
            <Image
              src={profileImage}
              alt="Antonio Santos"
              className="w-full h-auto lg:hidden md:inline-block md:w-full"
              priority
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText
              className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl
              sm:!text-3xl"
              text="Turning Vision Into Reality With Code And Design."
            ></AnimatedText>
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center ">
              <Link
                href={"/dummy.pdf"}
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg 
                font-semibold hover:bg-light hover:text-dark border-2 border-solid 
                border-transparent hover:border-dark dark:bg-light dark:text-dark 
                hover:dark:bg-dark hover:dark:text-light hover:dark:border-light 
                md:p-2 md:px-4 md:text-base"
                download={true}
              >
                Resume <LinkArrow className="w-6 ml-1" />
              </Link>
              <Link
                href={"malito:netoifpe@gmail.com"}
                target="_blank"
                className="ml-4 text-lg font-medium capitalize text-dark underline 
                dark:text-light md:text-base"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </LayoutDefault>
      <HireMe />
      <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
        <Image
          src={lightBulb}
          alt="Antonio Santos"
          className="w-full h-auto"
        ></Image>
      </div>
    </main>
  );
};

export default Home;
