import React, { useState } from 'react'
import Card from './Card'
import { FaLaptopCode } from "react-icons/fa";

const Projects = () => {

  const [projects, setProjects] = useState([]);

  return (
    <div className='flex flex-col sm:flex-row gap-6 items-center justify-around border w-[100%] h-fit p-3 border-gray-200 rounded-lg dark:text-white'>
        <Card svg={<FaLaptopCode className='w-20 h-20'/>} description='Description'/>
        <Card/>
        <Card/>
    </div>
  )
}

export default Projects