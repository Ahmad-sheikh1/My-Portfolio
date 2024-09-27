import React from 'react'
import frontendicon from "/frontendicon.svg"
import backendicon from "/backendicon.svg"
import otherskillsicon from "/otherskillsicon.svg"

const Skills = () => {

    return (
        <>

            <div id='SkillP' className="container m-auto mb-8">
                <h6 className="font-bold text-center">EDUCATION</h6>
                <p className="text-center my-1">
                    <b>Intermediate in Computer Science (ICS)</b>
                </p>
                <h3 className="font-bold text-center">SKILLS</h3>
                <p className="text-center my-2">
                    Below is a quick overview of my main technical skill sets and tools I use.
                </p>

                {/* <p className="text-center">(Private.)</p> */}
                <p />
            </div>


            {/* Skills Quarters */}
            <div className='px-20 xs:px-0 xs:m-auto xs:gap-y-6 lg:px-20  flex flex-row flex-wrap justify-between '>
                <div className='bg-white relative w-[250px]   rounded-xl grid place-items-center p-5 xs:w-full xs:px-20   md:w-[250px]'>
                    <div className='skill-holder mb-2 border-4 p-2 text-center  border-gray-300 rounded-full h-16 w-16'>
                        <img src={frontendicon} className='' alt="Frontend Icon" />
                    </div>
                    <h1 className='m-2 font-bold text-xl bg-white '>Front End</h1>
                    <ul className='list-disc  text-[#212529]  text-md-center '>
                        <li className='bg-white'>HTML5/CSS3</li>
                        <li className='bg-white'>JavaScript</li>
                        <li className='bg-white'>TypeScript</li>
                        <li className='bg-white'>React</li>
                        <li className='bg-white'>Angular18</li>
                        <li className='bg-white'>Next.js</li>
                        <li className='bg-white'>ngrx</li>
                        <li className='bg-white'>Tailwind CSS</li>
                        <li className='bg-white'>Bootstrap</li>
                        <li className='bg-white'>Material UI</li>
                        <li className='bg-white'>Redux/Redux Toolkit</li>
                    </ul>
                </div>
                <div className='bg-white relative w-[250px] rounded-xl grid place-items-center p-5 xs:w-full xs:px-20 md:w-[250px]'>
                    <div className='skill-holder mb-2 border-4 p-2 text-center  border-gray-300 rounded-full h-16 w-16 '>
                        <img src={backendicon} className='' alt="Frontend Icon" />
                    </div>
                    <h1 className='m-2 font-bold bg-white text-xl'>Back End</h1>
                    <ul className='list-disc  '>
                        <li className='bg-white'>Node</li>
                        <li className='bg-white'>Express</li>
                        <li className='bg-white'>MongoDB</li>
                        <li className='bg-white'>MySql</li>
                        <li className='bg-white'>jsonwebtoken</li>
                        <li className='bg-white'>multer</li>
                        <li className='bg-white'>cludinary</li>
                        <li className='bg-white'>GraphQl</li>
                        <li className='bg-white'>Stripe</li>
                        <li className='bg-white'>Socket.io</li>
                        <p className='bg-white'>More ...</p>

                    </ul>
                </div>
                <div className='bg-white relative w-[250px] rounded-xl grid place-items-center p-5 xs:w-full xs:px-20 md:w-[250px]'>
                    <div className='skill-holder mb-2 border-4 p-2 text-center  border-gray-300 rounded-full h-16 w-16'>
                        <img src={otherskillsicon} className='' alt="Frontend Icon" />
                    </div>
                    <h1 className='m-2 font-bold bg-white text-xl'>Others</h1>
                    <ul className='list-disc  '>
                        <li className='bg-white'>Docker</li>
                        <li className='bg-white'>AWS</li>
                        <li className='bg-white'>Azure</li>
                        <li className='bg-white'>Google Cloud</li>
                        <li className='bg-white'>Canva</li>
                        <li className='bg-white'>GatsBy</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Skills
