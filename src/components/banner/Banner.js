import React from 'react'
import {useTypewriter, Cursor} from "react-simple-typewriter"
const Banner = () => {

  const [text] = useTypewriter({
    words:["Professional Coder." , "Full Stack Developer." , "UI Designer"],
    Loop:true,
    typeSpeed:20,
    deleteSpeed:10,
    delaySpeed:2000
  })

  return (
    <section id="home" className='w-full py-20 flex items-center border-b-[1px] border-b-black font-titleFont'>
      <div className="w-1/2">
        <div className= "flex flex-col gap-5">
            <h4 className="text-lg font-normal">
                WELCOME TO MY WORLD
            </h4>
            <h1 className = "text-6xl font-bold text-white" > 
              {" "}
              Hi, I'm 
              <span className="text-designColor capitalize"> Abhishek </span>
            </h1>
            <h2 className = "text-4xl font-bold text-white"> a <span> {text} </span>
            <Cursor
              cursorBlinking="false"
              cursorStyle = " "
              cursorColor = "#ffo14f"
            >

            </Cursor>
            </h2>
            <p className="text-base font-bodyFont leading-6 tracking-wide">
              I use animation as a third dimensioon by which to simplify exprerienexs and kuiding thro each and every interaction. I'm not adding motion just to spruce things up , but doing it in ways that.
            </p>
        </div>
      </div>
      <div className = "w-1/2">

      </div>
    </section>
  )
}

export default Banner