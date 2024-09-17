import React from 'react'
import { useProfileContext } from '../context/ProfileContext';

const Intro = () => {

    const { profileState } = useProfileContext(); 

    return (
        <section className='flex flex-col gap-7 items-center mx-auto h-fit p-3 mt-6 justify-center border border-gray-200 rounded-lg dark:text-white'>
            <h1 className='font-pacifico text-3xl font-medium text-center'>{profileState.name}</h1>
            <p className='text-center'>
                Hi Everyone, I am a senior software developer having about 5 years experience in <span className='font-medium'>Full Stack development</span>.
            </p>
            <button className='w-32 rounded-lg h-fit border border-gray-300 font-medium hover:bg-gray-300'> Get in touch </button>
        </section>
    )
}

export default Intro;