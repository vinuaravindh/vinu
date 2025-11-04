"use client";

type ProjectCardProps = {
  date: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
  demo?: string;
};

const ProjectCard = ({ date, title, description, tags, url }: ProjectCardProps) => {
  return (
    <div className="block group mb-12">
    <a 
      href={url}
      target="_blank"
      className="mb-12 group"
      rel="noopener noreferrer"
      aria-label={`View project ${title} (opens in a new tab)`}
    >
      <p className="text-sm text-gray-500 font-semibold tracking-wider">{date}</p>
      <h4 className="inline-flex items-baseline text-xl font-bold text-white mt-2 group-hover:text-sky-400 transition-colors duration-300">
          <span>{title}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="h-5 w-5 ml-1.5 shrink-0 translate-y-1"
            aria-hidden="true"
          >
            <path d="M12 6H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5m-6 0l7.5-7.5M15 3h6v6"/>
          </svg>
        </h4>
        </a> 
      <p className="mt-3 text-[17px] text-[#97a7bb] leading-relaxed">
        {description}
      </p>
      {/* <p className="inline-flex items-baseline text-[15px] text-white mt-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 40 40"
          fill="currentColor" 
          stroke="none" 
          className="h-5 w-5 ml-1.5 shrink-0 translate-y-1.5"
          aria-hidden="true"
        >
          <path d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M10,24V8l16.008,8L10,24z" />
        </svg> Watch Demo
      </p> */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="text-sky-300 bg-sky-900/60 px-3 py-1 rounded-full text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;