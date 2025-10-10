import IdCardImage from "@/images/Id Card.jpg";
import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Riandi Kartiko",
  initials: "Diko",
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/Jakarta",
  about: "IT / Software Developer / Full Stack Engineer",
  summary: (
    <>
      Experienced IT and Software Developer with a demonstrated history of
      working in the information technology and services industry. Skilled in
      Full Stack Development, System Architecture, and various programming
      languages and frameworks. Strong engineering professional with a
      Bachelor's Degree in Informatics from Telkom University.
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
        url: "https://www.linkedin.com/in/riandi-kartiko/",
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
          Being a member of IT & System Innovation team at Samsung Electronics
          Indonesia, I am responsible for helping the business to shape IT
          strategies that support and drive through with their processes,
          concentrating on innovation & optimization systems and infrastructure.
          I apply my skills in full-stack development and system architecture to
          facilitate the seamless adoption of technologies that power our
          company’s growth and competitive edge. My responsibilities and
          accomplishments include:
          <ul className="list-inside list-disc mt-2 pl-3">
            <li>
              <span className="font-semibold">
                Develop IT Strategy & Execution
              </span>
              : Participate in shaping IT strategy enabling Samsung’s broader
              business strategy. This may take the form of setting up IT
              strategies for the years ahead, scanning the horizon for new
              technical possibilities, or diagnosing how various systems
              currently fit with what the company’s trying to do.
            </li>

            <li>
              <span className="font-semibold">
                System Development & Maintenance
              </span>
              : Plan, develop and maintain IT systems & infrastructure which
              include utilization of software engineering principles best
              practices. What I do is find out what the customer needs from our
              product, fix things in infrastructure and make sure that it's all
              working fine.
            </li>

            <li>
              <span className="font-semibold">Innovate to the IT System</span>:
              Improving IT Systems continuously by analyzing their purpose,
              performance efficiency and identifying innovation points. I
              develop improvements to system design as a result of changing
              Business requirements.
            </li>

            <li>
              <span className="font-semibold">IT Security</span>: Working with
              IT in developing IT security policies to protect against security
              threats. This may involve the research of new security
              technologies, the development of protocols, as well as deploying
              firewalls and antivirus applications among other measures.
            </li>

            <li>
              <span className="font-semibold">Project Management</span>: Oversee
              key IT projects against their architecture and through critical
              milestones to ensure deadlines are met and budgets are on track. I
              collaborate with diverse teams step-by-step for successful roll
              out and alignment to business goals.
            </li>
            <li>
              <span className="font-semibold">
                Collaboration & Communication
              </span>
              : Engaging cross functionally to share IT requirements and tailor
              solutions for the team. It's my role to bridge the gap between
              technical and business teams, ensuring our IT initiatives are
              closely tied to what we're striving to achieve as a company.
            </li>

            <li>
              <span className="font-semibold">Support and Training</span>: all
              employee training and support for new systems/technology. I create
              training content workshops and provide direct support so staff
              knows how to use IT.
            </li>

            <li>
              <span className="font-semibold">
                Vendor & Stakeholder Management
              </span>
              : Work with external vendors and stakeholders that IT services and
              products meets the company's standards & requirement. This should
              involve all areas of sourcing and vendor relationships, including
              contracts, relations management and delivery quality.
            </li>

            <li>
              <span className="font-semibold">
                Lifelong Learning & Development
              </span>
              : Keeping track of the latest technological changes and industry
              trends; enabling Samsung to consistently be first-to-market with
              all the most impressive innovations in our target fields. I attend
              training and workshops or conferences to further develop my skills
              and knowledge.
            </li>
          </ul>
          <br />
          This job has honed even more how to manage risk, make decisions and
          analyze IT systems. I work cross-functionally with different teams to
          provide cutting-edge motived solutions and secure the IT
          infrastructure of Samsung Dynamic environment.
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
          At NAP Info Lintas Nusa, I played a key role in leading the technical
          architecture and development of enterprise-level systems. I focused on
          creating scalable, high-performance platforms to meet the business
          needs of clients across multiple industries. My contributions
          included:
          <ul className="list-inside list-disc mt-2 pl-3">
            <li>
              <span className="font-semibold">
                System Architecture & Design:
              </span>{" "}
              Leading the planning, design, and execution of scalable and secure
              systems, ensuring optimal performance for complex business
              applications.
            </li>
            <li>
              <span className="font-semibold">Development Leadership:</span>{" "}
              Managing development teams, providing technical mentorship, and
              ensuring the quality of code through the implementation of best
              practices and code reviews.
            </li>
            <li>
              <span className="font-semibold">Client-Focused Solutions:</span>{" "}
              Successfully delivering key projects, including payment gateway
              integrations (Dana, Doku, Midtrans), CRM systems, and custom
              internal business solutions, addressing both B2B and B2C needs.
            </li>
          </ul>
          Through this role, I developed expertise in system design, cost
          analysis, server management, and system security, as well as a strong
          ability to collaborate with cross-functional teams to deliver tailored
          solutions that meet client objectives.
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
      techStack: ["PHP", "JavaScript", "Laravel", "Nginx", "Redis", "Microsoft SQL Server"],
      description:
        "Bonded Zone Inventory Monitoring is a Laravel web system that consolidates ERP and non‑ERP inventory to provide near‑real‑time, auditable customs reports, exports, and role‑based access for PER‑09/BC/2014 and AEO compliance.",
      link: {
        label: "customs.sein-p.com",
        href: "https://customs.sein-p.com",
      },
    },
    {
      title: "IT Strategy & Execution System",
      techStack: ["PHP", "JavaScript", "Python", "SQL", ".NET", "Vue.js", "Node.js"],
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
