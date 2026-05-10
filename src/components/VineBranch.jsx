import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

function VineBranch({ project }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [branchDone, setBranchDone] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // entries is an array of observed elements
        // we only have one so we check entries[0]
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      // 30% of the element must be visible to trigger
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex items-center" style={{ marginLeft: '20px' }}>

      {/* The horizontal branch line */}
      <motion.div
        className="h-0.5 bg-green-900 origin-left"
        style={{ width: project.branchLength }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onAnimationComplete={() => {
          // Only fire when animating to visible, not when hiding
          if (isVisible) setBranchDone(true)
        }}
      />

      {/* The project card — only animates after branch is done */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{
          opacity: branchDone ? 1 : 0,
          x: branchDone ? 0 : -10
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <ProjectCard project={project} />
      </motion.div>

    </div>
  )
}

export default VineBranch