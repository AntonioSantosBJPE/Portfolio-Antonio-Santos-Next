import { AnimatedNumbers } from "@/components/AnimatedNumbers";
import { AnimatedText } from "@/components/AnimatedText";
import { LayoutDefault } from "@/components/LayoutDefault";
import { Skills } from "@/components/Skills";
import Image from "next/image";
import profileImage from "../../../public/images/profile/developer-pic-2.jpg";

const About = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center ">
      <LayoutDefault className="pt-16">
        <AnimatedText className="mb-16" text="Passion Fuels Purpose!" />
        <div className="grid w-full grid-cols-8 gap-16">
          <div className="col-span-3 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
              Biografia
            </h2>
            <p className="font-medium">
              Hi, I am CodeBucks, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 4 years of experience in the field. I am
              always looking for new and innovative ways to bring my clients
              visions to life.
            </p>
            <p className="font-medium">
              I believe that design is about more than just making things look
              pretty – it is about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className="font-medium">
              Whether I am working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>
          <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"></div>
            <Image
              src={profileImage}
              alt="Antonio Santos"
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div className="col-span-2 flex  flex-col items-end justify-between">
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold ">
                <AnimatedNumbers value={50} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75">
                satisfied clients
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold ">
                <AnimatedNumbers value={40} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75">
                projects completed
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold ">
                <AnimatedNumbers value={4} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75">
                years of experience
              </h2>
            </div>
          </div>
        </div>
        <Skills />
      </LayoutDefault>
    </main>
  );
};

export default About;