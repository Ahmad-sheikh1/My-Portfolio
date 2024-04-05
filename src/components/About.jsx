import React from 'react'
import photo from "/ok.jpg"
import { FaGithub } from "react-icons/fa";

const About = () => {
    return (
        <>
            <section className='m-16' >
                <div className='flex justify-between items-center  p-20 xs:px-2 xs:block md:flex '>
                    <div className='w-[400px] xs:w-[320px] md:w-[400px] lg:h-[400px]   text-left '>
                        <h3 className='text-[#342b29] mb-1 ' >Hello, my name is</h3>
                        <h1 className='text-4xl font-bold mb-2 '>Ahmad Ali</h1>
                        <p className='text-[#788188] mb-2 items-center'>I'm a full-stack developer specialised in frontend and backend development for scalable web apps.I have made a variety of Mern Stack Applications. Want to know how I may help your project? Check out my projects from my GitHub Profile.
                            <span className='ml-2 text-black text-xl inline-block'>  <FaGithub />  </span><a href="https://github.com/Ahmad-sheikh1" className='ml-1 text-black font-bold text-xl'>Profile</a>
                        </p>
                        <a href='https://drive.google.com/file/d/1JIIO9HasNZF4C3kholzciG6wp2MOhshg/view' className='bg-black p-2 text-xs  rounded text-white'>My Resume</a>
                    </div>
                    <div>
                        <img src={photo} className="profile-image mb-3 lg:mb-0 mx-auto w-1/2 md:w-50 rounded-full border-8 mr-4 border-[#cad3c8] xs:m-auto xs:my-4 xs:w-[200px]" alt="..." />

                    </div>
                </div>
            </section>

        </>
    )
}

export default About
