import React from 'react'
import ProjectsHero from './ProjectsHero'
import ProjectShowcase from './ProjectShowcase'
import ScrollToTopProjects from './ScrollToTopProjects'

const ProjectsPage = () => {
  return (
    <div>
        <ProjectsHero />
        <ProjectShowcase />
        <ScrollToTopProjects />
    </div>
  )
}

export default ProjectsPage