import { TECHS } from "../utils/contants";

const { NEXT, REACT, TAILWIND, MYSQL, JAVASCRIPT, ORACLE_DB, CSHARP, POSTHOG } =
  TECHS;

const WorkExperiences = [
  {
    name: "Nas Company",
    role: "Software Engineer Intern",
    startDate: "Jun 2024",
    endDate: "Aug 2024",
    deliverables: [
      "Implemented core frontend features using Next.js, significantly enhancing user experience for over 1.5 million users",
      "Integrated PostHog with Next.js to collect and analyze critical web performance metrics, including network performance and Core Web Vitals, which delivered key insights for improving SEO",
      "Optimised page load time by over 50% by diagnosing and resolving page cache misses with Vercel, and reducing bundle size, which significantly enhanced site performance and user satisfaction",
    ],
    techs: [NEXT, TAILWIND, POSTHOG],
    logo: "/images/nasLogo.jfif",
  },
  {
    name: "Aastar Trading Pte Ltd | KPN Corp",
    role: "Software Developer Intern",
    startDate: "May 2023",
    endDate: "Nov 2023",
    companyDescription: `
      Aastar Trading is an international trading company based in Singapore, specialised in procurement and distribution of cement products, fertilizer, oils & fats, consumer products, 
      oleochemicals and green energy.
      `,
    deliverables: [
      "Streamlined and automated critical business processes, such as generating accounting reports, through the development of the company’s business portal using React and C#, which enhanced operational efficiency by over 60% and reduced human error",
      "Initiated and led the development of detailed code documentation, including UML and sequence diagrams using PlantUML, to support the integration of future developers into the codebase",
    ],
    techs: [REACT, CSHARP, JAVASCRIPT, MYSQL, ORACLE_DB],
    logo: "/images/kpnLogo.png",
  },
];
export default WorkExperiences;
