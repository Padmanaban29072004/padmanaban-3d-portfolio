export const PORTFOLIO_CONFIG = {
  hero: {
    frameCount: 240,
    getPath: (index: number) => {
      const padded = index.toString().padStart(3, '0');
      return `/sequence/frame_${padded}_delay-0.042s.webp`;
    },
  },
  branding: {
    watermark: "Padmanaban.",
    phase2: {
      subTop: "Web Developer, AI and Innovator",
      name: "Padmanaban.",
    },
    phase3: {
      text: "AI Educator &\nCreative Developer.",
    },
    taglines: [
      { text: 'I teach AI to 400K+ students', emoji: '🤖' },
      { text: 'I build modern websites', emoji: '⚡' },
      { text: 'I design UI/UX in Figma', emoji: '🎨' },
      { text: 'I help businesses grow with AI', emoji: '🚀' },
    ],
    phase4: {
      headlineFirst: "I Make Tech, AI & Design Simple — ",
      headlineGradient: "So You Can Do More.",
    },
  },
  experience: [
    {
      role: "Full Stack Developer",
      company: "Freelancer",
      duration: "Jan 2025 - Jan 2026",
      description: "Full Stack Developer experienced in designing and developing responsive web applications, managing databases, and integrating front-end and back-end systems for efficient performance.",
    },
    {
      role: "HR INTERN",
      company: "HOLOGRAD",
      duration: "Aug 2024 - Nov 2024",
      description: "Assisted in recruitment and hiring processes, including screening resumes and scheduling interviews.",
    },

  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Business System",
      school: "Rajalakshmi Engineering College",
      duration: "2022 - 2026",
      description: "Core studies in data structures, algorithms, operating systems, and web technologies.",
    },
  ],
  achievements: [
    {
      title: "Runner-Up in ISRO BAH 2025",
      desc: "Selected as a Grand Finalist in the among more than 61,000 student registrations and 8,700+ competing teams nationwide, demonstrating excellence in innovation, problem-solving, and space technology research under a highly competitive national-level platform organized by ISRO.",
    },
    {
      title: "Winner in Smart India Hackathon 2025 - Internal",
      desc: "Winner of the internal round of Smart India Hackathon 2025, selected among multiple competing teams for presenting an innovative and impactful solution, demonstrating strong technical expertise, teamwork, problem-solving abilities, and project execution skills in a highly competitive institutional hackathon environment.",
    },
    {
      title: "Runner-up in Smart India Hackathon 2024 - Internal",
      desc: "Runner-up in Internal Hackathon for Smart India Hackathon 2024 , recognized for developing an innovative and impactful solution that demonstrated strong technical implementation, problem-solving ability, teamwork, and presentation excellence, securing selection among multiple competing teams for the next level of the national hackathon process."

    },
    {
      title: "Winner in Hackfest 2024 - Internal",
      desc: "Winner of the Internal Hackathon at for designing and presenting an innovative technology-driven solution, demonstrating excellence in problem-solving, technical development, teamwork, and project presentation among competing participant teams.",
    },
    {
      title: "Organized the “CodeQuest” event during our department symposium.",
      desc: "Successfully organized and coordinated the “CodeQuest” technical event during the department symposium, managing event planning, participant coordination, problem design, and smooth execution while promoting coding, logical thinking, and teamwork among students."
    },
  ],
  projects: [
    {
      title: "Phontom-Flow",
      badge: "AI & Cybersecurity",
      desc: "PHANTOM-Flow is an AI-powered smart traffic management system that analyzes real-time traffic data to detect congestion, predict traffic patterns, and optimize traffic flow. Built using Python, FastAPI, OpenCV, YOLO, Redis, and Machine Learning, it enhances urban mobility through intelligent traffic monitoring and prediction.",
      tech: ["Python", "FastAPI", "OpenCV", "YOLO", "Redis"],
      githubUrl: "https://github.com/Padmanaban29072004/phontom-updated",
    },
    {
      title: "LunaLens",
      badge: "AI & Computer Vision",
      desc: "LunaLens is an AI-powered lunar surface analysis system designed to identify and analyze moon landslides, craters, boulders, and geological features using computer vision and machine learning. It processes satellite and lunar imagery to support space research, terrain mapping, and intelligent planetary surface analysis.",
      tech: ["python", "YOLOV8", "VIT", "Django", "opencv", "TensorFlow", "Grad-cam"],
      githubUrl: "https://github.com/bhuwanb23/lunalens",
    },
    {
      title: "HerbChain",
      badge: "AYUSH & Supply Chain Traceability",
      desc: "End-to-end traceability for AYUSH herbs: every step from farmer to consumer is a signed QR scan that atomically transfers ownership of a batch. Local-first, SQLite-backed, no blockchain.",
      tech: ["Flask 3", "SQLAlchemy", "Flask-Migrate", "React Native", "REST API"],
      githubUrl: "https://github.com/bhuwanb23/HerbChain#herbchain",
    },
    {
      title: "Learnix",
      badge: "EdTech & ERP Solutions",
      desc: "Learnix is an ERP-based mobile application designed for universities, colleges, and schools to streamline academic and administrative operations. The platform manages student records, attendance, courses, communication, and institutional workflows through a centralized and user-friendly system.  ",
      tech: ["Reach-native", "Django", "Tailwind CSS", "SQLite", "RestAPI", "PostgreSQL"],
      githubUrl: "https://github.com/bhuwanb23/Learnix",
    },
    {
      title: "AI-Powered Phishing Detection Tool",
      badge: "AI & Cybersecurity",
      desc: "A sophisticated web-based tool for detecting potential phishing websites using various analysis techniques and machine learning approaches.",
      tech: ["Python", "FastAPI", "React", "OpenCV", "Scikit-learn", "NLTK"],
      githubUrl: "https://github.com/Padmanaban29072004/phishing-tool-ai-powered",
    },
    {
      title: "Graphi-fusion",
      badge: "AI & 3D Design Learning Plateform",
      desc: "Graphi-Fusion is an interactive 2D and 3D learning application designed to enhance visual understanding through immersive graphics and interactive educational content. The platform helps learners explore concepts using dynamic 2D illustrations and 3D visualizations for an engaging and effective learning experience.",
      tech: ["react", "shadcn-ui", "node.js", "Tailwind CSS"],
      githubUrl: "https://github.com/Padmanaban29072004/Graphi-fusion-interactive-learning-app",
    },
    {
      title: "Stu.edu",
      badge: "Student Management System",
      desc: "Stu.edu is a student management system developed using Angular CLI to simplify academic and administrative operations for educational institutions. The platform enables efficient management of student records, attendance, courses, performance tracking, and communication through a modern and user-friendly interface.",
      tech: ["Angular", "GitHub API", "Python", "GPT-4o", "Docker"],
      githubUrl: "https://github.com/Padmanaban29072004/crud-operations",
    },
  ],
  gallery: [
    { image: "/isro1.jpeg" },
    { image: "/isro2.jpeg" },
    { image: "/sih2025.jpeg" },
    { image: "/cong.jpg" },
    { image: "/prands.jpeg" },
    { image: "/codequest.jpeg" },

  ],
};
