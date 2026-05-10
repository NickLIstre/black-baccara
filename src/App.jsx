import { useRef, useEffect, useState } from 'react'
import { projects } from './data/projects'
import Hero from './components/Hero'
import Vine from './components/Vine'
import VineBranch from './components/VineBranch'

function App() {
  const containerRef = useRef(null)
  const [containerHeight, setContainerHeight] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.scrollHeight)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <div
        ref={containerRef}
        className="relative flex flex-col gap-32 pb-20 pl-8"
      >
        <Vine totalHeight={containerHeight} />
        {projects.map((project) => (
          <VineBranch key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default App