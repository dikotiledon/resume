import IdCardImage from "@/images/id-card.jpg";
import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Riandi Kartiko",
  initials: "Diko",
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/Jakarta",
  about: "IT / Software Developer / Full Stack Engineer",
  summary: (
    <>
      Full Stack & Systems Engineer with end-to-end experience from web
      applications to infrastructure. I design, build, and operate systems using
      PHP/Laravel, JavaScript/TypeScript (React/Next.js, Vue.js), and
      Debian-based Linux, often bridging development and operations. I enjoy
      turning business requirements into reliable, secure, and maintainable
      systems.
    </>
  ),
  avatarUrl: IdCardImage,
  personalWebsiteUrl: "https://riandikartiko.com",
  contact: {
    email: "riandikartiko@gmail.com",
    tel: "+62811112210",
    social: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/riandi-kartiko/",
        icon: "linkedin",
      },
      {
        name: "GitHub",
        url: "https://github.com/dikotiledon",
        icon: "github",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/callmediko",
        icon: "facebook",
      },
    ],
  },
  education: [
    {
      school: "Telkom University",
      degree: "Bachelor's Degree in Informatics. GPA: 3.21/4.00",
      start: "2016",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Samsung Electronics Indonesia",
      link: "https://www.samsung.com/id/",
      badges: [
        "Full Stack",
        "PHP",
        "Javascript",
        "Python",
        "SQL",
        "Vue.js",
        "Node.js",
        "Android",
        ".NET",
        "Kotlin",
        "Windows Server",
        "Linux (Debian Based)",
      ],
      title: "IT & System Innovation",
      start: "2022",
      end: null,
      description: (
        <>
          Developing internal systems, integrations, and automation across
          business units in an enterprise environment at Samsung.
          <ul className="list-inside list-disc mt-2 pl-3">
            <li>
              <span className="font-semibold">
                Internal Systems Development
              </span>
              : Develop and maintain internal applications that support
              day-to-day operations for multiple business and service teams.
            </li>

            <li>
              <span className="font-semibold">
                Integrations & Data Pipelines
              </span>
              : Build and optimize APIs, integrations, and data pipelines
              between departments to keep information consistent and up-to-date.
            </li>

            <li>
              <span className="font-semibold">Process Automation</span>: Design
              and implement automation solutions to reduce manual work and
              streamline cross-team workflows.
            </li>

            <li>
              <span className="font-semibold">Reliability & Performance</span>:
              Debug, tune performance, and improve the reliability of existing
              systems used in production.
            </li>

            <li>
              <span className="font-semibold">
                Cross-Functional Collaboration
              </span>
              : Work closely with business, engineering, and operations teams to
              translate requirements into scalable, secure technical solutions.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "NAP Info Lintas Nusa (Matrix)",
      link: "https://www.napinfo.co.id/",
      badges: [
        "PHP",
        "Laravel",
        "Vue.js",
        "MySQL",
        "Nginx",
        "Linux (Debian Based)",
      ],
      title: "System Development",
      start: "2022",
      end: "2023",
      description: (
        <>
          Built internal applications, monitoring tools, and middleware to
          support ISP operations and national fiber network services.
          <ul className="list-inside list-disc mt-2 pl-3">
            <li>
              <span className="font-semibold">
                System Architecture & Design:
              </span>{" "}
              Lead the planning, design, and implementation of scalable and
              secure systems, ensuring reliable performance for complex business
              applications.
            </li>
            <li>
              <span className="font-semibold">Development Leadership:</span>{" "}
              Guide development teams, provide technical mentorship, and uphold
              code quality by promoting best practices and regular code reviews.
            </li>
            <li>
              <span className="font-semibold">Client-Focused Solutions:</span>{" "}
              Deliver key projects such as payment gateway integrations (Dana,
              Doku, Midtrans), CRM systems, and custom internal business
              solutions, addressing both B2B and B2C requirements.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "PHP 7.4 - 8.4 (Laravel , CodeIgniter)",
    "Python (Flask, FastAPI)",
    ".NET (C#)",
    "Kotlin (Android)",
    "JavaScript (ES6+)",
    "React/Next.js",
    "Vue.js/Nuxt.js",
    "Node.js",
    "Tailwind CSS",
    "TypeScript",
    "Design Systems",
    "System Architecture",
    "WebSockets",
    "RESTs API",
    "CI/CD (GitHub Actions, GitLab CI, Jenkins)",
    "Docker & Docker Compose",
    "Linux Server Management (Debian Based)",
    "Web Server (Nginx, Apache)",
    "Database (MySQL, Microsoft SQL Server, Redis)",
    "Tunneling (VMess, VLESS, Shadowsocks, Trojan, etc)",
    "DNS Servers (Pihole, Unbound, Dnsdist, PowerDNS)",
    "Cloudflare (CDN, DNS, Workers)",
    "Proxy Servers (Haproxy, Nginx, Squid)",
    "Load Balancers (Haproxy, Nginx)",
    "Version Control (Git, GitHub, GitLab, Bitbucket)",
    "Microsoft Office (Word, Excel, PowerPoint, etc)",
  ],
  workProjects: [
    // Projects from work experience at Samsung Electronics Indonesia
    {
      title: "Bonded Zone Inventory Monitoring",
      techStack: [
        "PHP",
        "JavaScript",
        "Laravel",
        "Nginx",
        "Redis",
        "Microsoft SQL Server",
      ],
      description:
        "Bonded Zone Inventory Monitoring is a Laravel web system that consolidates ERP and non‑ERP inventory to provide near‑real‑time, auditable customs reports, exports, and role‑based access for PER‑09/BC/2014 and AEO compliance.",
      link: {
        label: "customs.sein-p.com",
        href: "https://customs.sein-p.com",
      },
    },
    {
      title: "IT Strategy & Execution System",
      techStack: [
        "PHP",
        "JavaScript",
        "Python",
        "SQL",
        ".NET",
        "Vue.js",
        "Node.js",
      ],
      description:
        "Developed systems to support IT strategy execution, enabling Samsung's broader business strategy. Implemented solutions for scanning technical possibilities and diagnosing system fit with business goals.",
    },
    {
      title: "System Development & Maintenance Platform",
      techStack: ["PHP", "JavaScript", "Vue.js", "MySQL", "Nginx", "Linux"],
      description:
        "Led the planning, development, and maintenance of IT systems and infrastructure. Applied software engineering principles and best practices to meet customer needs and ensure system reliability.",
    },
    {
      title: "IT Security Enhancement Initiative",
      techStack: ["Python", "Linux", "Network Security", "Firewalls"],
      description:
        "Collaborated on developing IT security policies to protect against security threats. Researched new security technologies and deployed firewalls and antivirus applications.",
    },
  ],
  projects: [
    {
      title: "Self-Host DNS Server (https://doh.riandikartiko.com)",
      techStack: ["PowerDNS", "Pihole", "Unbound", "Haproxy", "NSD"],
      description:
        "Self-hosted DNS server for managing and filtering DNS queries. Supports DoH, DoT, DNSCrypt, DNS-over-QUIC, and traditional DNS protocols. Provides ad-blocking and privacy features. ",
      link: {
        label: "doh.riandikartiko.com",
        href: "https://doh.riandikartiko.com",
      },
    },
  ],
} as const;
