import { useEffect, useState } from 'react';
import { Award, ChevronDown, ExternalLink, Lightbulb, Linkedin, Mail, Menu, Phone, Rocket, Target, TrendingUp, Users, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const summary = "Data Analyst with experience in machine learning, product analytics, financial analytics, experimentation, predictive modeling, and data pipeline development across health tech, enterprise technology, and analytics environments. Built Python, SQL, and Firebase Analytics models to predict churn, personalize user experiences, and improve D7 retention by ~10% through data-driven product optimization. Developed predictive risk-scoring and credit risk models using XGBoost, logistic regression, R, and SQL, accelerating incident triage by 35% and analyzing 180K+ firm-year observations.";

  const experience = [
    {
      company: "Walnut Health",
      role: "Data Scientist",
      location: "Bangalore, India",
      dates: "Jun 2024 - Jun 2025",
      highlights: [
        "Built and deployed end-to-end machine learning models using Python, SQL, and Firebase Analytics to predict user churn, personalize in-app experiences, and lift D7 retention by ~10%.",
        "Designed experimentation frameworks and product KPI tracking for D0/D7 retention, session frequency, feature adoption, and churn probability using Tableau and SQL.",
        "Partnered with product and engineering teams to translate churn analysis, cohort behavior, and user engagement trends into data-driven product decisions, supporting a ~10% lift in D7 retention."
      ]
    },
    {
      company: "HCL",
      role: "Data & Insights Lead",
      location: "Noida, India",
      dates: "Jul 2022 - May 2024",
      highlights: [
        "Analyzed data from 200+ production releases using SQL, Python, Pandas, NumPy, and Splunk to identify system behavior patterns, deployment risks, and failure root causes.",
        "Created predictive risk-scoring models using Python, XGBoost, and statistical modeling techniques to flag high-risk deployments, accelerate incident triage by 35%, and save ~40 engineering hours per month.",
        "Translated release analytics and incident patterns across 200+ deployment cycles into operational insights for engineering teams, improving issue prioritization, root-cause analysis, and deployment decision-making."
      ]
    },
    {
      company: "Convosight",
      role: "Data Analyst Intern",
      location: "Noida, India",
      dates: "Nov 2021 - Jan 2022",
      highlights: [
        "Engineered AWS Lambda functions using Python, Golang, DynamoDB, and Serverless Framework to support scalable analytics, reporting, and product data workflows.",
        "Maintained PostgreSQL-based data services and REST APIs used by 5+ product teams for data extraction, reporting automation, and workflow optimization."
      ]
    }
  ];

  const projects = [
    {
      title: "Bankruptcy Prediction & Credit Risk Modeling",
      subtitle: "R, CRSP/Compustat, Logistic Regression",
      category: "Financial Analytics",
      introduction: "Built and benchmarked corporate bankruptcy prediction models in R across 180,000+ CRSP/Compustat firm-year observations.",
      problem: "Credit risk teams need reliable classification models to identify bankruptcy risk across large firm-year datasets.",
      objective: "Benchmark classic and regression-based bankruptcy prediction models for credit risk classification.",
      methodology: [
        "Built Altman, Zmijewski, Shumway, and logistic regression models in R.",
        "Analyzed 180,000+ CRSP/Compustat firm-year observations.",
        "Compared model performance using classification metrics and credit risk evaluation."
      ],
      results: [
        "Achieved 0.835 AUC for credit risk classification.",
        "Benchmarked multiple bankruptcy prediction frameworks.",
        "Created an analytical foundation for corporate default risk assessment."
      ],
      conclusion: "The project demonstrated large-scale financial analytics and credit risk modeling using statistical classification techniques."
    },
    {
      title: "EV Charging Demand Forecasting & Geospatial Analytics",
      subtitle: "Python, R, OLS, Random Forest, KNN",
      category: "Geospatial Analytics",
      introduction: "Developed predictive demand models across 11,400+ EV charging sessions, integrating four datasets to forecast infrastructure demand through 2028.",
      problem: "EV infrastructure planning requires accurate demand forecasting and district-level utilization insight for capacity expansion.",
      objective: "Forecast EV charging demand and identify high-utilization districts for future infrastructure investment.",
      methodology: [
        "Integrated four datasets covering EV charging sessions and location signals.",
        "Built OLS, Random Forest, and KNN demand models using Python and R.",
        "Analyzed geospatial utilization patterns to support capacity planning."
      ],
      results: [
        "Modeled 11,400+ EV charging sessions.",
        "Forecasted infrastructure demand through 2028.",
        "Identified high-utilization districts for capacity expansion."
      ],
      conclusion: "The project connected predictive modeling and geospatial analytics to practical infrastructure planning."
    },
    {
      title: "Computer Vision-Based Food Quality Classification",
      subtitle: "Python, ResNet-18 CNN",
      category: "Computer Vision",
      introduction: "Developed a ResNet-18 CNN image classification model in Python to detect healthy versus rotten fruits and vegetables.",
      problem: "Food quality assessment can benefit from automated image classification to identify spoilage more consistently and efficiently.",
      objective: "Classify healthy and rotten produce images with high predictive accuracy.",
      methodology: [
        "Implemented a ResNet-18 CNN image classification model in Python.",
        "Trained and evaluated the model on healthy and rotten produce images.",
        "Measured test accuracy for food quality assessment."
      ],
      results: [
        "Achieved 93.36% test accuracy.",
        "Built a computer vision workflow for food quality classification.",
        "Demonstrated deep learning application to practical quality assessment."
      ],
      conclusion: "The model showed strong image classification performance for food quality detection."
    },
    {
      title: "Image Inpainting & Generative Deep Learning",
      subtitle: "Python, Partial Convolution U-Net, ICACCS 2022",
      category: "Generative Deep Learning",
      introduction: "Engineered a partial convolution U-Net image inpainting model in Python and published results in ICACCS 2022.",
      problem: "Image restoration models need to fill missing regions efficiently while maintaining visual quality.",
      objective: "Improve image inpainting performance and compute efficiency using a partial convolution U-Net architecture.",
      methodology: [
        "Built a partial convolution U-Net image inpainting model in Python.",
        "Compared compute efficiency against comparable models.",
        "Documented and published results in ICACCS 2022."
      ],
      results: [
        "Improved compute efficiency by 10% over comparable models.",
        "Published results in ICACCS 2022.",
        "Demonstrated generative deep learning capabilities for image restoration."
      ],
      conclusion: "The project combined deep learning research, model engineering, and publication-ready experimentation."
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Programming & Analytics',
      skills: ['Python', 'R', 'SQL', 'C++', 'C#', '.NET', 'Golang']
    },
    {
      icon: TrendingUp,
      title: 'Python Libraries & ML Frameworks',
      skills: ['Pandas', 'NumPy', 'XGBoost', 'TensorFlow', 'Feature Engineering', 'Predictive Modeling']
    },
    {
      icon: Users,
      title: 'Databases & Cloud',
      skills: ['PostgreSQL', 'DynamoDB', 'AWS Lambda', 'Firebase', 'Serverless Architecture']
    },
    {
      icon: Lightbulb,
      title: 'BI & Product Analytics',
      skills: ['Tableau', 'Splunk', 'Amplitude', 'KPI Tracking', 'Product Analytics', 'Data Visualization']
    },
    {
      icon: Rocket,
      title: 'Data Science & ML',
      skills: ['Machine Learning', 'Classification Models', 'Churn Prediction', 'Risk Scoring', 'A/B Testing', 'Hypothesis Testing', 'Causal Inference']
    },
    {
      icon: Award,
      title: 'Data Engineering & APIs',
      skills: ['Data Pipelines', 'REST APIs', 'Backend Data Services', 'Data Workflows', 'Feature Engineering']
    },
    {
      icon: TrendingUp,
      title: 'Domain Analytics',
      skills: ['Financial Analytics', 'Credit Risk Modeling', 'Geospatial Analysis', 'User Behavior Analytics']
    },
    {
      icon: Award,
      title: 'Certifications',
      skills: ['Google Advanced Data Analytics Certificate', 'Coursera, 2026', 'SQL, DataCamp', 'Python, DataCamp', 'R, DataCamp', 'Competitive Programmer Core Skills']
    }
  ];

  const education = [
    {
      school: "Duke University, The Fuqua School of Business",
      degree: "Master of Science in Quantitative Management, Business Analytics, Finance Track",
      location: "Durham, NC",
      dates: "May 2026",
      details: "GMAT: 770/800"
    },
    {
      school: "Delhi Technological University",
      degree: "Bachelor of Technology in Software Engineering",
      location: "Delhi, India",
      dates: "May 2022",
      details: "Software engineering foundation with applied work in machine learning, data systems, and backend development."
    }
  ];

  const papers: Array<{ title: string; publication: string; year: string; link: string }> = [];

  const certifications = [
    {
      title: "Google Advanced Data Analytics Certificate",
      platform: "Coursera, 2026",
      description: "Advanced data analytics credential covering statistical analysis, regression modeling, machine learning workflows, and analytical storytelling."
    },
    {
      title: "DataCamp Technical Certifications",
      platform: "SQL, Python, and R",
      description: "Completed DataCamp certifications covering SQL querying, Python analytics, R programming, and applied data workflows."
    },
    {
      title: "Competitive Programmer's Core Skills",
      platform: "Programming Certification",
      description: "Credential focused on algorithmic thinking, efficient problem solving, and core programming foundations."
    }
  ];

  const leadership = [
    {
      title: "Finance Track Chair",
      platform: "MQM Students Association, Duke Fuqua School of Business",
      description: "Served as Finance Track Chair, supporting student engagement and programming for the MQM finance track community."
    }
  ];

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'leadership', 'education', ...(papers.length > 0 ? ['papers'] : []), 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'summary', label: 'Summary' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'education', label: 'Education' },
    ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-auto">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl md:text-2xl font-display text-black tracking-wide">
              ADITYA SINGH
            </div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Aditya Singh"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              ADITYA SINGH
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              DATA ANALYST | MACHINE LEARNING, PRODUCT ANALYTICS & FINANCIAL ANALYTICS
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              DURHAM, NC, USA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'D7 RETENTION LIFT', value: '~10%', detail: 'ML-Driven Product Optimization' },
              { label: 'INCIDENT TRIAGE', value: '35%', detail: 'Acceleration Through Risk Scoring' },
              { label: 'FIRM-YEAR OBSERVATIONS', value: '180K+', detail: 'Credit Risk Modeling' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Data analyst focused on product analytics, machine learning, financial risk modeling, experimentation, and scalable data workflows.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Product Analytics',
                detail: 'Analyze churn, retention, session frequency, feature adoption, and cohort behavior to shape product decisions and improve engagement.'
              },
              {
                icon: Rocket,
                title: 'Machine Learning',
                detail: 'Build predictive models with Python, SQL, XGBoost, TensorFlow, Firebase Analytics, and statistical modeling for churn, risk scoring, and classification.'
              },
              {
                icon: Lightbulb,
                title: 'Financial Analytics',
                detail: 'Model bankruptcy risk, credit risk classification, expected loss drivers, and large financial datasets using R, SQL, and regression methods.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Data science, release analytics, predictive risk scoring, and backend analytics workflow experience across health tech and enterprise technology.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} | {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Credit risk modeling, EV demand forecasting, computer vision, and generative deep learning projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in model design, data pipelines, or analytical methodology?
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project details.
              </button>
            </p>
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Programming, machine learning, databases, product analytics, data engineering, domain analytics, and certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">LEADERSHIP</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {leadership.map((item, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-brown mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{item.title}</h3>
                    <p className="text-brown font-medium">{item.platform}</p>
                    <p className="text-brown leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} | {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {papers.length > 0 && (
        <section id="papers" className="py-24 bg-cream">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-display text-black mb-6 tracking-wide">PAPERS PUBLISHED</h2>
              <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
              <p className="text-lg text-brown max-w-2xl mx-auto font-light">
                Research and publications in machine learning, deep learning, and analytics.
              </p>
            </div>
            <div className="space-y-8">
              {papers.map((paper, index) => (
                <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                  <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                  <p className="text-brown font-medium mb-2">{paper.publication} | {paper.year}</p>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                  >
                    View Paper <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">CERTIFICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-brown mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{cert.title}</h3>
                    <p className="text-brown font-medium">{cert.platform}</p>
                    <p className="text-brown leading-relaxed font-light">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss machine learning, product analytics, financial analytics, experimentation, or data pipeline opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+19194082879"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (919) 408-2879
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/aditya-singh-86049016b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:adityasinghfuqua@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                adityasinghfuqua@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            (c) 2026 Aditya Singh | Machine Learning, Product Analytics & Financial Analytics.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
