import React from 'react'
import Title from '../layouts/Title';


const Resume = () => {
  return (
  <section id="resume" className='w-full py-20 border-b-[1px] border-b-black'>
    <div className="flex justify-center items-center text-center">
        <Title title="7+ YEARS OF EXPERIENCE" des="my Resume" />
    </div>
    <div>
        <ul className= "w-full grid grid-cols-4">
            <li className="resumeli">Education </li>
            <li className='resumeli'>Professional Skills </li>
            <li className='resumeli'>Experience </li>
            <li className='resumeli'>Achievments</li>
        </ul>
    </div>
  </section>
  )
}

export default Resume