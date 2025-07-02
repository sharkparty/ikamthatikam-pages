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

    const experiences = [
        {
            title: 'Staff Engineer & Tech Lead - AI Frameworks & Services',
            company: 'Auth0',
            period: 'Dec 2023 - Present',
            description: 'Selected to lead the newly formed AI Frameworks & Services (AIFS) team, spearheading AI integration within Auth0\'s platform ecosystem.',
            achievements: [
                'Created MVP architecture enabling AIFS client SDK and services as drop-in tooling within the dashboard',
                'Designed solutions increasing user conversion rates via RAG-enabled LLM chat experiences',
                'Implemented organization\'s first bidirectional gRPC communication with mTLS security',
                'Engineered event-driven architecture leveraging RXJS for rich user experiences',
                'Led and mentored diverse engineering team from interns to staff level'
            ]
        },
        {
            title: 'Staff Fullstack Engineer & Tech Lead - Marketplace',
            company: 'Auth0',
            period: 'Oct 2020 - Dec 2023',
            description: 'Led transformation of Auth0\'s extensibility model by introducing a Marketplace ecosystem that replaced disparate solutions with a partner-driven model.',
            achievements: [
                'Grew integrations catalog from ~20 to hundreds of integrations',
                'Designed scalable API-first architecture using Golang and Node.js',
                'Pioneered introduction of templates to accelerate partner adoption',
                'Architected support for open-source repositories enabling partner flexibility',
                'Recruited and mentored over a dozen engineers for flagship Auth0 initiatives'
            ]
        },
        {
            title: 'Staff Engineer & Tech Lead',
            company: 'RetailMeNot',
            period: 'May 2018 - Oct 2020',
            description: 'Led replatforming of RxSaver to RetailMeNot\'s first isomorphic React site with GraphQL API, utilizing Kubernetes and Google Cloud.',
            achievements: [
                'Migrated legacy system to modern isomorphic React site on GCP with GraphQL API',
                'Designed and implemented Kubernetes infrastructure for enhanced scalability',
                'Integrated best-in-class tech stack including Akamai, Algolia, LaunchDarkly, and Segment',
                'Led RMN design system team delivering React UI library with reusable components',
                'Modernized QA organization from traditional QA to test engineering focus'
            ]
        },
        {
            title: 'Staff UI Engineer',
            company: 'SailPoint',
            period: 'May 2017 - Apr 2018',
            description: 'Worked on IdentityAI product leveraging artificial intelligence to analyze identity data and provide contextual insights for identity governance.',
            achievements: [
                'Developed AI-powered solution for ingesting large amounts of identity data',
                'Implemented machine learning techniques for anomalous behavior identification',
                'Built contextual insights platform for supercharged identity governance',
                'Enabled customers to focus governance controls on higher risk components'
            ]
        },
        {
            title: 'Sr. Engineer & Team Lead',
            company: 'Bullhorn',
            period: 'Oct 2015 - May 2017',
            description: 'Led front-end architecture of greenfield application from whiteboard to production, defining full CI pipeline for automated software delivery.',
            achievements: [
                'Architected greenfield application with comprehensive CI/CD pipeline',
                'Trained teams on performance, TDD, TypeScript, ES2015, Webpack, and Angular',
                'Primary owner of organization\'s most widely adopted open source web app',
                'Delivered multiple tech talks as evangelist for front-end open source projects'
            ]
        },
        {
            title: 'Senior Fullstack Engineer & Team Lead',
            company: 'Crescendo Content Marketing',
            period: 'Jul 2015 - Oct 2015',
            description: 'Led transition from monolithic Java application to microservices-based architecture using Node.js and Angular.',
            achievements: [
                'Applied strangle pattern to iteratively migrate functionality reducing risks',
                'Implemented DynamoDB for scalable, high-performance data management',
                'Designed Jenkins-based CI/CD pipelines for automated deployments',
                'Developed internal training program for onboarding junior engineers from UMass'
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
        }
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
                                                  {achievement}
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
