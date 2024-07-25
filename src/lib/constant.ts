export const siteConfig = {
  title: "Ansh Goyal - Portfolio",
  description:
    "Software developer based in Delhi, India. Passionate about software development for several years.",
  keywords: [
    "Ansh Goyal",
    "portfolio",
    "developer",
    "full stack",
    "NextJs",
    "ReactJs",
    "NodeJs",
    "Devlopment",
    "computer science",
    "web",
    "software",
  ],
  animationDuration: 0.5,
};
type descriptionType = {
  [key: string]: string;
};

interface experienceInterface {
  Company: string;
  Role: string;
  Description: string | descriptionType;
  Image: string;
  Time: string[];
  Tech: string[];
}

export const experience: experienceInterface[] = [
  {
    Company: "Meta Ventures Ltd.",
    Role: "SDE Intern",
    Description:
      "Restructured the notification service using microservices, optimizing performance by 25% and enhancing scalability and reducing load from main server.Integrated new features with ReactJS and improved load times of the website.Optimized API performance through refactoring and caching, increasing efficiency by 10%.",
    Image: "/images/Freelance.webp",
    Time: ["June' 23", "October' 23"],
    Tech: [
      "nextjs",
      "javascript",
      "nodejs",
      "sql",
      "express",
      "tailwindcss",
      "typescript",
      "mongodb",
    ],
  },
  {
    Company: "DV Social",
    Role: "Full Stack Developer Intern",
    Description:
      "Engineered highly responsive and scalable front-end components using ReactJS, improving initial load times by 0.5 s. Implement login feature with efficient routing and middleware using NodeJS and ExpressJS..",
    Image: "/images/dvsocial.png",
    Time: ["March' 23", "April' 23"],
    Tech: ["nextjs", "nodejs", "mongodb", "express", "tailwindcss", "firebase"],
  },
  {
    Company: "SDC GGSIPU",
    Role: "SFS Lead",
    Description: {
      // eslint-disable-next-line prettier/prettier
      Events:
        "Leveraged exceptional public speaking skills to deliver captivating presentations to diverse audiences of 1000+ attendees, resulting in a 30% increase in event satisfaction scores and a 25% rise in post-event engagement",
      "Project Management":
        "Led the development of a student feedback system, improving feedback response rates by 15%. Spearheaded the development and testing of a scalable attendance management system using NodeJs and PostgreSQL,currently in the testing stage, aimed at streamlining attendance tracking for over 5,000 students.",
    },
    Image: "/images/SDC.webp",
    Time: ["May' 23", "May' 24"],
    Tech: [
      "nextjs",
      "javascript",
      "nodejs",
      "mongodb",
      "express",
      "tailwindcss",
    ],
  },
  {
    Image: "/images/InfoXpression.webp",
    Company: "InfoXpression USICT",
    Role: "Web Developer",
    Description: {
      "Design And Fronted Development":
        "As part of the web development team for InfoXpression, the technical fest of GGSIPU, I played a crucial role in designing and creating multiple user apealing components. Working collaboratively, we ensured seamless functionality and an engaging user experience for the event's online platform.",
      "Backend Development":
        "Developed a secure backend system able to handle huge crowd of 50000+ registrations for events. The system was able to handle 1000+ requests per second.",
      "Leading The Campus Ambassador Program":
        "Led a team of 10+ campus ambassadors to promote the event in their respective colleges, resulting in a 30% increase in event participation.",
    },
    Time: ["July '22", "September '22"],
    Tech: ["react", "javascript", "tailwindcss", "vercel", "figma"],
  },
];
