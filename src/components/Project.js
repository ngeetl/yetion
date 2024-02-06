import { projects } from '@/app/project/[id]/projects'
import Link from 'next/link'
import React from 'react'

const Project = () => {
 
  return (
    <div id='project' className='container pb-20'>
      <div className='border-solid border-t border-gray-200 h-16'></div>
      
      {/* Header */}
      <div className='text-xl font-bold text-gray-800 mb-8'>
      🖥️ Project 프로젝트
      </div>

      {/* Projects */}
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>

          {projects.map((project, idx) => {
            return (
              <div key={idx} className='hover:border-yellow-200 transition-all duration-1000 border-solid border border-gray-100 rounded-lg shadow-xl p-4 pb-3'>
                <Link href={project.path}>
                  <div className='w-full h-48 overflow-hidden'>
                    <img src={project.url} className='w-full h-full object-cover'/>
                  </div>

                  <ul className='my-3'>
                    <li className='text-lg font-bold mb-2'>{project.name} <span className='text-base font-normal text-gray-400'>{project.created}</span></li>
                    <li className='mb-3 mx-2 text-[15px] leading-6'>{project.content}</li>
                    <li className=''>
                      <ul className='flex flex-wrap'>
                        {project.stacks.map(stack => {
                          return (
                            <li key={stack} className='mr-2 mb-2 bg-slate-100 rounded-md py-1 px-2 w-fit text-slate-700 text-[13px] font-semibold'>{stack}</li>
                          )
                        })}
                      </ul>
                    </li>
                  </ul>
              </Link>
              </div>
            )
          })}



      </div>
    </div>
  )
}

export default Project
