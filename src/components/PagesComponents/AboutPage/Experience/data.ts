interface IdataExperience {
  id: number;
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

export const dataExperience: IdataExperience[] = [
  {
    id: 1,
    position: "Software Engineer",
    company: "Google",
    time: "2022-Present",
    address: "Mountain View, CA",
    companyLink: "https://www.google.com.br/",
    work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
  },
  {
    id: 2,
    position: "Intern",
    company: "Facebook",
    time: "Summer 2021",
    address: "Menlo Park, CA.",
    companyLink: "https://www.google.com.br/",
    work: "Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.",
  },
  {
    id: 3,
    position: "Software Developer",
    company: "Amazon",
    time: "2020-2021",
    address: "Seattle, WA.",
    companyLink: "https://www.google.com.br/",
    work: "Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability.",
  },
  {
    id: 4,
    position: "Software Developer",
    company: "Microsoft",
    time: "Summer 2019",
    address: "Redmond, WA.",
    companyLink: "https://www.google.com.br/",
    work: "Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component.",
  },
  {
    id: 5,
    position: "Teaching Assistant",
    company: "MIT",
    time: "Fall 2018",
    address: "Massachusetts Ave, Cambridge, MA.",
    companyLink: "https://www.google.com.br/",
    work: "Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.",
  },
];
