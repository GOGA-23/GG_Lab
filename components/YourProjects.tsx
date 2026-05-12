import React from 'react'
import { ProjectCard } from './custom-ui/ProjectCard'
import { YourProjectsList } from '@/lib/data'

const YourProjects = () => {
    return (
        <div className='max-w-6xl mx-auto p-10 space-y-12'>
            <h3 className='text-xl md:text-3xl text-center font-mono font-bold tracking-wider'>Your Projects</h3>
            <div className='flex flex-col md:flex-row md:flex-wrap justify-center md:justify-start items-center gap-10 font-'>
                {YourProjectsList.map((project) => (
                    <ProjectCard
                        key={project.id}
                        src={project.icon}
                        alt={project.alt}
                        title={project.title}
                        Date={project.Date}
                    />
                ))}
            </div>
        </div>
    )
}

export default YourProjects