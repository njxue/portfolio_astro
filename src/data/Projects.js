import { TECHS } from "../utils/contants";

const {
  NEXT,
  REACT,
  TAILWIND,
  POSTGRESQL,
  PRISMA,
  BACKBLAZE,
  JAVASCRIPT,
  TYPESCRIPT,
  HTML,
  CSS,
  FIREBASE,
  CHAKRAUI,
  JAVA,
} = TECHS;
const Projects = [
  {
    name: "Photoasis",
    img: "photoasis.png",
    start: "November 2023",
    end: "Present",
    about: {
      description: `
        Photoasis is an online photo gallery that allows you to upload your photos along with their EXIF data (camera settings, such as ISO and Aperture values). 
        Photography is my hobby, and analyzing and comparing my photos with their camera settings has enabled me to improve my skills in properly exposing photos 
        and capturing better shots. Hence, I designed Photoasis as a platform to document my growth in photography as well as a place to archive my most precious moments in life.
      `,
    },

    techs: [NEXT, TAILWIND, POSTGRESQL, PRISMA, BACKBLAZE],
    githubLink: "https://github.com/njxue/photoasis",
    productLink: "https://photoasis.vercel.app",
  },
  {
    name: "Odo.t",
    img: "odot.png",
    start: "August 2022",
    end: "March 2023",
    about: {
      motivation: `
        Todo lists serve as a reminder to the users the tasks that they have to complete. 
        However, users have to remember to add these tasks into the list of todos in the first place. 
        If they have forgotten to do so, these tasks will not appear in the todo list, 
        and they may end up forgetting about these tasks altogether.
      `,

      description: `
        Odo.t is an online todo-list where todos can be automatically added at every fixed interval (e.g. every day, every week). 
        Users only have to set the interval once, and the todo list becomes automated! 
        Odo.t also features a set of basic todo list functionalities such as sorting the tasks, grouping tasks together and marking certain tasks as important.
      `,
    },

    techs: [REACT, FIREBASE, TYPESCRIPT, HTML, CSS, CHAKRAUI],
    githubLink: "https://github.com/njxue/odot",
    productLink: "https://odot.vercel.app",
    logo: "odotLogo.png",
  },
  {
    name: "Frenergy",
    img: "frenergy.png",
    start: "May 2022",
    end: "August 2022",
    about: {
      description: `
        An online forum that caters to NUS students. It is a platform for students to engage in online discussions, search and form groups, and 
        facilitate group project planning by managing deadlines and work assignment.
      `,
    },
    techs: [REACT, FIREBASE, JAVASCRIPT, HTML, CSS, CHAKRAUI],
    githubLink: "https://github.com/njxue/frenergy",
    productLink: "https://frenergy.vercel.app",
    logo: "frenergylogo.png",
  },
  {
    name: "TA-Assist",
    img: "ta-assist.png",
    start: "September 2022",
    end: "November 2022",
    about: {
      description: `
        A brownfield team project as part of CS2103T, TA-Assist is a desktop app for Teaching Assistants (TA) to 
        keep track of students’ particulars and allocate marks for attendance and assignments. It is optimized for use via a 
        Command Line Interface (CLI) while having the benefits of a Graphical User Interface (GUI).
      `,
    },
    techs: [JAVA],
    githubLink: "https://github.com/AY2223S1-CS2103T-T12-1/tp",
    logo: "taassistLogo.png",
  },
];

export default Projects;
