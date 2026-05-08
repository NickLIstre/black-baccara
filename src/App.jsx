import { projects } from './data/projects'
import ProjectCard from './components/ProjectCard'

function App() {
  return (
    <div className="min-h-screen bg-black p-10">
      <h1 className="text-white text-4xl text-center mb-10">
        Black Baccara Productions
      </h1>
      <div className="flex flex-col items-center gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default App