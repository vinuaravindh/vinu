import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#131F32] text-gray-300 font-sans">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-16 p-8 md:p-12 lg:p-20">
        <header className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between py-12 lg:py-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Vinu Aravindh</h1>
            <h2 className="mt-4 text-xl md:text-2xl font-medium text-gray-200">Software Developer</h2>
            <p className="mt-4 text-lg text-gray-400">I write code that works</p>
            
            <nav className="hidden lg:block mt-12">
              <ul className="space-y-4">
                <li><a href="#about" className="group flex items-center gap-4 text-lg font-bold tracking-widest text-gray-500 hover:text-white transition-all duration-300">
                  <span className="h-px w-8 bg-gray-500 group-hover:w-16 group-hover:bg-white transition-all duration-300"></span>
                  ABOUT
                </a></li>
                <li><a href="#projects" className="group flex items-center gap-4 text-lg font-bold tracking-widest text-gray-500 hover:text-white transition-all duration-300">
                  <span className="h-px w-8 bg-gray-500 group-hover:w-16 group-hover:bg-white transition-all duration-300"></span>
                  PROJECTS
                </a></li>
                <li><a href="#contact" className="group flex items-center gap-4 text-lg font-bold tracking-widest text-gray-500 hover:text-white transition-all duration-300">
                  <span className="h-px w-8 bg-gray-500 group-hover:w-16 group-hover:bg-white transition-all duration-300"></span>
                  CONTACT
                </a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="py-12 lg:py-20">
          <section id="about" className="mb-16 md:mb-24">
            <p className="text-lg leading-relaxed">
              Last year, I led a team that built a social networking platform integrating real-time data exchange, APIs, and responsive web interfaces. The challenge of coordinating multiple moving parts across backend, frontend, and deployment is what excites me about full-stack web development, especially to help shape AI-powered industrial platforms that demand the same kind of cross-disciplinary integration.
            </p>
            <p className="mt-6 text-lg leading-relaxed">
              From developing secure authentication systems with Spring Boot, MongoDB Atlas, and Firebase Auth to creating Android applications with Maps API and real-time tracking, I've consistently delivered solutions that balance performance, usability, and scalability.
            </p>
            <p className="mt-6 text-lg leading-relaxed">
              My projects required working across diverse stacks such as Django ORM, React.js, Docker, and AWS, experiences I believe will translate well to collaborating with your Electronics and Electrical teams on IoT integration, smart grid software, and AI model deployment.
            </p>
          </section>

          <section id="projects">
            <h3 className="text-lg font-bold uppercase text-white tracking-widest mb-8">PROJECTS</h3>

            {/* Project 1 */}
            <div className="mb-12 group">
              <p className="text-sm text-gray-500 font-semibold tracking-wider">2024 SEPT - DEC</p>
              <h4 className="text-xl font-bold text-white mt-2 group-hover:text-sky-400 transition-colors duration-300">Full stack Developer • Distributed Social Network</h4>
              <p className="mt-3 text-lg text-gray-400 leading-relaxed">
                I developed a full-stack decentralized social network using Django, handling the back end API, front-end interface, and deployment. The project's core challenge was enabling distributed communication for features like posting and following across multiple nodes.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sky-300 bg-sky-900/60 px-3 py-1 rounded-full text-sm font-medium">Django</span>
                <span className="text-sky-300 bg-sky-900/60 px-3 py-1 rounded-full text-sm font-medium">RestfulAPIs</span>
                <span className="text-sky-300 bg-sky-900/60 px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</span>
                <span className="text-sky-300 bg-sky-900/60 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
                <span className="text-sky-300 bg-sky-900/60 px-3 py-1 rounded-full text-sm font-medium">JSON</span>
                <span className="text-sky-300 bg-sky-900/60 px-3 py-1 rounded-full text-sm font-medium">Heroku</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="mb-12 group">
              <p className="text-sm text-gray-500 font-semibold tracking-wider">2023 JAN - APRIL</p>
              <h4 className="text-xl font-bold text-white mt-2 group-hover:text-sky-400 transition-colors duration-300">Android App Developer / Scrum Master • QR Game</h4>
              <p className="mt-3 text-lg text-gray-400 leading-relaxed">
                I led a team of six in building a QR code hunting game, similar to Pokémon Go, using Java and Firebase. As the project manager and lead developer, I implemented core features like geolocation, tracking with Google Maps and a real-time leaderboard.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sky-300 bg-sky-900/60 px-3 py-1 rounded-full text-sm font-medium">Android Studio</span>
                <span className="text-sky-300 bg-sky-900/60 px-3 py-1 rounded-full text-sm font-medium">Java</span>
                <span className="text-sky-300 bg-sky-900/60 px-3 py-1 rounded-full text-sm font-medium">JUnit</span>
                <span className="text-sky-300 bg-sky-900/60 px-3 py-1 rounded-full text-sm font-medium">Git</span>
                <span className="text-sky-300 bg-sky-900/60 px-3 py-1 rounded-full text-sm font-document">Firebase</span>
                <span className="text-sky-300 bg-sky-900/60 px-3 py-1 rounded-full text-sm font-medium">Google Maps API</span>
              </div>
            </div>

            {/* Add more projects here as needed */}

          </section>
        </main>
      </div>
    </div>
  );
}
