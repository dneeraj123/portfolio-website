import React, { useState } from 'react';
import { FaBars, FaGithub, FaWindowClose } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            {/* expanded */}
            <nav className='flex justify-between items-center p-4 dark:bg-gray-800 dark:text-white'>
                <a href="" className='flex items-center gap-3'>
                    <img src="src/assets/logo.jpg" className='w-10 h-10 rounded-full' alt="" />
                    <span className='font-display text-lg font-medium'>ND</span>
                </a>
                <section className='hidden gap-12 md:flex'>
                    <a className='hover:text-primary' href="">About</a>
                    <a className='hover:text-primary' href="">Projects</a>
                    <a className='hover:text-primary' href="">Education</a>
                    <a className='hover:text-primary' href="">Experience</a>
                </section>
                <button className='hidden md:flex items-center gap-2 border rounded-2xl p-2 hover:border-gray-500' onClick={handleMenuClick}>
                    <span className='font-medium font-display'>Github</span>
                    <FaGithub />
                </button>
            </nav>

            {/* compressed */}
            <nav className='fixed md:hidden inset-x-0 top-0 bg-white p-4 dark:bg-gray-800 dark:text-white'>
                <div className='flex items-center justify-between'>
                    <a href="" className='flex items-center gap-3'>
                        <img src="src/assets/logo.jpg" className='w-10 h-10 rounded-full' alt="" />
                        <span className='font-display text-lg font-medium'>ND</span>
                    </a>
                    {
                        menuOpen ?
                            <button className='md:hidden' onClick={handleMenuClick}>
                                <IoMdClose />
                            </button> :
                            <button className='md:hidden rounded-full' onClick={handleMenuClick}>
                                <FaBars />
                            </button>
                    }
                </div>
                {
                    menuOpen &&
                    <div className='flex mt-4 flex-col gap-3'>
                        <a className='hover:bg-gray-100 block rounded-lg px-2 py-3 hover:text-black' href="">About</a>
                        <a className='hover:bg-gray-100 block rounded-lg px-2 py-3 hover:text-black' href="">Projects</a>
                        <a className='hover:bg-gray-100 block rounded-lg px-2 py-3 hover:text-black' href="">Education</a>
                        <a className='hover:bg-gray-100 block rounded-lg px-2 py-3 hover:text-black' href="">Experience</a>
                        <div className='h-[1px] bg-gray-200'></div>
                    </div>
                }
            </nav>
        </>

    )
}

export default Header;