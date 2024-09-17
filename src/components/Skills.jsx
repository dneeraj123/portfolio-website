import React, { useState } from 'react'

const Skills = () => {

  const [skills, setSkills] = useState(['React', 'Angular', 'NodeJS', 'Spring boot', 'Electron', 'MySQL', 'NoSQL', 'HTML', 'CSS', 'Tailwind', 'Python', 'CircleCI', 'AWS' ])

  return (
    <div className='flex flex-col gap-3 justify-center items-center'>
        <div className='flex font-display font-semibold text-2xl'> Skills </div>
        <div className='flex flex-wrap justify-center gap-10 w-[100%] h-fit p-4 bg-gray-50 font-akaya font-semibold'>
            {
                skills.map((skill, index) => {
                    return <span key={index} className='border border-gray-200 hover:bg-slate-200 rounded-lg px-2 py-1 min-w-[50px] text-center text-xl'>{skill}</span>
                })
            }
        </div>
    </div>
  )
}

export default Skills