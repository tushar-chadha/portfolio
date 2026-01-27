"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, MapPin, Smartphone, Download, Star, Users, Zap, Code2, Layers, Server, FileDown } from "lucide-react";

export default function Portfolio() {
  // Calculate dynamic experience (starting from Feb 2022 - CarPortal start)
  const calculateExperience = () => {
    const startDate = new Date(2022, 1, 1); // Feb 2022 (CarPortal start)
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
    const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    return { years: diffYears, months: diffMonths };
  };

  const experience = calculateExperience();
  const experienceDisplay = experience.months > 0
    ? `${experience.years}+ years ${experience.months} months`
    : `${experience.years}+ years`;

  // Calculate total app downloads from published apps
  // Misfits Communities: 50K+ downloads (from App Store stats)
  // Peace App: 10K+ downloads (from App Store stats)
  // Total: 60K+ downloads
  const totalDownloads = "60K+";

  const apps = [
    {
      name: "Misfits Communities",
      subtitle: "Social Community Platform",
      description: "Cross-platform social community app built with Flutter and GoLang backend. Features WebSocket-based real-time communication, Protocol Buffers for efficient data serialization, concurrent Go routines, and PostgreSQL database with advanced notification system and cache management.",
      logo: "/misfits-logo.png",
      gradient: "from-blue-600 via-blue-500 to-cyan-500",
      appStoreLink: "https://apps.apple.com/in/app/misfits-communities/id6466216367",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.misfits.communities",
      stats: { downloads: "50K+", rating: "4.8" },
      tech: ["Flutter", "MVVM", "GoLang", "gRPC", "WebSockets", "Protocol Buffers", "PostgreSQL"],
      features: ["WebSocket Real-time Updates", "Push Notifications", "Cache Management", "Protocol Buffers", "Go Routines", "Community Events"],
      platforms: ["iOS", "Android"]
    },
    {
      name: "Peace App",
      subtitle: "Mental Wellness Platform",
      description: "Comprehensive therapy and wellness app built entirely solo. Helping users find peace through guided sessions.",
      logo: "/peace-logo.png",
      gradient: "from-purple-600 via-pink-500 to-rose-500",
      appStoreLink: "https://apps.apple.com/in/app/peace-app-therapy-and-more/id6745767430",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.peace.app",
      stats: { downloads: "10K+", rating: "4.9" },
      tech: ["Flutter", "BLoC", "MVVM", "Firebase"],
      features: ["Therapy Sessions", "Mood Tracking", "Meditation", "Progress Analytics"],
      badge: "Solo Project",
      platforms: ["iOS", "Android"]
    }
  ];

  const experiences = [
    {
      company: "Misfits Communities",
      role: "Software Engineer",
      period: "Mar 2024 - Present",
      location: "Remote (Product-Based Startup)",
      description: "Own development of cross-platform mobile features using Flutter with native iOS integrations in Swift. Architected scalable UI modules and state management flows. Led backend integration using gRPC-based APIs built in Go, optimizing performance and improving app responsiveness.",
      tags: ["Flutter", "Swift", "GoLang", "gRPC"],
    },
    {
      company: "Mobile Engineer (Remote)",
      role: "Cross-Platform Mobile Engineer",
      period: "Dec 2022 - Mar 2024",
      location: "Remote",
      description: "Delivered multiple product-grade mobile solutions across ed-tech, wellness, and SaaS domains. Projects include Peace App (mental wellness platform as sole engineer), Maishaa (admin dashboards with Go backend), and HiCollege (EdTech platform with native iOS features).",
      tags: ["Flutter", "Swift", "GoLang", "gRPC", "BLoC", "MVVM"],
      subProjects: [
        {
          name: "Peace App",
          description: "Independently architected and launched full-scale mental wellness app. Designed scalable architecture using BLoC + MVVM. Managed full product lifecycle from requirements to App Store deployment.",
        },
        {
          name: "Maishaa",
          description: "Led mobile dashboards development. Guided backend API architecture using Go and gRPC. Migrated infrastructure from cPanel to AWS.",
        },
        {
          name: "HiCollege",
          description: "Built and optimized Flutter applications with native iOS enhancements. Integrated REST and gRPC APIs with focus on performance.",
        }
      ]
    },
    {
      company: "CarPortal",
      role: "Flutter Developer & UI/UX Engineer",
      period: "Feb 2022 - Nov 2022",
      location: "Ghaziabad, UP",
      description: "Designed and developed cross-platform automotive applications using Flutter. Implemented native iOS features in Swift for performance-critical flows. Created intuitive UI/UX flows backed by user research to enhance user engagement.",
      tags: ["Flutter", "Swift", "UI/UX"],
    }
  ];

  const techStack = [
    { name: "Flutter", icon: "📱", color: "from-cyan-500 to-blue-500", desc: "Cross-platform" },
    { name: "Swift/iOS", icon: "🍎", color: "from-orange-500 to-red-500", desc: "Native iOS" },
    { name: "GoLang", icon: "🔷", color: "from-cyan-400 to-cyan-600", desc: "Backend APIs" },
    { name: "gRPC", icon: "⚡", color: "from-green-500 to-emerald-500", desc: "API Protocol" },
    { name: "Riverpod", icon: "🔄", color: "from-blue-500 to-indigo-500", desc: "State Management" },
    { name: "AWS", icon: "☁️", color: "from-orange-400 to-yellow-500", desc: "Cloud & DevOps" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Gradient Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      {/* Header/Nav */}
      <header className="sticky top-0 bg-slate-950/80 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-blue-500" />
            <div>
              <div className="text-lg font-bold">Tushar Chadha</div>
              <div className="text-xs text-white/40">Mobile Engineer</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="text-white/60 hover:text-white transition-colors">Home</a>
            <a href="#apps" className="text-white/60 hover:text-white transition-colors">Apps</a>
            <a href="#skills" className="text-white/60 hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="text-white/60 hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="/Tushar_Chadha_Resume.docx"
              download="Tushar_Chadha_Resume.docx"
              className="hidden sm:flex items-center gap-2 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              Resume
            </a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-500 transition-colors">
              Hire Me
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for new projects
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Mobile
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Engineer</span>
              </h1>

              <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-xl">
                Product-focused engineer with <span className="text-white font-medium">{experienceDisplay}</span> building and scaling cross-platform applications using <span className="text-white font-medium">Flutter</span> and native <span className="text-white font-medium">iOS (Swift)</span>. Strong backend integration expertise with <span className="text-white font-medium">Go and gRPC</span>, enabling high-performance, production-grade systems.
              </p>

              {/* Stats Row */}
              <div className="flex gap-8 mb-10">
                <div>
                  <div className="text-3xl font-bold text-white">{experience.years}+</div>
                  <div className="text-sm text-white/40">Years {experience.months > 0 && `${experience.months} Months`}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{totalDownloads}</div>
                  <div className="text-sm text-white/40">App Downloads</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#apps"
                  className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors inline-flex items-center gap-2"
                >
                  View My Apps
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="/Tushar_Chadha_Resume.docx"
                  download="Tushar_Chadha_Resume.docx"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  <FileDown className="w-4 h-4" />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Phone Mockup */}
                <div className="relative mx-auto w-64">
                  <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-2 shadow-2xl shadow-blue-500/20">
                    <div className="bg-slate-950 rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 h-full flex flex-col items-center justify-center p-6">
                        <div className="text-6xl mb-4">📱</div>
                        <div className="text-white font-bold text-lg text-center">Building Apps</div>
                        <div className="text-white/70 text-sm text-center">That Matter</div>
                      </div>
                    </div>
                  </div>
                  {/* Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
                </div>

                {/* Floating Tech Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -left-8 bg-slate-800/80 backdrop-blur border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-lg">🍎</div>
                  <div>
                    <div className="font-semibold text-sm">Swift</div>
                    <div className="text-xs text-white/40">iOS Native</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute top-1/3 -right-12 bg-slate-800/80 backdrop-blur border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-lg">📱</div>
                  <div>
                    <div className="font-semibold text-sm">Flutter</div>
                    <div className="text-xs text-white/40">Cross-platform</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-10 -left-4 bg-slate-800/80 backdrop-blur border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center text-lg">🔷</div>
                  <div>
                    <div className="font-semibold text-sm">GoLang</div>
                    <div className="text-xs text-white/40">Backend APIs</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section id="apps" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              Live on App Store & Play Store
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Apps I've <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Built</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">Production apps with real users, real downloads, and real impact</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {apps.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-slate-900/50 backdrop-blur border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all group">
                  {/* App Header */}
                  <div className={`bg-gradient-to-r ${app.gradient} p-8`}>
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <img src={app.logo} alt={`${app.name} logo`} className="w-16 h-16 rounded-2xl shadow-lg" />
                          {app.badge && (
                            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white text-xs font-medium">
                              {app.badge}
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">{app.name}</h3>
                        <p className="text-white/80 text-sm">{app.subtitle}</p>
                      </div>
                    </div>

                    {/* Store Badges */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={app.appStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black/30 hover:bg-black/50 backdrop-blur px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        <span className="text-white text-sm font-medium">App Store</span>
                      </a>
                      <a
                        href={app.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black/30 hover:bg-black/50 backdrop-blur px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                        </svg>
                        <span className="text-white text-sm font-medium">Play Store</span>
                      </a>
                    </div>
                  </div>

                  {/* App Details */}
                  <div className="p-6">
                    <p className="text-white/60 mb-6">{app.description}</p>

                    {/* Stats */}
                    <div className="flex gap-6 mb-6">
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-blue-400" />
                        <span className="text-white font-semibold">{app.stats.downloads}</span>
                        <span className="text-white/40 text-sm">downloads</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-white font-semibold">{app.stats.rating}</span>
                        <span className="text-white/40 text-sm">rating</span>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {app.tech.map((tech, i) => (
                        <span key={i} className="text-xs bg-white/10 text-white/80 px-3 py-1.5 rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2">
                      {app.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Code2 className="w-4 h-4" />
              Technical Skills
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Tech Stack</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">Technologies I use to bring mobile apps to life</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur border border-white/10 rounded-2xl p-5 hover:border-white/20 hover:bg-slate-800/50 transition-all text-center"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-2xl mx-auto mb-3`}>
                  {tech.icon}
                </div>
                <div className="font-semibold text-white">{tech.name}</div>
                <div className="text-xs text-white/40 mt-1">{tech.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 text-center">
              <Layers className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="font-semibold text-white mb-1">Architecture</div>
              <div className="text-sm text-white/40">Riverpod, BLoC, MVVM, Clean Architecture</div>
            </div>
            <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 text-center">
              <Server className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="font-semibold text-white mb-1">Backend Integration</div>
              <div className="text-sm text-white/40">REST APIs, gRPC, API Contract Design</div>
            </div>
            <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 text-center">
              <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="font-semibold text-white mb-1">Performance & DevOps</div>
              <div className="text-sm text-white/40">App Optimization, CI/CD, AWS, Crash Monitoring</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Work History
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Journey</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                    <div className="text-blue-400 font-medium">{exp.role}</div>
                    <div className="flex items-center gap-1 text-sm text-white/40 mt-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </div>
                  </div>
                  <div className="text-sm text-white/60 bg-white/5 px-4 py-2 rounded-full whitespace-nowrap">{exp.period}</div>
                </div>
                <p className="text-white/60 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent -z-10" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-blue-600/20 to-transparent blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Open to opportunities
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Build <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-white/60 mb-12 max-w-xl mx-auto">Have an app idea? Need a mobile developer? Let's chat and turn your vision into reality.</p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a href="mailto:Tushar_chadha@hotmail.com" className="bg-slate-900/50 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-white/40 mb-1">Email</div>
                <div className="font-medium text-white group-hover:text-blue-400 transition-colors text-sm">tushar_chadha@hotmail.com</div>
              </a>

              <a href="https://www.linkedin.com/in/chadha-tushar/" target="_blank" rel="noopener noreferrer" className="bg-slate-900/50 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-white/40 mb-1">LinkedIn</div>
                <div className="font-medium text-white group-hover:text-blue-400 transition-colors">/chadha-tushar</div>
              </a>

              <div className="bg-slate-900/50 backdrop-blur border border-white/10 rounded-2xl p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-white/40 mb-1">Location</div>
                <div className="font-medium text-white">Remote · India</div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="mailto:Tushar_chadha@hotmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity text-lg"
            >
              <Mail className="w-5 h-5" />
              Start a Conversation
            </a>

            <div className="border-t border-white/10 mt-16 pt-8">
              <p className="text-white/30 text-sm">
                © {new Date().getFullYear()} Tushar Chadha. Crafted with passion for mobile development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
