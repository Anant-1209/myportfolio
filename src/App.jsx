import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Database, 
  Cloud, 
  Server, 
  Terminal,
  Cpu,
  Globe,
  Award,
  Briefcase,
  GraduationCap,
  ChevronDown,
  Moon,
  Sun,
  Phone
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo + Small Profile Photo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('home')}>
             {/* Increased size from w-10 h-10 to w-16 h-16 and added object-top to show full head */}
             <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-cyan-500 transition-colors">
                <img 
                  src="./profile.jpeg" 
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://images.unsplash.com/photo-1507238691140-d94cf48a2154?q=80&w=2070&auto=format&fit=crop"; 
                  }}
                  alt="AKS" 
                  className="w-full h-full object-cover object-top"
                />
             </div>
             <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
               AKS<span className="text-cyan-500">.</span>
             </div>
          </div>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`hover:text-cyan-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-slate-400'}`}
              >
                {item}
              </button>
            ))}
          </div>

          <button 
            onClick={() => scrollTo('contact')}
            className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm font-medium transition-all hover:scale-105 active:scale-95 text-slate-200"
          >
            Contact Me
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
              Open to Opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Anant Kumar <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Sahu
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Full Stack Developer & Cloud Engineer based in Pune. 
              Specializing in scalable microservices, cloud automation, and building intuitive user experiences.
            </p>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Anant-1209" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-cyan-400 transition-all border border-slate-700">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/anant-sahu-70bb2419b" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-cyan-400 transition-all border border-slate-700">
                <Linkedin size={20} />
              </a>
              <a href="mailto:a2000anantsahu@gmail.com" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-cyan-400 transition-all border border-slate-700">
                <Mail size={20} />
              </a>
            </div>

            <div className="pt-8">
               <button onClick={() => scrollTo('projects')} className="group flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">
                 See my work
                 <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
               </button>
            </div>
          </div>

          {/* Right Side: Tech/Science Visualization */}
          <div className="relative group perspective-1000">
             {/* Floating Icons Background */}
             <div className="absolute -top-10 -right-10 text-cyan-500/10 animate-bounce duration-[3000ms]"><Cloud size={100} /></div>
             <div className="absolute -bottom-10 -left-10 text-blue-500/10 animate-bounce duration-[4000ms]"><Database size={100} /></div>

             {/* Code Terminal / Science Thought Card */}
             <div className="relative z-10 p-8 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-800 shadow-2xl transform transition-transform hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">innovation_engine.ts</span>
                </div>

                <div className="space-y-3 font-mono text-sm leading-relaxed">
                   <div className="flex gap-2">
                       <span className="text-pink-400">const</span>
                       <span className="text-blue-400">future</span>
                       <span className="text-slate-400">=</span>
                       <span className="text-yellow-300">await</span>
                       <span className="text-blue-400">technology</span>
                       <span className="text-slate-400">.evolve();</span>
                   </div>
                   <div className="flex gap-2 pl-4 border-l-2 border-slate-800">
                       <span className="text-slate-500">// Optimizing for scalability</span>
                   </div>
                   <div className="flex gap-2">
                        <span className="text-pink-400">if</span>
                        <span className="text-slate-400">(</span>
                        <span className="text-blue-400">passion</span>
                        <span className="text-slate-400">&&</span>
                        <span className="text-blue-400">code</span>
                        <span className="text-slate-400">) {'{'}</span>
                   </div>
                   <div className="pl-6 text-green-400">
                        return "Breakthrough";
                   </div>
                   <div className="text-slate-400">{'}'}</div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/50">
                    <p className="text-slate-400 italic text-center font-serif text-lg">
                      "Any sufficiently advanced technology is indistinguishable from magic."
                    </p>
                    <p className="text-center text-cyan-500 text-xs font-semibold mt-3 tracking-widest uppercase">
                      - Arthur C. Clarke
                    </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* About & Stats Section - Bento Grid Style */}
      <section id="about" className="py-24 bg-slate-950 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bio Card */}
            <div className="md:col-span-2 p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-4">The Developer</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                I'm a Graduate Engineering Trainee with a passion for building robust, scalable systems. 
                With a strong foundation in <span className="text-cyan-400">Computer Science</span> from NMIT Bangalore (8.59 CGPA), 
                I bridge the gap between complex backend logic and responsive frontend design.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Full Stack', 'Cloud Native', 'DevOps', 'Microservices'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-slate-800 text-xs font-medium text-slate-300 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Education Card */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-center">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                <GraduationCap className="text-blue-400" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-white">B.E. Info Science</h4>
              <p className="text-sm text-slate-400 mt-1">Nitte Meenakshi Institute of Technology</p>
              <p className="text-2xl font-bold text-cyan-400 mt-2">8.59 <span className="text-sm font-normal text-slate-500">/ 10 CGPA</span></p>
            </div>

            {/* Certifications Marquee/Grid */}
            <div className="md:col-span-3 p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-800">
              <h3 className="text-sm font-uppercase tracking-wider text-slate-500 mb-6 font-semibold">CERTIFICATIONS</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                 {[
                   { name: 'Google Cloud Associate', issuer: 'Google' },
                   { name: 'AWS Academy Arch.', issuer: 'AWS' },
                   { name: 'AWS Academy Dev.', issuer: 'AWS' },
                   { name: 'Responsive Web Design', issuer: 'freeCodeCamp' }
                 ].map((cert, idx) => (
                   <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-950/50 border border-slate-800">
                     <Award size={18} className="text-yellow-500 shrink-0" />
                     <div>
                       <p className="text-sm font-medium text-slate-200">{cert.name}</p>
                       <p className="text-xs text-slate-500">{cert.issuer}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
            Experience
          </h2>

          <div className="relative border-l border-slate-800 ml-3 space-y-12">
            {[
              {
                role: "Graduate Engineering Trainee",
                company: "Worldline Global Services",
                period: "Dec 2024 - Present",
                desc: "Developing 'Collabo', a full-stack collaboration platform using .NET Core for backend microservices and TypeScript for a responsive frontend. Designing normalized SQL schemas and implementing secure RESTful APIs to improve cross-team efficiency by 40%."
              },
              {
                role: "Project Intern",
                company: "Worldline Global Services",
                period: "Aug 2024 - Nov 2024",
                desc: "Automated Merchant Onboarding using n8n, reducing manual entry by 50%. Deployed cost-effective cloud automation on AWS maintaining 99.9% uptime."
              }
            ].map((job, index) => (
              <div key={index} className="relative pl-8 group">
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors border border-slate-900 ring-4 ring-slate-900" />
                
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">{job.role}</h3>
                  <span className="text-sm font-mono text-slate-500">{job.period}</span>
                </div>
                
                <div className="flex items-center gap-2 mb-4 text-slate-300">
                  <Briefcase size={16} />
                  <span>{job.company}</span>
                </div>
                
                <p className="text-slate-400 leading-relaxed max-w-2xl">
                  {job.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Travel Diaries",
                tech: ["MERN Stack", "JWT", "React"],
                desc: "A travel blog platform with role-based access control and optimized component rendering.",
                icon: <Globe className="text-cyan-400" size={24} />
              },
              {
                title: "Sorting Visualizer",
                tech: ["React", "Algorithms", "Animation"],
                desc: "Interactive visualizer for Bubble, Merge, and Quick sort with real-time performance metrics.",
                icon: <Cpu className="text-purple-400" size={24} />
              },
              {
                title: "Employee Management",
                tech: ["SQL", "Data Analytics", "CRUD"],
                desc: "Enterprise-grade system with 40% faster query execution via indexing and automated HR reporting.",
                icon: <Database className="text-blue-400" size={24} />
              }
            ].map((project, idx) => (
              <div key={idx} className="group relative p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-900/20 transition-all duration-300">
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-3 rounded-lg bg-slate-800 group-hover:bg-slate-700 transition-colors">
                    {project.icon}
                  </div>
                  <ExternalLink size={20} className="text-slate-600 group-hover:text-white transition-colors cursor-pointer" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 min-h-[60px]">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
            Technical Arsenal
          </h2>

          <div className="grid gap-8">
            {[
              { category: "Languages & Core", items: ["Java", "JavaScript", "TypeScript", "Python", "C# (.NET)", "SQL"] },
              { category: "Frameworks & Libraries", items: ["React.js", "Node.js", "Express", "Spring Boot", ".NET Core", "Tailwind"] },
              { category: "Cloud & DevOps", items: ["AWS", "Google Cloud", "Docker", "Jenkins", "GitHub Actions", "n8n"] },
              { category: "Databases & Tools", items: ["MongoDB", "PostgreSQL", "MySQL", "Git", "VS Code", "Postman"] }
            ].map((skillGroup, idx) => (
              <div key={idx} className="bg-slate-900 rounded-xl p-6 border border-slate-800">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-lg bg-slate-800 text-slate-200 text-sm font-medium hover:bg-slate-700 hover:text-cyan-400 transition-colors cursor-default border border-slate-700/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-8 flex justify-center items-center gap-3">
             <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
            Get In Touch
          </h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
            I'm currently open to new opportunities as a Full Stack Developer or Cloud Engineer. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="mailto:a2000anantsahu@gmail.com" className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Me</h3>
              <p className="text-slate-400 group-hover:text-cyan-400 transition-colors">a2000anantsahu@gmail.com</p>
            </a>

             <a href="tel:+918726052558" className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Me</h3>
              <p className="text-slate-400 group-hover:text-cyan-400 transition-colors">+91 87260 52558</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6">Let's build something amazing together</h2>
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:a2000anantsahu@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              a2000anantsahu@gmail.com
            </a>
            <span className="text-slate-600">|</span>
            <a href="tel:+918726052558" className="text-slate-400 hover:text-cyan-400 transition-colors">
              +91 87260 52558
            </a>
          </div>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Anant Kumar Sahu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;