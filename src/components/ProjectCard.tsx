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
      <h4 className="text-xl font-bold text-white mt-2 group-hover:text-sky-400 transition-colors duration-300">
        {title}
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