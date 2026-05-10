import { useRef, useEffect, useState } from 'react'
import { projects } from './data/projects'
import Hero from './components/Hero'
import Vine from './components/Vine'
import VineBranch from './components/VineBranch'

function App() {
  const pageRef = useRef(null)
  const [pageHeight, setPageHeight] = useState(0)

  useEffect(() => {
    if (pageRef.current) {
      setPageHeight(pageRef.current.scrollHeight)
    }
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-black relative">
      <Vine totalHeight={pageHeight} />
      <Hero />
      <div className="flex flex-col gap-32 pb-20 pl-8">
        {projects.map((project) => (
          <VineBranch key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default App