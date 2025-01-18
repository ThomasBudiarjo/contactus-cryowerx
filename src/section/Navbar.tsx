import React, { useState } from 'react'
import DarkModeToggle from '../components/DarkModeToggle'
import { navLinks } from '../constants/navLinks'
import { useTheme } from '../context/ThemeContext'

const NavItems = () => {
    return (
        <ul className='flex flex-col items-center gap-10 md:flex-row gap-16 relative z-20'>
            {navLinks.map((link) => (
                <li key={link.id}>
                    <a
                        href={`#${link.id}`}
                        className="text-black font-medium text-md hover:text-gray-800 transition-colors dark:text-white dark:hover:text-gray-200"
                    >
                        {link.title}
                    </a>
                </li>
            ))}
        </ul>
    )
}


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { darkMode } = useTheme();

    const toogleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };
  return (
    <header className='fixed pt-2 top-0 left-0 right-0 z-50 bg-[#fbfbfb] dark:bg-slate-900'>
        <div className='max-w-7xl mx-auto px-6'>
            <div className='flex justify-between items-center py-5 mx-auto c-space'>
                <a href="/" className="text-black font-bold text-xl hover:text-gray-800 transition-colors dark:text-white dark:hover:text-gray-200 pl-2">
                 My Company
                </a>
                <div className='md:hidden flex items-center gap-6'>
                    <button onClick={toogleMenu} className="text-black hover:text-gray-800 focus:outline-none flex" aria-label="Toogle menu">
                        {darkMode ? (
                            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"}  alt="toogle" className="w-6 h-6" />
                        ) : (
                            <img src={isOpen ? "assets/close-black.svg" : "assets/menu-black.svg"}  alt="toogle" className="w-6 h-6" />
                        )}
                    </button>
                    <DarkModeToggle />
                </div>
                <nav className={`hidden md:flex flex items-center space-x-16`}>
                        <NavItems/>
                        <DarkModeToggle />
                </nav>
            </div>
            <div className={`${isOpen ? 'max-h-screen' : 'max-h-0'}
            absolute left-0 right-0 dark:bg-slate-900 bg-[#fbfbfb] backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto md:hidden;
            `}>
                <nav className='p-5'>
                    <NavItems />
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Navbar