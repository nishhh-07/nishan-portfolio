export const personalInfo = {
  name: "Nishan M C",
  role: "Software Engineer",
  specialization: "Full-Stack Development · Applied Machine Learning",
  location: "Mangalore, Karnataka, India",
  email: "nishanmc313@gmail.com",
  phone: "+91 7204807832",
  profileImage: "/profile.jpg",
  resumePath: "/resume.pdf",
  
  social: {
    github: "https://github.com/nishhh-07",
    linkedin: "https://www.linkedin.com/in/nishan-mc-a24041283",
  },
  
  hero: {
    introduction: "Computer Science and Engineering graduate with hands-on experience building and deploying full-stack web applications using the MERN stack and applying machine learning to network security problems."
  },
  
  about: {
    description: "I'm a Computer Science and Engineering graduate with hands-on experience in full-stack web development using the MERN stack. I've built and deployed complete applications covering authentication, REST API design, and database modelling with MongoDB and MySQL. I've also applied machine learning techniques including KNN, RNN, and LSTM to network security problems. I'm passionate about writing clean, maintainable code and am eager to contribute to production software systems that solve real-world problems.",
    degree: "B.E. Computer Science & Engineering",
    cgpa: "7.8 / 10",
    duration: "2022 – 2026"
  }
};

export const skills = {
  "Programming Languages": [
    { name: "Python", icon: "code" },
    { name: "JavaScript (ES6+)", icon: "code" },
    { name: "Java", icon: "code" },
    { name: "C", icon: "code" },
    { name: "SQL", icon: "database" }
  ],
  "Frontend": [
    { name: "React.js", icon: "layout" },
    { name: "HTML5", icon: "code" },
    { name: "CSS3", icon: "palette" },
    { name: "Responsive UI Design", icon: "smartphone" }
  ],
  "Backend": [
    { name: "Node.js", icon: "server" },
    { name: "Express.js", icon: "server" },
    { name: "REST API Design", icon: "cloud" },
    { name: "JWT Authentication", icon: "lock" }
  ],
  "Databases": [
    { name: "MongoDB", icon: "database" },
    { name: "MySQL", icon: "database" },
    { name: "Schema Design", icon: "layers" },
    { name: "Indexing", icon: "zap" }
  ],
  "Machine Learning": [
    { name: "KNN", icon: "cpu" },
    { name: "RNN", icon: "cpu" },
    { name: "LSTM", icon: "cpu" },
    { name: "Feature Engineering", icon: "settings" },
    { name: "Model Evaluation", icon: "bar-chart" }
  ],
  "Tools & DevOps": [
    { name: "Git", icon: "git-branch" },
    { name: "GitHub", icon: "github" },
    { name: "VS Code", icon: "code" },
    { name: "Postman", icon: "send" },
    { name: "Vercel", icon: "cloud" },
    { name: "Render", icon: "server" },
    { name: "Linux", icon: "terminal" }
  ],
  "Fundamentals": [
    { name: "Data Structures & Algorithms", icon: "git-merge" },
    { name: "OOP", icon: "box" },
    { name: "DBMS", icon: "database" },
    { name: "Operating Systems", icon: "cpu" },
    { name: "Networking", icon: "network" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Recruit AI — Full-Stack Recruitment Platform",
    description: "An end-to-end recruitment platform covering job posting, resume management and candidate tracking in a single workflow.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Authentication",
      "Session handling",
      "Hashed credentials",
      "Protected recruiter routes",
      "REST API",
      "MongoDB",
      "Job management",
      "Candidate management",
      "Application tracking",
      "Responsive React interface",
      "Cloud deployment"
    ],
    liveDemo: "https://recruit-ai-liart.vercel.app",
    github: "",
    image: "/projects/recruit-ai.png",
    featured: true
  },
  {
    id: 2,
    title: "Network Anomaly Detection using Machine Learning",
    description: "A machine learning framework that classifies network traffic in real time to identify behaviour indicative of intrusion.",
    technologies: ["Python", "KNN", "RNN", "LSTM"],
    features: [
      "Network traffic classification",
      "Intrusion detection",
      "KNN",
      "RNN",
      "LSTM",
      "Precision evaluation",
      "Recall evaluation",
      "F1-score evaluation",
      "Feature normalization",
      "Encoding",
      "Class imbalance treatment"
    ],
    liveDemo: "",
    github: "",
    image: "/projects/network-anomaly.png",
    featured: false
  }
];

export const experience = [
  {
    id: 1,
    title: "Full Stack Web Development Intern — MERN",
    company: "SuprMentr Technologies",
    association: "in association with NASSCOM FutureSkills",
    duration: "Feb 2026 – May 2026",
    description: "Built full-stack applications with React.js, Node.js, Express.js and MongoDB across a four-month industry-aligned programme delivered under mentor review.",
    highlights: [
      "REST API development",
      "Request validation",
      "Authentication middleware",
      "React front-end integration",
      "Cloud deployment",
      "Git branch-and-review workflow"
    ]
  },
  {
    id: 2,
    title: "Python Full Stack Developer Intern — Virtual",
    company: "AICTE Virtual Internship Programme",
    duration: "10 Weeks",
    description: "Built Python web application modules covering routing, form handling and CRUD operations against a relational database, with structured error handling across assessed milestones.",
    highlights: []
  }
];

export const education = [
  {
    id: 1,
    degree: "B.E., Computer Science and Engineering",
    institution: "Srinivas Institute of Technology, Mangalore",
    duration: "2022 – 2026",
    grade: "CGPA: 7.8 / 10"
  },
  {
    id: 2,
    degree: "Pre-University",
    institution: "St Aloysius PU College, Mangalore",
    duration: "2020 – 2022",
    grade: "63%"
  },
  {
    id: 3,
    degree: "SSLC",
    institution: "Bhagavathi English Medium School, Mangalore",
    duration: "2019 – 2020",
    grade: "83%"
  }
];

export const certifications = [
  {
    id: 1,
    title: "IT Specialist – Cloud Computing",
    issuer: "Certiport"
  },
  {
    id: 2,
    title: "NoSQL – MongoDB",
    issuer: "IBM Career Education"
  },
  {
    id: 3,
    title: "Database Using SQL",
    issuer: "Ethnotech Academy"
  },
  {
    id: 4,
    title: "Advanced Java Programming",
    issuer: "Ethnotech Academy"
  }
];
