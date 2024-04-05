import React from 'react'
import ShoesStore from "/Shoes-Store.png"
import { FaGithub } from "react-icons/fa";
import BucketStore from "/BucketStore.png"
import GithubCEO from "/GithubCEO.png";
import QuizApp from "/QuizApp.png";
import ExpenseT from "/ExpenseT.png";
import WeatherApp from "/WeatherApp.png"



const Projects = () => {
    const data = [
        { title: "Shoe Store", img: ShoesStore, livelink: "https://tasty-polo-shirt-dove.cyclic.app/", repolink: "https://github.com/Ahmad-sheikh1/Shoes-Website-MERN", tools: ["React", "Node", "MongoDB", "Express", "Tailwind", "jwt", "Google-auth"] },
        { title: "Bucket Expense Store", img: BucketStore, livelink: "https://bucket-store-ahmadsh.vercel.app/", repolink: "https://github.com/Ahmad-sheikh1/Bucket-Store", tools: ["Next", "MaterialUI", "Redux Toolkit", "Typescript"] },
        { title: "Github CEO Explorer", img: GithubCEO, livelink: "https://jazzy-khapse-3752a0.netlify.app/", repolink: "https://github.com/Ahmad-sheikh1/First-typescript-Project", tools: ["Typecript", "HTML5", "CSS3"] },
        { title: "Quiz App", img: QuizApp, livelink: "https://quiz-app-ahmadsh.vercel.app/", repolink: "https://github.com/Ahmad-sheikh1/Quiz-App", tools: ["Typecript", "Next", "MaterialUI"] },
        { title: "Expense Tracker", img: ExpenseT, livelink: "https://expense-tracker-ahmadsh.netlify.app/", repolink: "https://github.com/Ahmad-sheikh1/Expense-Tracker", tools: ["React", "Tailwind", "Redux"] },
        { title: "Weather App", img: WeatherApp, livelink: "https://ahmad-sheikh1.github.io/Weather-App/", repolink: "https://github.com/Ahmad-sheikh1/Weather-App", tools: ["HTML5", "CSS3", "Axios"] },
    ]
    return (
        <>
            <h1 id='ProjectsP' className='text-2xl font-bold m-10 xs:my-2 xs:mx-0  lg:m-10 '>Projects</h1>
            <div className='flex justify-between  flex-row flex-wrap px-20 xs:px-0 md:px-2 lg:px-20 m-10 gap-y-10'>
                {
                    data.map((ele, index) => {
                        return <>
                            <div  key={index} class="max-w-72 xs:w-full sm:w-1/2 md:w-1/2 lg:w-72 rounded overflow-hidden shadow-lg ">
                                <img class="w-full" src={ele.img} alt="Sunset in the mountains" />
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">{ele.title}</div>
                                    <a class="text-[#212529] bg-[#f8f9fa] " href={ele.livelink}>
                                        Live Link
                                    </a> <br />
                                    <a href={ele.repolink} class="text-[#212529] bg-[#f8f9fa] ">
                                        <span className='ml-2 text-black text-xl inline-block'>  <FaGithub />  </span><a href="" className='ml-1 text-black font-bold text-xl'>Repo Link</a>

                                    </a>
                                </div>
                                <div class="px-6 pt-4 pb-2">
                                    {
                                        ele.tools.map((ele, index) => {
                                            return <>
                                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ele}</span>

                                            </>
                                        })
                                    }
                                </div>
                            </div>
                        </>
                    })
                }
            </div>
        </>
    )
}

export default Projects
