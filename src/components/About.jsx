import React from 'react'
import photo from "/ok.jpg"
import { FaGithub } from "react-icons/fa";

const About = () => {
    return (
        <>
            <section className='m-16' id="AboutP" >
                <div className='flex justify-between items-center  p-20 xs:p-0 xs:relative xs:right-16 sm:right-0  xs:block sm:flex md:flex lg:p-20 '>
                    <div className='w-[400px] xs:w-[280px] md:w-[400px] lg:h-[400px]   text-left '>
                        <h3 className='text-[#342b29] mb-1 ' >Hello, my name is</h3>
                        <h1 className='text-4xl font-bold mb-2 '>Ahmad Ali</h1>
                        <p className='text-[#788188] mb-2 items-center'>I am a dedicated and results-driven Senior Full Stack Developer with extensive experience in designing and developing dynamic web applications. My expertise spans across a robust tech stack, including React, Angular, Node.js, Express, MySQL, and MongoDB, allowing me to create seamless, scalable, and user-friendly solutions.   Check out my projects from my GitHub Profile.
                            <span className='ml-2 text-black text-xl inline-block'>  <FaGithub />  </span><a href="https://github.com/Ahmad-sheikh1" className='ml-1 text-black font-bold text-xl'>Profile</a>
                        </p>
                        <a href='https://drive.google.com/file/d/1MmN3J4zdeG25KDapdzVlpNoGEIcR4Tqh/view?usp=sharing' className='bg-black p-2 text-xs  rounded text-white'>My Resume</a>
                    </div>
                    <div>
                        <img src={photo} className="profile-image mb-3 lg:mb-32 mx-auto w-1/2 md:w-50 rounded-full border-8 mr-4 border-[#cad3c8] xs:ml-14 xs:my-8 xs:w-full sm:w-[200px] md:my-0 lg:my-0   md:ml-0 " alt="..." />

                    </div>
                </div>
            </section>

        </>
    )
}

export default About
