interface IdataEducation {
  id: number;
  type: string;
  place: string;
  info: string;
  time: string;
}

export const dataEducation: IdataEducation[] = [
  {
    id: 1,
    type: "Bachelor Of Science In Computer Science",
    time: "2016-2020",
    place: "Massachusetts Institute Of Technology (MIT)",
    info: "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.",
  },
  {
    id: 2,
    type: "Master Of Computer Science",
    time: "2020-2022",
    place: "Stanford University",
    info: "Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding.",
  },
  {
    id: 3,
    type: "Online Coursework",
    time: "2016-2020",
    place: "Coursera And EdX",
    info: "Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering.",
  },
];
