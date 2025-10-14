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
    <div className="min-h-screen bg-[#0f172a] text-gray-300 font-sans">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-8 md:px-12 lg:px-40">
        <header className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between py-12 lg:py-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Vinu Aravindh</h1>
            <h2 className="mt-4 text-xl md:text-2xl font-medium text-gray-200">Software Developer</h2>
            <p className="mt-4 text-lg text-gray-400">I write code that works</p>
            
            <nav className="hidden lg:block mt-12">
              <ul className="space-y-4">
                <li><a href="#about" className="group flex items-center gap-4 text-sm font-bold tracking-widest text-gray-500 hover:text-white transition-all duration-300">
                  <span className="h-px w-8 bg-gray-500 group-hover:w-16 group-hover:bg-white transition-all duration-300"></span>
                  ABOUT
                </a></li>
                <li><a href="#projects" className="group flex items-center gap-4 text-sm font-bold tracking-widest text-gray-500 hover:text-white transition-all duration-300">
                  <span className="h-px w-8 bg-gray-500 group-hover:w-16 group-hover:bg-white transition-all duration-300"></span>
                  PROJECTS
                </a></li>
                <li><a href="#contact" className="group flex items-center gap-4 text-sm font-bold tracking-widest text-gray-500 hover:text-white transition-all duration-300">
                  <span className="h-px w-8 bg-gray-500 group-hover:w-16 group-hover:bg-white transition-all duration-300"></span>
                  CONTACT
                </a></li>
              </ul>
            </nav>
         </div>

         <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
          <li className="mr-5 text-xs shrink-0">
            <a 
              href="https://github.com/vinuaravindh" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub (opens in a new tab)"
              title="GitHub"
              className="block text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 transition-colors">
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs shrink-0">
            <a 
              href="https://linkedin.com/in/vinuaravindh" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
              title="LinkedIn"
              className="block text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 transition-colors">
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs shrink-0">
            <a 
              href="https://www.instagram.com/vinuarvndh" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram (opens in a new tab)"
              title="Instagram"
              className="block text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 transition-colors">
                <title>Instagram</title>
                	<path d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z"/>
                  <path d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>  
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs shrink-0">
            <a 
              href="https://open.spotify.com/user/jcu6vw3i9munlw1at9bvm6jtl?si=82dc806fad094c59" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Spotify (opens in a new tab)"
              title="Spotify"
              className="block text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 transition-colors">
                <title>Spotify</title>
                <path xmlns="http://www.w3.org/2000/svg" d="M12,0C5.373,0,0,5.373,0,12c0,6.628,5.373,12,12,12c6.628,0,12-5.372,12-12C24,5.373,18.628,0,12,0z M17.503,17.308     c-0.216,0.354-0.676,0.464-1.028,0.249c-2.818-1.722-6.365-2.111-10.542-1.157c-0.403,0.092-0.804-0.16-0.896-0.562     c-0.092-0.402,0.159-0.804,0.563-0.895c4.571-1.045,8.492-0.595,11.655,1.338C17.608,16.495,17.719,16.956,17.503,17.308z      M18.972,14.041c-0.271,0.44-0.847,0.578-1.287,0.308c-3.225-1.982-8.142-2.557-11.958-1.398C5.233,13.1,4.71,12.821,4.56,12.327     c-0.149-0.495,0.13-1.016,0.624-1.167c4.358-1.323,9.776-0.682,13.48,1.594C19.104,13.025,19.242,13.601,18.972,14.041z      M19.098,10.638C15.23,8.341,8.85,8.13,5.157,9.251c-0.593,0.18-1.22-0.155-1.4-0.748c-0.18-0.593,0.155-1.22,0.748-1.4     c4.239-1.287,11.285-1.038,15.738,1.605c0.533,0.317,0.708,1.005,0.392,1.538C20.32,10.779,19.63,10.955,19.098,10.638z"/>
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs shrink-0">
            <a 
              href="https://letterboxd.com/vinuaravindh/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Letterboxd (opens in a new tab)"
              title="Letterboxd"
              className="block text-gray-400 hover:text-white"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M8.224 14.352a4.447 4.447 0 0 1-3.775 2.092C1.992 16.444 0 14.454 0 12s1.992-4.444 4.45-4.444c1.592 0 2.988.836 3.774 2.092c-.427.682-.673 1.488-.673 2.352s.246 1.67.673 2.352zM15.101 12c0-.864.247-1.67.674-2.352c-.786-1.256-2.183-2.092-3.775-2.092s-2.989.836-3.775 2.092c.427.682.674 1.488.674 2.352s-.247 1.67-.674 2.352c.786 1.256 2.183 2.092 3.775 2.092s2.989-.836 3.775-2.092A4.42 4.42 0 0 1 15.1 12zm4.45-4.444a4.447 4.447 0 0 0-3.775 2.092c.427.682.673 1.488.673 2.352s-.246 1.67-.673 2.352a4.447 4.447 0 0 0 3.775 2.092C22.008 16.444 24 14.454 24 12s-1.992-4.444-4.45-4.444z"/>
              <title>Letterboxd</title>
            </svg>
            </a>
          </li>
        </ul>
        </header>
        <main className="py-12 lg:py-20">
          <section id="about" className="mb-16 md:mb-24">
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
      </div>
    </div>
  );
}
