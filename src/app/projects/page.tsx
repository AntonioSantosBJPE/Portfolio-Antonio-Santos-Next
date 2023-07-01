import { AnimatedText } from "@/components/Animetaded/AnimatedText";
import { LayoutDefault } from "@/components/LayoutDefault";
import { FeaturedProject } from "@/components/PagesComponents/ProjectsPage/FeaturedProject";
import { Project } from "@/components/PagesComponents/ProjectsPage/Project";
import project1 from "../../../public/images/projects/crypto-screener-cover-image.jpg";

const ProjectsPage = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
      <LayoutDefault className="pt-16">
        <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />
        <div className="grid grid-col-12 gap-24 gap-y-32">
          <div className="col-span-12 ">
            <FeaturedProject
              title="Crypto Screener Application"
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
              github="/"
              link="/"
              img={project1}
              type="Featured Project"
            />
          </div>

          <div className="col-span-6">
            <Project
              title="Crypto Screener Application"
              github="/"
              link="/"
              img={project1}
              type="Featured Project"
            />
          </div>

          <div className="col-span-6">
            <Project
              title="Crypto Screener Application"
              github="/"
              link="/"
              img={project1}
              type="Featured Project"
            />
          </div>

          <div className="col-span-12 ">
            <FeaturedProject
              title="Crypto Screener Application"
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
              github="/"
              link="/"
              img={project1}
              type="Featured Project"
            />
          </div>

          <div className="col-span-6">
            <Project
              title="Crypto Screener Application"
              github="/"
              link="/"
              img={project1}
              type="Featured Project"
            />
          </div>

          <div className="col-span-6">
            <Project
              title="Crypto Screener Application"
              github="/"
              link="/"
              img={project1}
              type="Featured Project"
            />
          </div>
        </div>
      </LayoutDefault>
    </main>
  );
};

export default ProjectsPage;
