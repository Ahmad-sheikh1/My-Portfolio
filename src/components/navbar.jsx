import React, { useState } from 'react';
import { Link } from "react-scroll"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <nav className="bg-[#f5f6fa] border-gray-200 ">
            <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto  px-28  xs:px-0  sm:px-6 md:px-12  lg:px-16">
                <a
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >

                    <span className="self-center xs:text-lg  text-2xl font-semibold whitespace-nowrap dark:text-Black">
                        MERN Stack Developer
                    </span>
                </a>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className={`w-full md:w-auto md:block ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#f5f6fa] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  md:bg-[#f5f6fa]  ">
                        <li>
                            <a
                                // to={"/About"}
                                className="block cursor-pointer py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent 0 md:p-0 dark:text-white md:dark:text-blue-500"
                                aria-current="page"
                            >
                                <Link
                                    activeClass="active"
                                    to="AboutP"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}

                                >
                                    About
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block cursor-pointer py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                <Link
                                    activeClass="active"
                                    to="SkillP"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}

                                >
                                    Skills
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block cursor-pointer py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                <Link
                                    activeClass="active"
                                    to="ProjectsP"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}

                                >
                                    Projects
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block cursor-pointer py-2 px-3 text-gray-900 rounded hover:bg-gray-100  md:border-0 md:hover:text-blue-700 md:p-0    "
                            ><Link
                                activeClass="active"
                                to="ContactP"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}

                            >
                                    Contact
                                </Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
