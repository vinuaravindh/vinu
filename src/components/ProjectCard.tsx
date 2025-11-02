type ProjectCardProps = {
  date: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
};

const ProjectCard = ({ date, title, description, tags, url }: ProjectCardProps) => {
  return (
    <a 
      href={url}
      target="_blank" 
      rel="noopener noreferrer"
      className="block group mb-12"
      aria-label={`View project ${title} (opens in a new tab)`}
    >
    <div className="mb-12 group">
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
      <p className="mt-3 text-[17px] text-[#97a7bb] leading-relaxed">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="text-sky-300 bg-sky-900/60 px-3 py-1 rounded-full text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>
    </div>
    </a>
  );
};

export default ProjectCard;