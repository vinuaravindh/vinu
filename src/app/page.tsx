import ProjectCard from "@/components/ProjectCard";
import { url } from "inspector";

const projectsData = [
  {
    date: "2024 SEPT - DEC",
    title: "Full stack Developer • Distributed Social Network",
    description: "I developed a full-stack decentralized social network using Django, handling the back end API, front-end interface, and deployment. The project's core challenge was enabling distributed communication for features like posting and following across multiple nodes.",
    tags: ["Django", "RestfulAPIs", "PostgreSQL", "JavaScript", "JSON", "Heroku"],
    url: "https://github.com/vinuaravindh/social-distribution",
  },  
  {
    date: "2023 JAN - APRIL",
    title: "Android App Developer / Scrum Master • QR Game",
    description: "I led a team of six in building a QR code hunting game, similar to Pokémon Go, using Java and Firebase. As the project manager and lead developer, I implemented core features like geolocation, tracking with Google Maps and a real-time leaderboard.",
    tags: ["Android Studio", "Java", "JUnit", "Git", "Firebase", "Google Maps API"],
    url: "https://github.com/CMPUT301W23T56/notConstraintLayout",
  },
  {
    date: "2024 SEPT - 2025 JAN",
    title: "Web Developer / Digital Outreach • PawsomeStaycation",
    description: "Launched a portfolio site, driving at least 50% increase in customer inquiries through a combination of website promotion and digital marketing efforts, such as branding and social media profile renewal.",
    tags: ["HTML", "CSS", "JavaScript", "Figma", "Canva"],
    url: "https://www.pawsomestaycation.site/",
  },
  {
    date: "2024 JUNE - 2025 JAN",
    title: "Digital Marketing & Branding • Positive Supports for Parents",
    description:"Increased Instagram followers by 300% in 3 months through high-performing media campaigns. Designed branding materials and launched a professional website using Squarespace.",
    tags: ["Squarespace", "WordPress", "Canva", "DaVinci Resolve", "Riverside"],
    url: "https://www.positivesupportsforparents.com/",
  },
];

export default function Home() {
  return (
        <main className="py-12 lg:py-20">
          <section id="about" className="mb-16 md:mb-24 text-[#97a7bb]">
            <p className="text-[17px] leading-relaxed">
              I'm a developer who likes bringing ideas to life through clean, functional interfaces. I really enjoy the process of shaping a product from the ground up, from brainstorming to the moment it starts working as intended. The balance of design and engineering keeps me engaged, especially when collaborating with others who share the same focus and curiosity.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed">
              I just graduated from the University of Alberta with my B.Sc. in Computing Science. For me, the best part was taking what we learned in class and using it in hands-on team projects. That's what really helped me build up my technical skills and learn how to work with others on tricky projects. It was the perfect mix of theory and practice to get me ready for my career.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed">
              When I'm not coding, I'm usually enjoying art in some form, especially music, movies, and novels. Lately, I've been listening to a lot of Indie Rock and reading books by Blake Crouch. To stay active, I'm either at the gym, hiking, running, or playing paddle tennis. My favourite hobby, though, is cooking, especially when I get to share the food with others!
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
                    url={project.url}
                />
              ))}
            </div>
          </section>
          <section id="contact" className="mb-16 md:mb-24">
            <h3 className="text-lg font-bold uppercase text-white tracking-widest mb-3">
              CONTACT
            </h3>
            <p className="mt-2 text-[17px] text-gray-400 leading-relaxed">
              I'm currently open to new opportunities and collaborations.
              Whether you have a question or just want to say hi, my inbox is
              always open, and I'll get back to you as soon as I can!
            </p>
            <a 
              href="mailto:vinuaravindh@gmail.com"
              className="inline-block mt-5 text-sky-300 bg-sky-900/60 px-4 py-2 rounded-full text-md font-medium hover:bg-sky-800/60 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </section>
        </main>
  );
}
