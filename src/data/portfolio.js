export const portfolioData = {
  name: "Alex Sterling",
  role: "Senior Java Developer",
  about: "Passionate about building scalable, high-performance backend systems. Expert in Java ecosystem, cloud-native architectures, and distributed systems.",
  experience: [
    {
      id: 1,
      company: "TechGiant Corp",
      role: "Senior Backend Engineer",
      period: "2021 - Present",
      description: "Leading the payments infrastructure team. Migrated legacy monolith to microservices using Spring Boot and Kubernetes. Improved system throughput by 300%."
    },
    {
      id: 2,
      company: "Innovate FinTech",
      role: "Java Developer",
      period: "2018 - 2021",
      description: "Developed high-frequency trading platform components. Optimized garbage collection tuning for low-latency requirements."
    },
    {
      id: 3,
      company: "StartUp Inc",
      role: "Junior Developer",
      period: "2016 - 2018",
      description: "Full-stack development using Java EE and Angular. Built internal tools for data visualization."
    }
  ],
  skills: [
    { category: "Languages", items: ["Java 17+", "Kotlin", "SQL", "Python"] },
    { category: "Frameworks", items: ["Spring Boot", "Quarkus", "Hibernate", "Vert.x"] },
    { category: "Infrastructure", items: ["Kubernetes", "Docker", "AWS", "Kafka"] },
    { category: "Tools", items: ["Maven", "Gradle", "Jenkins", "Git"] }
  ],
  projects: [
    {
      id: 1,
      title: "Distributed Cache System",
      description: "A high-performance distributed caching solution built from scratch using Java NIO and Netty.",
      tech: ["Java", "Netty", "Redis"],
      link: "#"
    },
    {
      id: 2,
      title: "Microservices Orchestrator",
      description: "Custom orchestration engine for managing complex saga patterns across microservices.",
      tech: ["Spring Cloud", "Kafka", "PostgreSQL"],
      link: "#"
    },
    {
      id: 3,
      title: "Real-time Analytics Dashboard",
      description: "Backend for processing millions of events per second and serving real-time analytics.",
      tech: ["Apache Flink", "Elasticsearch", "Java"],
      link: "#"
    }
  ],
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  }
};
