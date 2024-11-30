import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import javascript from '../assets/javascript.png'
import java from '../assets/java-logo-1.webp'
import springboot from '../assets/springlogo.webp'
import python from '../assets/pythonlogo.webp'



function Experience() {
  const tech= [
    {
      id:1,
      src:html,
      title:"html",
      style:"shadow-orange-500"
    },
    {
      id:2,
      src:css,
      title:"css",
      style:"shadow-blue-500"
    },
    {
      id:3,
      src:java,
      title:"java",
      style:"shadow-orange-500"
    },
    {
      id:4,
      src:javascript,
      title:"javascript",
      style:"shadow-yellow-500"
    },
    {
      id:5,
      src:python,
      title:"python",
      style:"shadow-blue-500"
    },{
      id:6,
      src:react,
      title:"react",
      style:"shadow-blue-500"
    },
    {
      id:7,
      src:springboot,
      title:"springboot",
      style:"shadow-green-500"
    },
    {
      id:8,
      src:tailwind,
      title:"tailwind",
      style:"shadow-sky-500"
    },
    {
      id:9,
      src:node,
      title:"node",
      style:"shadow-green-500"
    },
  ]
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen ">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white" >
          <div>
            <p className=" text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Tech Stack</p>
            <p className="py-6 ">I have hands on knowledge of these technologies</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {
              tech.map(({id,src,title,style,})=>(
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
            </div>
              ))
            }
            
           
          </div>
        </div>
    </div>
  )
}

export default Experience