import { usePathname, useRouter } from "next/navigation";

interface IcustomLinkMobile {
  href: string;
  title: string;
  toggle: () => void;
  className?: string;
}
export const CustomLinkMobile = ({
  href,
  title,
  className = "",
  toggle,
}: IcustomLinkMobile) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
    toggle();
  };
  return (
    <button
      onClick={handleClick}
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      {title}
      <span
        className={`h-1 inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full
         transition-[width] ease duration-300 ${
           pathName === href ? "w-full" : "w-0"
         } 
        dark:bg-dark        `}
      >
        &nbsp;
      </span>
    </button>
  );
};
