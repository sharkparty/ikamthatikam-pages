import React from 'react';
import {
    Mail,
    MapPin,
    Globe,
    Github,
    Linkedin,
    Calendar,
    Award,
    Code,
    Users,
    Briefcase,
    Megaphone
} from 'lucide-react';
import MarkdownToJSX from 'markdown-to-jsx';

type Experience = {
    title: string;
    company: string;
    period: string;
    description: string;
    achievements: Array<string>;
    tags?: Array<string>;
}

function App() {
    const skills = [
        { name: 'Typescript / Javascript', level: 100 },
        { name: 'Node.js', level: 95 },
        { name: 'Express / Fastify', level: 95 },
        { name: 'Automated CI / CD', level: 95 },
        { name: 'NextJS / Vercel', level: 95 },
        { name: 'React / Angular', level: 95 },
        { name: 'System Design / Architecture', level: 90 },
        { name: 'Redis / ElastiCache', level: 80 },
        { name: 'SQL / PostgreSQL / Aurora', level: 80 },
        { name: 'Mongo / DynamoDB', level: 75 },
        { name: 'Kubernetes / Terraform', level: 75 },
        { name: 'GCP', level: 75 },
        { name: 'Golang', level: 70 },
        { name: 'AWS', level: 70 },
        { name: 'AI/ML', level: 70 },
        { name: 'GraphQL', level: 60 },
        { name: 'Python', level: 50 },
    ];

    const experiences: Array<Experience> = [
        {
            "title": "Staff Engineer & Tech Lead - AIFS",
            "company": "Auth0",
            "period": "December 2023 - Present",
            "description": "Led the newly formed AI Frameworks & Services (AIFS) team, driving innovation in AI-driven solutions and establishing a platform-centric approach within Auth0. Championed the integration of advanced AI capabilities into core product offerings, significantly enhancing user experience and developer tooling.",
            "achievements": [
                "Spearheaded the creation of an **MVP architecture** for AIFS's client SDK and services, transforming them into seamlessly integrated, drop-in tooling within the Auth0 dashboard, shifting from isolated solutions to a cohesive platform.",
                "Designed and implemented solutions that significantly **increased user conversion rates** by enhancing the discoverability of Auth0's advanced tooling through RAG-enabled Large Language Model (LLM) chat experiences.",
                "Laid the foundational architecture for future product initiatives, enabling feature-rich **generative AI capabilities** (e.g., tool calling) for sophisticated tenant insights.",
                "Engineered and implemented the organization's first **bidirectional gRPC communication** (leveraging Protobufs) to facilitate stateful interactions between users, a Node.js gateway, and Python services, all secured with **mTLS** for robust security.",
                "Developed an **event-driven architecture**, delivering rich user experiences, powerful debugging capabilities, resilient failure/retry logic, and extensive extensibility.",
                "Maintained rigorous test coverage across projects, even under aggressive deadlines, ensuring a stable and adaptable foundation for evolving product requirements.",
                "Provided leadership and mentorship to a diverse engineering team (from interns to staff), offering actionable feedback that accelerated individual career growth.",
                "Transformed Agile practices through a multi-phase evolution, from flexible Kanban to a feature-tracking Agile approach, culminating in an automated, capacity-driven framework that significantly improved resource allocation and delivery predictability.",
                "Redesigned the system design interview process, creating a more engaging and human-centered experience, which resulted in the recruitment of high-caliber engineers who significantly contributed to critical infrastructure projects."
            ],
            "tags": [
                "AI/ML",
                "Large Language Models (LLMs)",
                "Retrieval Augmented Generation (RAG)",
                "Generative AI",
                "gRPC",
                "Protobufs",
                "mTLS",
                "Node.js",
                "Python",
                "RxJS",
                "Event-Driven Architecture",
                "System Architecture",
                "Microservices",
                "Agile Methodologies",
                "Test Automation",
                "Engineering Leadership",
                "AWS",
                "Redis",
                "Apache Kafka",
                "Fastify"
            ]
        },
        {
            "title": "Staff Engineer & Tech Lead - Marketplace",
            "company": "Auth0",
            "period": "October 2020 - December 2023",
            "description": "Led the strategic overhaul of Auth0's extensibility model, conceptualizing and delivering a highly successful Marketplace ecosystem. Drove significant expansion of the integrations catalog and influenced architectural shifts that opened new business opportunities.",
            "achievements": [
                "Led the transformation of Auth0’s extensibility model by introducing a **Marketplace ecosystem**, effectively replacing disparate extensibility solutions with a centralized, partner-driven hub that significantly improved partner and customer adoption.",
                "Drove a substantial expansion of the integrations catalog, scaling from approximately 20 to hundreds of integrations, and strategically influenced multiple teams and technical investments that shaped Auth0’s long-term extensibility and growth strategy.",
                "Designed and implemented a scalable **API-first architecture** for managing Marketplace entities (partners, integrations, actions, and listings), leveraging **Golang** and **Node.js**.",
                "Pioneered the introduction of 'templates'—a comprehensive catalog of pre-built recipes designed to accelerate partner adoption of Action integrations within authentication flows.",
                "Architected robust support for **open-source repositories**, empowering partners to develop and maintain integrations with enhanced flexibility and transparency.",
                "Influenced broader architectural shifts, leading to cross-functional investments in the Actions/Webtask runtime, which unlocked new business opportunities such as Flexible User Journeys (e.g., integrating driver’s license verification into authentication flows).",
                "Recruited and mentored over a dozen engineers, many of whom became critical contributors to flagship Auth0 initiatives and continue to drive innovation within the company, championing diverse hiring efforts to build a strong, sustainable engineering team."
            ],
            "tags": [
                "Fullstack Development",
                "API Design",
                "Golang",
                "Node.js",
                "Microservices",
                "System Architecture",
                "React",
                "MongoDB",
                "gRPC",
                "Apache Kafka",
                "PostgreSQL",
                "Fastify",
                "Cross-functional Team Leadership",
                "Product Strategy"
            ]
        },
        {
            "title": "Staff Engineer & Tech Lead",
            "company": "RetailMeNot",
            "period": "May 2018 - October 2020",
            "description": "Led the replatforming of a critical product to a modern, isomorphic React application with a GraphQL API, leveraging cloud-native infrastructure. Spearheaded key initiatives in design systems, engineering mentorship, and quality assurance modernization.",
            "achievements": [
                "Led the re-architecture of RxSaver's platform, successfully migrating from a legacy system to a modern **isomorphic React site** on **Google Cloud Platform (GCP)** with a **GraphQL API**. This foundational shift enabled granular data collection and robust user journey mapping, yielding critical insights for significant user growth and improved business metrics.",
                "Designed and implemented **Kubernetes infrastructure** to seamlessly migrate and enhance the scalability of services, streamlining operations and providing the agility necessary for rapid product iteration.",
                "Integrated and optimized a best-in-class technology stack including **Akamai**, **Algolia**, **LaunchDarkly**, **Segment**, **Optimizely**, and **GitLab**, facilitating data-driven decision-making, A/B testing, and personalized user experiences, thereby driving higher user engagement and conversion rates.",
                "Transitioned to lead the RetailMeNot design system team, delivering a comprehensive **React UI library** with reusable components that unified the design and development workflow across all web properties.",
                "Resolved complex challenges in cross-functional collaboration by effectively aligning engineering and design teams on shared goals, significantly improving efficiency and product consistency.",
                "Developed a structured growth curriculum and provided technical guidance and regular progress reviews, effectively mentoring mid- and junior-level engineers to foster their skill development.",
                "Drove the evolution of the QA organization by defining and implementing a technical strategy that successfully shifted from traditional QA practices to a modern **test engineering** focus."
            ],
            "tags": [
                "React",
                "Next.js",
                "GraphQL",
                "Kubernetes",
                "Google Cloud Platform (GCP)",
                "Isomorphic Applications",
                "Design Systems",
                "System Architecture",
                "Test Automation",
                "Node.js",
                "Engineering Leadership",
                "Agile Project Management",
                "CI/CD"
            ]
        },
        {
            "title": "Staff UI Engineer",
            "company": "SailPoint",
            "period": "May 2017 - April 2018",
            "description": "Contributed as a Staff UI Engineer to IdentityAI, a cutting-edge product leveraging Artificial Intelligence and Machine Learning to provide contextual insights for identity governance, focusing on suspicious and anomalous behavior detection.",
            "achievements": [
                "Developed and optimized user interfaces for **IdentityAI**, a solution leveraging **Artificial Intelligence** and **Machine Learning** to ingest and analyze large volumes of identity data and real-time activity for contextual insights.",
                "Collaborated with cross-functional teams to integrate UI components with backend systems designed to identify suspicious or anomalous behaviors in user access.",
                "Applied modern front-end development practices to create intuitive visualizations of risk associated with user access, enabling customers to focus governance controls effectively."
            ],
            "tags": [
                "UI Engineering",
                "Artificial Intelligence (AI)",
                "Machine Learning",
                "Angular",
                "System Architecture",
                "Cross-functional Team Leadership",
                "Agile Project Management",
                "AWS",
                "Flink"
            ]
        },
        {
            "title": "Sr. Engineer & Team Lead",
            "company": "Bullhorn",
            "period": "October 2015 - May 2017",
            "description": "Led the front-end architecture for a greenfield application, from conception to production. Established a robust CI pipeline, emphasized automated qualitative analysis, and provided extensive training on contemporary web technologies.",
            "achievements": [
                "Led the front-end architecture and development of a greenfield application, guiding it from initial whiteboarding through to successful production deployment.",
                "Defined and implemented a comprehensive **Continuous Integration (CI)** pipeline to automate software delivery, with a strong focus on automated qualitative analysis for high code quality.",
                "Provided extensive training to senior and entry-level teams on a wide array of contemporary front-end topics including **performance optimization**, **Test-Driven Development (TDD)**, **TypeScript**, **ES2015+**, **Webpack**, and **Angular (AOT)**.",
                "Served as the primary owner of the organization’s most widely adopted open-source web application and conceptualized an internationalization (i18n) framework for Angular, contributing significantly to open-source initiatives.",
                "Delivered multiple technical talks as an evangelist for front-end open-source projects, and was a presenter at Engage 2016 in Boston."
            ],
            "tags": [
                "Front-end Architecture",
                "Continuous Integration (CI)",
                "Automated Testing",
                "TypeScript",
                "ES2015+",
                "Webpack",
                "Angular",
                "Redux.js",
                "AWS",
                "Apache Kafka",
                "Open Source",
                "Technical Training"
            ]
        },
        {
            "title": "Senior Fullstack Engineer & Team Lead",
            "company": "Crescendo Content Marketing (Formerly Percussion Software)",
            "period": "July 2015 - October 2015",
            "description": "Spearheaded the transition from a monolithic Java application to a modern microservices architecture using Node.js and Angular, implementing iterative migration strategies and robust CI/CD pipelines.",
            "achievements": [
                "Led the critical transition from a monolithic Java application with JSP web views to a scalable **microservices-based architecture** utilizing **Node.js** and **Angular**.",
                "Applied the **strangler pattern** to iteratively migrate functionality, significantly reducing risks and ensuring continuous business operations during the transition.",
                "Implemented **Amazon DynamoDB** for scalable, high-performance data management across the new microservices architecture.",
                "Designed and deployed **Jenkins-based CI/CD pipelines**, enabling fully automated builds, testing, and deployments, which dramatically improved development velocity.",
                "Ensured all new microservices were highly scalable, comprehensively unit tested, and end-to-end tested for robust quality assurance.",
                "Introduced and defined methodologies to maximize team velocity, fostering iterative delivery and continuous feedback loops.",
                "Developed and delivered an internal training program to onboard and train junior engineers, establishing a scalable talent pipeline.",
                "Acted as a hands-on mentor and technical leader, ensuring strict adherence to best practices in **Agile software development**.",
                "Created high-fidelity prototypes, motion graphics, and design compositions to enhance communication and alignment between business stakeholders and engineering teams, facilitating faster iteration cycles.",
                "Delivered a scalable and flexible platform that enabled accelerated deployment of new features, reducing time-to-market and modernizing the technology stack to adapt to evolving market demands."
            ],
            "tags": [
                "Fullstack Development",
                "Microservices",
                "Node.js",
                "Angular",
                "Strangler Pattern",
                "Amazon DynamoDB",
                "Jenkins",
                "CI/CD",
                "Agile Development",
                "Test Automation",
                "Engineering Leadership",
                "AWS"
            ]
        },
        {
            "title": "Senior Software Engineer & UXA",
            "company": "Percussion Software",
            "period": "October 2014 - July 2015",
            "description": "Defined new front-end architecture and evolved the codebase to be automated, scalable, and thoroughly tested. Implemented strategies for peak team velocity and developed internal talent.",
            "achievements": [
                "Led the front-end team in defining a new architecture and evolving the existing codebase to be fully automated, highly scalable, and comprehensively unit and end-to-end tested.",
                "Incorporated and defined new methodologies for achieving and sustaining peak team velocity.",
                "Devised and implemented an internal training program for collegiate talent development, fostering growth within the engineering team.",
                "Produced high and low-fidelity motion graphics, prototypes, and compositions to significantly improve design communication between business and engineering stakeholders.",
                "Provided hands-on support to the engineering team as both an individual contributor and a mentor."
            ],
            "tags": [
                "Front-end Architecture",
                "Scalability",
                "Test Automation",
                "Team Velocity Optimization",
                "UX/UI Design",
                "Mentorship",
                "Agile Methodologies"
            ]
        },
        {
            "title": "Engineer & UXA",
            "company": "Patterson Companies, Inc.",
            "period": "April 2014 - October 2014",
            "description": "Led front-end development for a cloud-based enterprise application, actively exploring and integrating emerging web technologies and methodologies to enhance productivity. Championed knowledge transfer and UX process improvements.",
            "achievements": [
                "Led the front-end development for a cloud-based, enterprise application, actively incorporating new and evolving web technologies to enhance functionality and user experience.",
                "Enthusiastically explored and implemented relevant new technologies and methodologies to significantly improve team productivity and efficiency.",
                "Hosted multiple knowledge transfer sessions and technical talks to increase overall team proficiency in cutting-edge web development practices.",
                "Developed and managed an internal UX process to streamline the production pipeline and improve the quality of user experiences."
            ],
            "tags": [
                "Front-end Development",
                "Cloud Applications",
                "Enterprise Software",
                "JavaScript",
                "Node.js",
                "TypeScript",
                "Angular",
                "Test Automation",
                "Project Management",
                "UX Process",
                "Knowledge Transfer"
            ]
        },
        {
            "title": "Interface Developer",
            "company": "Aspect Software",
            "period": "November 2012 - February 2014",
            "description": "Architected, developed, and distributed comprehensive, cross-platform interactive solutions. Implemented new internal processes to boost team efficiency and collaboration, while exploring and integrating emerging technologies.",
            "achievements": [
                "Architected, developed, and delivered comprehensive, cross-platform interactive strategies and solutions.",
                "Developed and implemented new internal processes that significantly improved team efficiency, increased collaboration, and led to higher quality deliverables.",
                "Actively explored and integrated emerging technologies into the development workflow to maintain a competitive edge.",
                "Provided technical training and guidance to team members, fostering skill development and knowledge sharing."
            ],
            "tags": [
                "Interface Development",
                "Cross-platform Solutions",
                "JavaScript",
                "Node.js",
                "Angular",
                "Bootstrap",
                "SASS",
                "Process Improvement",
                "Technical Training"
            ]
        }
    ];

    const projects = [
        {
            title: 'AI Frameworks & Services Platform',
            tech: 'Node.js, Python, gRPC, RxJS',
            description: 'MVP architecture enabling AI client SDK and services as drop-in tooling with RAG-enabled LLM chat experiences.'
        },
        {
            title: 'Auth0 Marketplace Ecosystem',
            tech: 'Go, Node.js, React, Kafka',
            description: 'Scalable API-first architecture managing marketplace entities, growing integrations from 20 to hundreds.'
        },
        {
            title: 'RxSaver Isomorphic Platform',
            tech: 'React, GraphQL, Kubernetes, GCP',
            description: 'Modern isomorphic React site with GraphQL API, enabling granular data collection and user journey mapping.'
        },
        {
            title: 'Fuse Dental Practice Management Software',
            tech: 'Angular, Azure, C#, .NET',
            description: 'Modern cloud-based dental practice management software enabling efficient patient management and billing.'
        },
        {
            title: 'Enterprise After Hours',
            tech: 'Angular, Java',
            description: 'A partnership with Enterprise Holdings and Progressive Insurance to build a comprehensive after-hours car rental management system for after hours collisions.'
        },
        {
            title: 'Winchester Ballistics Calculator',
            tech: 'Angular, Ionic',
            description: 'A comprehensive ballistics calculator for Winchester ammunition, providing detailed trajectory and performance data.'
        },
    ];

    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
          <div className="max-w-6xl mx-auto">
              {/* Header Section */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8 mb-8 shadow-2xl">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                          K
                      </div>
                      <div className="flex-1 text-center md:text-left">
                          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                              Kam
                          </h1>
                          <h2 className="text-xl md:text-2xl text-gray-300 mb-4">Staff Engineer & Tech Lead</h2>
                          <p className="text-gray-400 text-lg leading-relaxed mb-6">
                              I’m a staff engineer and tech lead specializing in building scalable platforms, not just
                              shipping features. At Auth0, I lead the AI Frameworks & Services team, where I’ve
                              integrated LLMs into real products, built secure gRPC pipelines with mTLS, and
                              architected SDKs that plug into our dashboard like they've always belonged.  I modernize,
                              mentor, and delete more legacy code than most people write. I’ve replatformed monoliths,
                              modernized infrastructure with Kubernetes and GCP, built design systems, and led
                              high-performing teams from interns to staff engineers. Whether it’s AI, event-driven
                              systems, or untangling legacy code, I bring a practical, forward-looking approach—and a
                              low tolerance for technical debt disguised as “just one more hack.”
                          </p>
                          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                              <div className="flex items-center gap-2 bg-gray-700 px-3 py-2 rounded-full">
                                  <Mail className="w-4 h-4 text-blue-400" />
                                  <span>kameron.sween@gmail.com</span>
                              </div>
                              {/*<div className="flex items-center gap-2 bg-gray-700 px-3 py-2 rounded-full">*/}
                              {/*    <Phone className="w-4 h-4 text-green-400" />*/}
                              {/*    <span>[Your Phone]</span>*/}
                              {/*</div>*/}
                              <div className="flex items-center gap-2 bg-gray-700 px-3 py-2 rounded-full">
                                  <MapPin className="w-4 h-4 text-red-400" />
                                  <span>Remote</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Main Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column */}
                  <div className="foo space-y-8">
                      {/* Experience Section */}
                      <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                              <Briefcase className="w-6 h-6 text-blue-400" />
                              Experience
                          </h3>
                          <div className="space-y-6">
                              {experiences.map((exp, index) => (
                                  <div key={index} className="border-l-4 border-blue-500 pl-6 pb-6">
                                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                          <h4 className="text-xl font-semibold text-blue-400">{exp.title}</h4>
                                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                                              <Calendar className="w-4 h-4" />
                                              <span>{exp.period}</span>
                                          </div>
                                      </div>
                                      <p className="text-lg text-gray-300 mb-2">{exp.company}</p>
                                      <p className="text-gray-400 mb-3">{exp.description}</p>
                                      <ul className="space-y-1">
                                          {exp.achievements.map((achievement, i) => (
                                              <li key={i} className="text-gray-300 flex items-start gap-2">
                                                  <span className="text-green-400 mt-1">•</span>
                                                  <MarkdownToJSX>
                                                      {achievement}
                                                  </MarkdownToJSX>
                                              </li>
                                          ))}
                                      </ul>
                                  </div>
                              ))}
                          </div>
                      </div>

                      {/* Projects Section */}
                      <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                              <Code className="w-6 h-6 text-purple-400" />
                              Featured Projects
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {projects.map((project, index) => (
                                  <div key={index} className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                                      <h4 className="text-lg font-semibold text-purple-400 mb-2">{project.title}</h4>
                                      <p className="text-sm text-blue-300 mb-2">{project.tech}</p>
                                      <p className="text-gray-300 text-sm">{project.description}</p>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>

                  {/* Right Column */}
                  <div className="bar space-y-8">
                      {/* Links Section */}
                      <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
                          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                              <Globe className="w-5 h-5 text-green-400" />
                              Links
                          </h3>
                          <div className="space-y-3">
                              <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                                  <Github className="w-5 h-5 text-gray-300" />
                                  <a
                                      href="https://github.com/sharkparty"
                                      target="_blank"
                                      className="text-sm"
                                      rel="noopener noreferrer"
                                  >github.com/sharkparty</a>
                              </div>
                              <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                                  <Github className="w-5 h-5 text-gray-300" />
                                  <a
                                      href="https://github.com/ikamthatikam"
                                      target="_blank"
                                      className="text-sm"
                                      rel="noopener noreferrer"
                                  >github.com/ikamthatikam</a>
                              </div>
                              <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                                  <Linkedin className="w-5 h-5 text-blue-400" />
                                  <a
                                      href="https://www.linkedin.com/in/krsween"
                                      target="_blank"
                                      className="text-sm"
                                      rel="noopener noreferrer"
                                  >linkedin.com/in/krsween</a>
                              </div>
                              <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                                  <Globe className="w-5 h-5 text-green-400" />
                                  <a
                                      href="https://ikamthatikam.com"
                                      target="_blank"
                                      className="text-sm"
                                      rel="noopener noreferrer"
                                  >ikamthatikam.com</a>
                              </div>
                              <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                                  <Megaphone className="w-5 h-5 text-green-400" />
                                  <a
                                      href="https://sessionize.com/kam"
                                      target="_blank"
                                      className="text-sm"
                                      rel="noopener noreferrer"
                                  >sessionize.com/kam</a>
                              </div>
                          </div>
                      </div>

                      {/* Skills Section */}
                      <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
                          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                              <Award className="w-5 h-5 text-yellow-400" />
                              Skills
                          </h3>
                          <div className="space-y-4">
                              {skills.map((skill, index) => (
                                  <div key={index}>
                                      <div className="flex justify-between items-center mb-1">
                                          <span className="text-sm font-medium">{skill.name}</span>
                                          <span className="text-xs text-gray-400">{skill.level}%</span>
                                      </div>
                                      <div className="w-full bg-gray-600 rounded-full h-2">
                                          <div
                                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                                              style={{ width: `${skill.level}%` }}
                                          ></div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>

                      {/* Education Section */}
                      <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
                          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                              <Users className="w-5 h-5 text-indigo-400" />
                              Education
                          </h3>
                          <div className="space-y-4">
                              <div className="border-l-4 border-indigo-500 pl-4">
                                  <h4 className="font-semibold text-indigo-400">Saint Louis University</h4>
                                  <p className="text-xs text-gray-400">Philosophy & Applied Mathematics</p>
                                  <p className="text-xs text-gray-500">2010 - 2012</p>
                              </div>
                              <div className="border-l-4 border-indigo-500 pl-4">
                                  <h4 className="font-semibold text-indigo-400">Biola University</h4>
                                  <p className="text-xs text-gray-400">History & Philosophy</p>
                                  <p className="text-xs text-gray-500">2008 - 2010</p>
                              </div>
                              <div className="border-l-4 border-indigo-500 pl-4">
                                  <h4 className="font-semibold text-indigo-400">Leadership & Activities</h4>
                                  <p className="text-xs text-gray-400">Torrey Honors Program</p>
                                  <p className="text-xs text-gray-400">IRIS Marketing Team Lead</p>
                                  <p className="text-xs text-gray-400">CWC Web Marketing Director</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
