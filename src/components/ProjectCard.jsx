function ProjectCard({ project }) {
  const statusColors = {
    live: "text-green-400 border-green-400",
    private: "text-purple-400 border-purple-400",
    archived: "text-gray-400 border-gray-400",
    "in-development": "text-amber-400 border-amber-400"
  }

  const statusLabels = {
    live: "Live",
    private: "Private",
    archived: "Archived",
    "in-development": "In Development"
  }

  return (
    <div className="border border-red-900 rounded-lg p-6 max-w-md bg-black">
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-red-500 text-xl font-bold">{project.name}</h2>
        <span className={`text-xs border rounded px-2 py-1 ${statusColors[project.status]}`}>
          {statusLabels[project.status]}
        </span>
      </div>
      <p className="text-gray-400 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span key={tech} className="text-xs bg-red-950 text-red-300 rounded px-2 py-1">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600 text-xs">{project.year}</span>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-red-400 hover:text-red-300 underline"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard