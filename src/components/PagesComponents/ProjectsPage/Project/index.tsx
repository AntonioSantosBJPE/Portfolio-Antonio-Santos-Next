import { GitHubIcon } from "@/components/MyIcons";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface IpropsProject {
  type: string;
  title: string;
  img: StaticImageData;
  link: string;
  github: string;
}

export const Project = ({ github, img, link, title, type }: IpropsProject) => {
  return (
    <article className="w-full flex flex-col items-center p-6 justify-between rounded-2xl border border-solid border-dark bg-light relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl"></div>

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="mt-2 w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="font-semibold text-lg underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GitHubIcon className="" />
          </Link>
        </div>
      </div>
    </article>
  );
};
