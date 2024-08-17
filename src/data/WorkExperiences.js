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
      "Implemented core frontend features for Nas.io, a community building platform, using Next.js to significantly enhance user experience",
      "Integrated PostHog with Next.js to systematically collect and analyze web performance metrics, including network performance and core web vitals, delivering key insights for improving SEO",
      "Optimised page load time by over 50% by analysing and resolving caching issues with Vercel, and reducing bundle size",
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
      "Automated business processes such as compiling and generating accounting reports, enhancing operational efficiency and minimizing human error",
      "Streamlined critical business procedures by introducing Quality-of-Life features to the company's business portal in React and C# as well as ad-hoc bug fixes",
      "Revamped and enhanced the existing codebase through extensive refactoring, resulting in improved performance and code maintainability",
      "Successfully migrated a vital and complex business procedure from the legacy business portal to the new one, resulting in remarkable performance boosts and significantly reducing manual labor",
      "Initiated and led the development of detailed code documentation, incorporating UML and sequence diagrams, to facilitate the integration of future developers into the codebase",
    ],
    techs: [REACT, CSHARP, JAVASCRIPT, MYSQL, ORACLE_DB],
    logo: "/images/kpnLogo.png",
  },
];
export default WorkExperiences;
