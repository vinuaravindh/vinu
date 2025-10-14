import ProjectCard from "@/components/ProjectCard";

const projectsData = [
  {
    date: "2024 SEPT - DEC",
    title: "Full stack Developer • Distributed Social Network",
    description: "I developed a full-stack decentralized social network using Django, handling the back end API, front-end interface, and deployment. The project's core challenge was enabling distributed communication for features like posting and following across multiple nodes.",
    tags: ["Django", "RestfulAPIs", "PostgreSQL", "JavaScript", "JSON", "Heroku"],
  },
  {
    date: "2023 JAN - APRIL",
    title: "Android App Developer / Scrum Master • QR Game",
    description: "I led a team of six in building a QR code hunting game, similar to Pokémon Go, using Java and Firebase. As the project manager and lead developer, I implemented core features like geolocation, tracking with Google Maps and a real-time leaderboard.",
    tags: ["Android Studio", "Java", "JUnit", "Git", "Firebase", "Google Maps API"],
  },
];

export default function Home() {
  return (
        <main id="about" className="py-12 lg:py-20">
          <section className="mb-16 md:mb-24">
            <p className="text-[17px] leading-relaxed">
              Last year, I led a team that built a social networking platform integrating real-time data exchange, APIs, and responsive web interfaces. The challenge of coordinating multiple moving parts across backend, frontend, and deployment is what excites me about full-stack web development, especially to help shape AI-powered industrial platforms that demand the same kind of cross-disciplinary integration.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed">
              From developing secure authentication systems with Spring Boot, MongoDB Atlas, and Firebase Auth to creating Android applications with Maps API and real-time tracking, I've consistently delivered solutions that balance performance, usability, and scalability.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed">
              My projects required working across diverse stacks such as Django ORM, React.js, Docker, and AWS, experiences I believe will translate well to collaborating with your Electronics and Electrical teams on IoT integration, smart grid software, and AI model deployment.
            </p>
          </section>

          <section id="projects">
            <h3 className="text-lg font-bold uppercase text-white tracking-widest mb-8">PROJECTS</h3>

            <div>
              {projectsData.map((project, index) => (
                <ProjectCard
                    key={index}
                    date={project.date}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                />
              ))}
            </div>
          </section>
        </main>
  );
}
